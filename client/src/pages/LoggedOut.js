import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";

class LoggedOut extends Component {
    authenticate() {
        console.log("logged in!");
        // this.webAuth = new auth0.WebAuth({
        //     domain: AUTH0_DOMAIN,
        //     clientID: AUTH0_CLIENT_ID,
        //     scope: 'openid profile',
        //     audience: AUTH0_API_AUDIENCE,
        //     responseType: 'token id_token',
        //     redirectUri: AUTH0_CALLBACK_URL
        // });
        // this.webAuth.authorize();
    }

    render() {
        return (
            <div className="container">
                <div className="col-xs-12 jumbotron text-center">
                    <h1>Guru Match</h1>
                    <p>Find a coach today. For free.</p>
                    <button onClick={this.authenticate} className="btn btn-primary btn-lg btn-login btn-block text-white">Sign In</button>
                </div>
            </div>
        );
    }
}

export default LoggedOut;