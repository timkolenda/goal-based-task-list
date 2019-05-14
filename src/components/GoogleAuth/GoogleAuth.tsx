import './GoogleAuth.css';
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import { signIn, signOut } from '../../actions';

class GoogleAuth extends Component<any, any>{
    constructor(props: any){
        super(props);
    }


    componentDidMount(){
        (window as any).gapi.load('client:auth2', () => {
            (window as any).gapi.client.init({
                clientId: '772153906024-kqav17gnbk89ec6uflarepkiq2knei0q.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                (this as any).auth = (window as any).gapi.auth2.getAuthInstance();
                this.onAuthChange((this as any).auth.isSignedIn.get());
                (this as any).auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn: boolean) => {
        if(isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        (this as any).auth.signIn();
    }

    onSignOutClick = () => {
        (this as any).auth.signOut();
    }

    renderAuthButton = () => {
        if(this.props.isSignedIn === null) {
            return null;
        } else if(this.props.isSignedIn) {
            return (
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={this.onSignOutClick}
                >
                    {/* <FontAwesomeIcon icon={['fab', 'google']} className="icon-spacing" /> */}
                    Sign Out
                </button>
            )
        } else {
            return (
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={this.onSignInClick}
                >
                    <FontAwesomeIcon icon={['fab', 'google']} className="icon-spacing" />
                    Sign in with Google
                </button>
            )
        }
    }

    render(){
        return (
            <div data-test="component-google-auth">
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state: { auth: { isSignedIn: null | boolean } }) => {
    return { isSignedIn: state.auth.isSignedIn }
}


export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);