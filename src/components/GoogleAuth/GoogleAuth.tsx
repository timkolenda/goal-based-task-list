import React, { Component } from "react";


class GoogleAuth extends Component {

    componentDidMount(){
        (window as any).gapi.load('client:auth2', () => {
            (window as any).gapi.client.init({
                clientId: '772153906024-kqav17gnbk89ec6uflarepkiq2knei0q.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }


    render(){
        return <div>GoogleAuth</div>
    }
}


export default GoogleAuth;