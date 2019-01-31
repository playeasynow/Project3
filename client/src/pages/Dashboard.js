import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import User from "../components/User";
import Calendar from "../components/Calendar";
// import Footer from "../components/Footer";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import "./style.css";
// import "./script.js";

class Forms extends Component {
    state = {
        matches: [],
        displayCalendars: false,
        date: new Date()
    };

    componentDidMount() {
        this.getMatches();
    };

    displayCalendar = () => {
        this.setState({
            displayCalendars: !this.state.displayCalendars,
            date: new Date(),
            // key: this.state._id
        })
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

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

        // axios.get('https://project3-go-server.herokuapp.com/user/email', {
        // headers: {
        //     'Content-Type': 'application/json'
        // },  userObj})
        // .then(function (response) {
        // // handle success
        // console.log(response);
        // })
        // .catch(function (error) {
        // // handle error
        // console.log(error);
        // })
        // .then(function () {
        // // always executed
        // });
    };

    scheduleSession = () => {
        console.log("hello");
        console.log(this.props.key);
    }

    onChangeDate = date => {
        this.setState({ date });
        console.log(this.state.date);
      } 

    render() {

        let calendar = null;

        if (this.state.displayCalendars) {
            calendar = (
                <div>
                    <Calendar btnClickHandler={() => this.scheduleSession()}/>
                </div>
            )
        };

        return (
            <Container>
                <Row>
                    <Col size="md-12 white-background-dash">
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
                    <Col size="md-12 white-background-dash-2">
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
                                                                className="btn btn-primary"
                                                                key={user._id}
                                                            >Schedule Intro Session</button>
                                                        )}
                                                        Button2={() => (
                                                            <a
                                                            key={user._id}
                                                            href="https://scaledrone.github.io/webrtc/index.html"
                                                            className="btn btn-success"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >Start Intro Session</a>
                                                        //     <Link
                                                        //     onClick={this.toggleNav}
                                                        //     className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                                        //     to="/conference"
                                                        // >
                                                        //     <h4 className="btn btn-success" >Join Conference</h4>
                                                        // </Link>
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