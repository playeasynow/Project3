import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";
import "./style.css";
// import "./script.js";

class Forms extends Component {
    state = {
        books: []
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-left">
                                <strong><i>Dashboard</i></strong>
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div className="container">
                        <h2>CHAT</h2>
                        <div class="copy">Please wait for all guests to arrive.</div>
                        <video id="localVideo" autoplay muted></video>
                        <video id="remoteVideo" autoplay></video>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Forms;