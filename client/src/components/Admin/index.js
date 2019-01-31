import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";

class Admin extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12 white-background">
                        <Jumbotron>
                            <h1 className="text-left">
                                <strong><i>Admin</i></strong>
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Admin;