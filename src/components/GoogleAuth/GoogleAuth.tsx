import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './GoogleAuth.css';

class GoogleAuth extends Component {

    state = { isSignedIn: null };

    componentDidMount(){
        (window as any).gapi.load('client:auth2', () => {
            (window as any).gapi.client.init({
                clientId: '772153906024-kqav17gnbk89ec6uflarepkiq2knei0q.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                (this as any).auth = (window as any).gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: (this as any).auth.isSignedIn.get() });
                (this as any).auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: (this as any).auth.isSignedIn.get() });
    }

    onSignInClick = () => {
        (this as any).auth.signIn();
    }

    onSignOutClick = () => {
        (this as any).auth.signOut();
    }

    renderAuthButton = () => {
        if(this.state.isSignedIn === null) {
            return null;
        } else if(this.state.isSignedIn) {
            return (
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={this.onSignOutClick}
                >
                    <FontAwesomeIcon icon={['fab', 'google']} className="icon-spacing" />
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


export default GoogleAuth;