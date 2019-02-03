import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";
import "./style.css";

class Forms extends Component {
    state = {
        books: []
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col">
                                    <h2 className="text-left mb-3">
                                        <strong><i>Video Conference</i></strong>
                                    </h2>
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