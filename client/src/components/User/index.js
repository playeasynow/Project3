import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function User({ name, email, coachingTypes, Button, Button2 }) {
    return (
        <ListItem>
        <Row className="flex-wrap-reverse">
            <Col size="md-8">
                <h3 className="font-italic">{name}</h3>
            </Col>
            <Col size="md-4">
                <div className="btn-container">
                    <Button />
                </div>
            </Col>
        </Row>
        <Row>
            <Col size="md-8">
                <a className="font-italic small" target="_top" href={email}>{email}</a>
            </Col>
        </Row>
        <Row>
            <Col size="md-8">
                <p className="mt-2">{coachingTypes}</p>
            </Col>
            <Col size="md-4">
                <div className="btn-container">
                    <Button2 />
                </div>
            </Col>
        </Row>
        </ListItem>
    );
}

export default User;