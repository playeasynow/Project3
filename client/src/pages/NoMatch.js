import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
    return(
        <Container>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1 className="text-center text-white">404 <br></br>Page Not Found</h1>
                        <h1 className="text-center">
                            <span role="img" aria-label="Face with Rolling Eyes Emoji">
                            🙄
                            </span>
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;