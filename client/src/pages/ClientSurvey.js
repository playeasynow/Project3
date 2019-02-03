import React, { Component } from "react";
// import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Typeform from "../components/ClientTypeform";
import { Col, Row, Container } from "../components/Grid";

class Forms extends Component {
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
                                            to="/clientaccount">
                                            <div className="container">
                                            <p 
                                                className="btn animated infinite pulse hvr-underline-from-center gather-matches-link"
                                                >gather matches</p>
                                            </div>
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