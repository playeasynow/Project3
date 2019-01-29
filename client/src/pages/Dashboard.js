import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import User from "../components/User";
// import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import "./style.css";
// import "./script.js";

class Forms extends Component {
    state = {
        matches: []
    };

    componentDidMount() {
        this.getMatches();
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
                                {/* <div className="col-4">
                                    <h2 className="text-left mb-3">
                                        <strong><i>Hello</i></strong>
                                    </h2>
                                </div> */}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div className="container">
                            {/* <h2>Here are your matches:</h2> */}
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
                                            onClick={() => this.handleBookDelete(user._id)}
                                            className="btn btn-danger ml-12"
                                            >
                                            Delete
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
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Forms;