import React, { Component } from "react";
import Card from "../components/Card";
import User from "../components/User";
import Calendar from "../components/Calendar";
// import axios from "axios";
import { withFirebase } from '../components/Firebase';
import * as firebase from 'firebase';
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
            displayCalendarOne: false,
            displayCalendarTwo: false,
            displayCalendarThree: false,
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
            userID: null,
            username: "",
            email: ""
        };
    }

    getMatches = (email) => {

        // axios.get('https://project3-go-server.herokuapp.com/matches/'+ email)
        // .then(function (response) {
        //   // handle success
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   // handle error
        //   console.log(error);
        // })
        // .then(function () {
        //   // always executed
        // });      

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
        }];

        this.setState({
            matches: userObj,
        });
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(userFB => {
            if (userFB) {
                console.log('This is the user: ', userFB)
                this.setState({
                    userID: userFB.uid,
                    email: userFB.email
                });
                this.searchFirebase(userFB.uid);
                this.getMatches(userFB.email); 
            }
        });
    };

    searchFirebase(userFBuid) {
        var self = this;
        firebase.database().ref('/users/' + userFBuid).once('value').then(function (snapshot) {
            const username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
            const user = (snapshot.val() && snapshot.val().user) || 'Anonymous';
            self.setState({
                username: username,
                user: user
              });
            console.log(username);
            console.log(user);
            console.log(self.state.email);
        });
    }

    displayCalendarOne = (userId) => {
        this.setState({
            displayCalendarOne: !this.state.displayCalendarOne,
            date: new Date(),
            firstCoach: userId
        });
    };

    displayCalendarTwo = (userId) => {
        this.setState({
            displayCalendarTwo: !this.state.displayCalendarTwo,
            date: new Date(),
            secondCoach: userId
        });
    };

    displayCalendarThree = (userId) => {
        this.setState({
            displayCalendarThree: !this.state.displayCalendarThree,
            date: new Date(),
            thirdCoach: userId
        });
    };

    scheduleSessionOne = () => {
        let appt = {
            coachID: this.state.firstCoach,
            bookingDate: this.state.date
        };

        this.setState({
            displayCalendarOne: !this.state.displayCalendarOne,
            firstBooked: true,
            firstBooking: appt
        });
    }

    scheduleSessionTwo = () => {
        let appt = {
            coachID: this.state.secondCoach,
            bookingDate: this.state.date
        };

        this.setState({
            displayCalendarTwo: !this.state.displayCalendarTwo,
            secondBooked: true,
            secondBooking: appt
        });
    }

    scheduleSessionThree = () => {
        let appt = {
            coachID: this.state.thirdCoach,
            bookingDate: this.state.date
        };

        this.setState({
            displayCalendarThree: !this.state.displayCalendarThree,
            thirdBooked: true,
            thirdBooking: appt
        });


    }

    onChangeDate = date => {
        this.setState({ date });
    }

    render() {

        let calendarOne = null;
        if (this.state.displayCalendarOne) {
            calendarOne = (
                <div>
                    <Calendar date={this.state.date} onChangeDate={this.onChangeDate} btnClickHandler={() => this.scheduleSessionOne()} />
                </div>
            )
        };

        let calendarTwo = null;
        if (this.state.displayCalendarTwo) {
            calendarTwo = (
                <div>
                    <Calendar date={this.state.date} onChangeDate={this.onChangeDate} btnClickHandler={() => this.scheduleSessionTwo()} />
                </div>
            )
        };

        let calendarThree = null;
        if (this.state.displayCalendarThree) {
            calendarThree = (
                <div>
                    <Calendar date={this.state.date} onChangeDate={this.onChangeDate} btnClickHandler={() => this.scheduleSessionThree()} />
                </div>
            )
        };

        let apptOne = null;
        if (this.state.firstBooked) {
            apptOne = (
                <div className="container text-center appt-style text-white">You booked:<br></br> <span className="appt-text">{this.state.firstBooking.bookingDate.toDateString()} <br></br>{this.state.firstBooking.bookingDate.toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" })}</span> </div>
            )
        };

        let apptTwo = null;
        if (this.state.secondBooked) {
            apptTwo = (
                <div className="container text-center appt-style text-white">You booked:<br></br> <span className="appt-text">{this.state.secondBooking.bookingDate.toDateString()} <br></br>{this.state.secondBooking.bookingDate.toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" })}</span> </div>
            )
        };

        let apptThree = null;
        if (this.state.thirdBooked) {
            apptThree = (
                <div className="container text-center appt-style text-white">You booked:<br></br> <span className="appt-text">{this.state.thirdBooking.bookingDate.toDateString()} <br></br>{this.state.thirdBooking.bookingDate.toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" })}</span> </div>
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
                                            <strong><i>{this.state.username}</i></strong>
                                            <strong className="float-right">coach account</strong>
                                        </h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Card title="Your Matched Clients">
                                            {this.state.matches.length ? (
                                                <List>
                                                    <div className="row">
                                                        <div className="col-9">
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
                                                        </div>
                                                        <div className="col-3">
                                                            {calendarOne} {apptOne}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-9">
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
                                                        </div>
                                                        <div className="col-3">
                                                            {calendarTwo} {apptTwo}
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-9">
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
                                                        </div>
                                                        <div className="col-3">
                                                            {calendarThree} {apptThree}
                                                        </div>
                                                    </div>
                                                </List>
                                            ) : (
                                                    <h2 className="text-center">Your matches will load shortly.</h2>
                                                )}
                                        </Card>
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