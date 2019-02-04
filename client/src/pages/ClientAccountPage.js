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
        // let email = this.state.email;

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
        },];
        this.setState({
            matches: userObj,
        });
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(userFB => {
            if (userFB) {
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
            const username = (snapshot.val() && snapshot.val().name) || '';
            const user = (snapshot.val() && snapshot.val().user) || '';
            const apptOneDay = (snapshot.val() && snapshot.val().apptOneDay) || '';
            const apptOneTime = (snapshot.val() && snapshot.val().apptOneTime) || '';
            const apptTwoDay = (snapshot.val() && snapshot.val().apptTwoDay) || '';
            const apptTwoTime = (snapshot.val() && snapshot.val().apptTwoTime) || '';
            const apptThreeDay = (snapshot.val() && snapshot.val().apptThreeDay) || '';
            const apptThreeTime = (snapshot.val() && snapshot.val().apptThreeTime) || '';
            const coachOne = (snapshot.val() && snapshot.val().coachOne) || '';
            const coachTwo = (snapshot.val() && snapshot.val().coachTwo) || '';
            const coachThree = (snapshot.val() && snapshot.val().coachThree) || '';

            let apptOne = {
                coachOne: coachOne,
                bookingDay: apptOneDay,
                bookingTime: apptOneTime
            }

            let apptTwo = {
                coachTwo: coachTwo,
                bookingDay: apptTwoDay,
                bookingTime: apptTwoTime
            }

            let apptThree = {
                coachThree: coachThree,
                bookingDay: apptThreeDay,
                bookingTime: apptThreeTime
            }

            self.setState({
                username: username,
                user: user,
                firstBooking: apptOne,
                secondBooking: apptTwo,
                thirdBooking: apptThree
            });

            if (apptOneDay === "") {
                self.setState({
                    firstBooked: false
                })
            } else {
                self.setState({
                    firstBooked: true
                })
            }

            if (apptTwoDay === "") {
                self.setState({
                    secondBooked: false
                })
            } else {
                self.setState({
                    secondBooked: true
                })
            }

            if (apptThreeDay === "") {
                self.setState({
                    thirdBooked: false
                })
            } else {
                self.setState({
                    thirdBooked: true
                })
            }
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
        let apptOne = {
            coachOne: this.state.firstCoach,
            bookingDay: this.state.date.toDateString(),
            bookingTime: this.state.date.toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" })
        };

        this.setState({
            displayCalendarOne: !this.state.displayCalendarOne,
            firstBooked: true,
            firstBooking: apptOne
        });

        firebase.database().ref('users/' + this.state.userID).update({
            apptOneDay: apptOne.bookingDay,
            apptOneTime: apptOne.bookingTime,
            coachOne: apptOne.coachOne,
            email: this.state.email,
            name: this.state.username,
            user: this.state.user,
        }, function (error) {
            if (error) {
                // The write failed...
            } else {
                // Data saved successfully!
            }
        });
    }

    scheduleSessionTwo = () => {
        let apptTwo = {
            coachTwo: this.state.secondCoach,
            bookingDay: this.state.date.toDateString(),
            bookingTime: this.state.date.toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" })
        };

        this.setState({
            displayCalendarTwo: !this.state.displayCalendarTwo,
            secondBooked: true,
            secondBooking: apptTwo
        });

        firebase.database().ref('users/' + this.state.userID).update({
            apptTwoDay: apptTwo.bookingDay,
            apptTwoTime: apptTwo.bookingTime,
            coachTwo: apptTwo.coachTwo,
            email: this.state.email,
            name: this.state.username,
            user: this.state.user,
        }, function (error) {
            if (error) {
                // The write failed...
            } else {
                // Data saved successfully!
            }
        });
    }

    scheduleSessionThree = () => {
        let apptThree = {
            coachThree: this.state.thirdCoach,
            bookingDay: this.state.date.toDateString(),
            bookingTime: this.state.date.toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric" })
        };

        this.setState({
            displayCalendarThree: !this.state.displayCalendarThree,
            thirdBooked: true,
            thirdBooking: apptThree
        });

        firebase.database().ref('users/' + this.state.userID).update({
            apptThreeDay: apptThree.bookingDay,
            apptThreeTime: apptThree.bookingTime,
            coachThree: apptThree.coachThree,
            email: this.state.email,
            name: this.state.username,
            user: this.state.user,
        }, function (error) {
            if (error) {
                // The write failed...
            } else {
                // Data saved successfully!
            }
        });
    }

    onChangeDate = date => {
        this.setState({ date });
    }

    render() {
        let calendarOne = null;
        let calendarTwo = null;
        let calendarThree = null;

        if (this.state.displayCalendarOne) {
            calendarOne = (
                <div>
                    <Calendar date={this.state.date} onChangeDate={this.onChangeDate} btnClickHandler={() => this.scheduleSessionOne()} />
                </div>
            )
        };

        if (this.state.displayCalendarTwo) {
            calendarTwo = (
                <div>
                    <Calendar date={this.state.date} onChangeDate={this.onChangeDate} btnClickHandler={() => this.scheduleSessionTwo()} />
                </div>
            )
        };

        if (this.state.displayCalendarThree) {
            calendarThree = (
                <div>
                    <Calendar date={this.state.date} onChangeDate={this.onChangeDate} btnClickHandler={() => this.scheduleSessionThree()} />
                </div>
            )
        };

        let apptOne = null;
        let apptTwo = null;
        let apptThree = null;

        if (this.state.firstBooked) {
            apptOne = (
                <div className="container text-center appt-style text-white">You booked:<br></br> <span className="appt-text">{this.state.firstBooking.bookingDay} <br></br>{this.state.firstBooking.bookingTime}</span> </div>
            )
        };

        if (this.state.secondBooked) {
            apptTwo = (
                <div className="container text-center appt-style text-white">You booked:<br></br> <span className="appt-text">{this.state.secondBooking.bookingDay} <br></br>{this.state.secondBooking.bookingTime}</span> </div>
            )
        };

        if (this.state.thirdBooked) {
            apptThree = (
                <div className="container text-center appt-style text-white">You booked:<br></br> <span className="appt-text">{this.state.thirdBooking.bookingDay} <br></br>{this.state.thirdBooking.bookingTime}</span> </div>
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
                                        <strong><i className="name-cyan">{this.state.username.toLowerCase()}</i></strong>
                                            <strong className="float-right pt-1">client account</strong>
                                        </h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Card title="Your Matched Coaches">
                                            {this.state.matches.length ? (
                                                <List>
                                                    <div className="row row-border">
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
                                                    <div className="row row-border">
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

                                                    <div className="row row-border">
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
                                <div className="row mt-5">
                                    <div className="col">
                                        <div className="container reset-box">
                                            <h4 className="mt-1 oswald-font" >Forgot your password?</h4>
                                            <PasswordForgetForm />
                                            <h4 className="mt-4 oswald-font" >Set new password?</h4>
                                            <PasswordChangeForm />
                                        </div>
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