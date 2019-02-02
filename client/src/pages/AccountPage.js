import React, { Component } from "react";
import Card from "../components/Card";
import User from "../components/User";
import Calendar from "../components/Calendar";
import { withFirebase } from '../components/Firebase';
// import { AuthUserContext } from '../components/Session';
// import Footer from "../components/Footer";
import { PasswordForgetForm } from '../components/PasswordForget';
import PasswordChangeForm from '../components/PasswordChange';
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import "./style.css";

class AccountPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: [],
            displayCalendars: false,
            date: new Date(),
            users: [],
            authUser: null,
            appointmentDates: [],
            firstCoach: "",
            secondCoach: "",
            thirdCoach: "",
            firstBooking: {},
            secondBooking: {},
            thirdBooking: {},
            firstRender: false,
            secondRender: false,
            thirdRender: false
        };
    }

    componentDidMount() {
        this.getMatches();
    };

    displayCalendarOne = (userId) => {
        this.setState({
            displayCalendars: !this.state.displayCalendars,
            date: new Date(),
            firstCoach: userId
        });
    };

    displayCalendarTwo = (userId) => {
        this.setState({
            displayCalendars: !this.state.displayCalendars,
            date: new Date(),
            secondCoach: userId
        });
    };

    displayCalendarThree = (userId) => {
        this.setState({
            displayCalendars: !this.state.displayCalendars,
            date: new Date(),
            thirdCoach: userId
        });
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
    };

    scheduleSession = () => {
        let apptOne = {
            coachID: this.state.firstCoach,
            bookingDate: this.state.date
        };

        this.setState({
            displayCalendars: !this.state.displayCalendars,
            firstBooked: true,
            firstBooking: apptOne
        });
    }

    onChangeDate = date => {
        this.setState({ date });
    }

    render() {

        let calendar = null;
        if (this.state.displayCalendars) {
            calendar = (
                <div>
                    <Calendar date={this.state.date} onChangeDate={this.onChangeDate} btnClickHandler={() => this.scheduleSession()} />
                </div>
            )
        };

        let appointment = null;
        if (this.state.firstBooked) {
            appointment = (
                <div>
                    <div className="container oswald-font">You booked:<br></br> {this.state.date.toDateString()} <br></br>{this.state.date.toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" })} </div>
                </div>
            )
        };

        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <div className="container-fluid" id="dashboard-bg">
                            <div className="container" id="dashboard-box">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="text-left mb-3 account-page">
                                            <strong><i>my account </i></strong>
                                        </h2>
                                        {/* <AuthUserContext.Consumer>
                                            {authUser => authUser ? console.log(authUser) : "hello"}
                                        </AuthUserContext.Consumer> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-9">
                                        <Card title="Your Matched Coaches">
                                            {this.state.matches.length ? (
                                                <List>
                                                    <User
                                                        key={this.state.matches[0]._id}
                                                        name={this.state.matches[0].name}
                                                        coachingTypes={this.state.matches[0].coachingTypes.join(", ")}
                                                        email={this.state.matches[0].confirmedEmail}
                                                        Button={() => (
                                                            <button
                                                                onClick={() => this.displayCalendarOne(this.state.matches[0]._id)}
                                                                className="btn hvr-underline-from-center"
                                                                key={this.state.matches[0]._id}
                                                            >schedule intro session</button>
                                                        )}
                                                        Button2={() => (
                                                            <a
                                                                key={this.state.matches[0]._id}
                                                                href="https://playeasynow.github.io/video-chat/index.html#f8b84f"
                                                                className="btn hvr-underline-from-center"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >start video chat</a>
                                                        )} />
                                                    <User
                                                        key={this.state.matches[1]._id}
                                                        name={this.state.matches[1].name}
                                                        coachingTypes={this.state.matches[1].coachingTypes.join(", ")}
                                                        email={this.state.matches[1].confirmedEmail}
                                                        Button={() => (
                                                            <button
                                                                onClick={() => this.displayCalendarTwo(this.state.matches[1]._id)}
                                                                className="btn hvr-underline-from-center"
                                                                key={this.state.matches[1]._id}
                                                            >schedule intro session</button>
                                                        )}
                                                        Button2={() => (
                                                            <a
                                                                key={this.state.matches[1]._id}
                                                                href="https://playeasynow.github.io/video-chat/index.html#f33d3c"
                                                                className="btn hvr-underline-from-center"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >start video chat</a>
                                                        )} />
                                                    <User
                                                        key={this.state.matches[2]._id}
                                                        name={this.state.matches[2].name}
                                                        coachingTypes={this.state.matches[2].coachingTypes.join(", ")}
                                                        email={this.state.matches[2].confirmedEmail}
                                                        Button={() => (
                                                            <button
                                                                onClick={() => this.displayCalendarThree(this.state.matches[2]._id)}
                                                                className="btn hvr-underline-from-center"
                                                                key={this.state.matches[2]._id}
                                                            >schedule intro session</button>
                                                        )}
                                                        Button2={() => (
                                                            <a
                                                                key={this.state.matches[2]._id}
                                                                href="https://playeasynow.github.io/video-chat/index.html#fa179c"
                                                                className="btn hvr-underline-from-center"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >start video chat</a>
                                                        )} />
                                                </List>
                                            ) : (
                                                    <h2 className="text-center">Your matches will load shortly.</h2>
                                                )}
                                        </Card>
                                    </div>
                                    <div className="col-3 pr-0">
                                        <div className="container mt-5">
                                            {calendar}
                                            {appointment}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <h4 className="mt-4 oswald-font" >Forgot your password?</h4>
                                        <PasswordForgetForm />
                                        <h4 className="mt-4 oswald-font" >Set new password?</h4>
                                        <PasswordChangeForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row >
            </Container >
        );
    }
}

export default withFirebase(AccountPage);