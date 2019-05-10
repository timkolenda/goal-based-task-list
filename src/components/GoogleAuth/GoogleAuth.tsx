import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GoogleAuth extends Component {

    state = { isSignedIn: null };

    componentDidMount(){
        console.log((window as any).gapi);
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

    renderAuthButton = () => {
        if(this.state.isSignedIn === null) {
            return null;
        } else if(this.state.isSignedIn) {
            return <div>Signed in</div>
        } else {
            return <div>Not Signed in</div>
        }
    }

    render(){
        return (
            <div data-test="component-google-auth">
                {this.renderAuthButton()}
                <FontAwesomeIcon icon={['fab', 'google']} />
            </div>
        )
    }
}


export default GoogleAuth;