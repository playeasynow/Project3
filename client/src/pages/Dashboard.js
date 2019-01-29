import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import User from "../components/User";
import Calendar from "../components/Calendar";
// import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import "./style.css";
// import "./script.js";

class Forms extends Component {
    state = {
        matches: [],
        displayCalendars: false
    };

    componentDidMount() {
        this.getMatches();
    }

    displayCalendar = () => {
        this.setState({
            displayCalendars: !this.state.displayCalendars,
            date: new Date()
        })
    }

    getMatches = () => {
        let userObj = [{
            _id: "abxcsw",
            name: "Trisha Wheeler",
            coachingTypes: ["Personal Coaching", "Entrepreneurial Coaching"],
            confirmedEmail: "twheeler@gmail.com"
        },
        {
            _id: "abxzsw",
            name: "Brandon Lopez",
            coachingTypes: ["Personal Coaching", "Entrepreneurial Coaching"],
            confirmedEmail: "blopez@gmail.com"
        },
        {
            _id: "abxcsc",
            name: "May West",
            coachingTypes: ["Personal Coaching"],
            confirmedEmail: "mwest@gmail.com"
        },];
        this.setState({
            matches: userObj,
        });

        // API.getSavedBooks()
        // .then(res =>
        //     this.setState({
        //         books: res.data
        //     })
        // )
        // .catch(err => console.log(err));
    };

    render() {

        let calendar = null;

        if (this.state.displayCalendars) {
            calendar = (
                <div>
                    <Calendar />
                </div>
            )
        };

        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-6">
                                    <h2 className="text-left mb-3">
                                        <strong><i>Hi, Hannah!</i></strong>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                    <Card title="Here are your matches:" icon="user-circle">
                                        {this.state.matches.length ? (
                                            <List>
                                                {this.state.matches.map(user => (
                                                    <User
                                                        key={user._id}
                                                        name={user.name}
                                                        coachingTypes={user.coachingTypes.join(", ")}
                                                        email={user.confirmedEmail}
                                                        Button={() => (
                                                            <button
                                                                onClick={() => this.displayCalendar()}
                                                                className="btn btn-primary ml-12"
                                                            >
                                                                Schedule Intro Session
                                            </button>
                                                        )}
                                                    />
                                                ))}
                                            </List>
                                        ) : (
                                                <h2 className="text-center">Your matches will load shortly.</h2>
                                            )}
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <div className="container mt-5">
                                        {calendar}
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