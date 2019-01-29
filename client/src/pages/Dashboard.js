import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";

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
                        <h2>HELLO</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Forms;