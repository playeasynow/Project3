import React, { Component } from "react";
import Card from "../components/Card";
import User from "../components/User";
import Calendar from "../components/Calendar";
import { withFirebase } from '../components/Firebase';
import { AuthUserContext } from '../components/Session';
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
            booked: false
        };
    }

    componentDidMount() {
        this.getMatches();
    };

    // this.props.firebase.user().on('value', snapshot => {
    //     const usersObject = snapshot.val();
    //     console.log(usersObject);

    //     const usersList = Object.keys(usersObject).map(key => ({
    //         ...usersObject[key],
    //         uid: key,
    //     }));

    //     this.setState({
    //         users: usersList,
    //         loading: false,
    //     });
    // });



    displayCalendar = (userId) => {
        this.setState({
            displayCalendars: !this.state.displayCalendars,
            date: new Date(),
            currentUser: userId
        })
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
        console.log(this.state.currentUser, "this is the user id")
        console.log(this.state.date);

        let appointmentBooking = {
            coachID: this.state.currentUser,
            bookingDate: this.state.date
        }
        this.setState({
            displayCalendars: !this.state.displayCalendars,
            appointmentDates: appointmentBooking,
            booked: true
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
        if (this.state.booked) {
            appointment = (
                <div>
                    <div className="container">You booked: {this.state.bookingDate}</div>
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
                                    <div className="col-8">
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
                                        <Card title="Your Matched Coaches:">
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
                                                                    onClick={() => this.displayCalendar(user._id)}
                                                                    className="btn hvr-underline-from-center"
                                                                    key={user._id}
                                                                >schedule intro session</button>
                                                            )}
                                                            Button2={() => (
                                                                <a
                                                                    key={user._id}
                                                                    href="https://playeasynow.github.io/video-chat/index.html"
                                                                    className="btn hvr-underline-from-center"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >start video chat</a>
                                                            )}/>
                                                    ))}
                                                </List>
                                            ) : (
                                                    <h2 className="text-center">Your matches will load shortly.</h2>
                                                )}
                                        </Card>
                                    </div>
                                    <div className="col-3">
                                        <div className="container mt-5">
                                            {calendar}
                                            {appointment}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <h4 className="mt-4" >Forgot your password?</h4>
                                        <PasswordForgetForm />
                                        <h4 className="mt-4" >Set new password?</h4>
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