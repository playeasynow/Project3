import React, { Component } from "react";
import axios from "axios";
// import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Typeform from "../components/ClientTypeform";
import { Col, Row, Container } from "../components/Grid";

class Forms extends Component {
    state = {
        fname: "",
        lname: "",
        user: "",
        email: ""
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.sendToDatabase();
    };

    sendToDatabase = () => {
        let userObj = {
            name: this.state.fname + " " + this.state.lname,
            user: this.state.user,
            confirmedEmail: this.state.email
        };
        console.log(userObj);

        axios.post('https://project3-go-server.herokuapp.com/newuser', userObj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <div className="container-fluid" id="dashboard-bg">
                            <div className="container" id="survey-box">
                                <div className="row">
                                    <div className="col">
                                        <h4 className="text-left mb-3">
                                            <i>complete the form below, and then hit the gather matches button</i>
                                        </h4>
                                        <Typeform />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <Link
                                            className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                            to="/account">
                                            <div className="container"><p className="btn animated infinite pulse hvr-underline-from-center gather-matches-link" >gather matches</p></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Forms;