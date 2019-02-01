import React, { Component } from "react";
import Card from "../components/Card";
import User from "../components/User";
import Calendar from "../components/Calendar";
// import Footer from "../components/Footer";
// import { AuthUserContext } from '../components/Session';
import { PasswordForgetForm } from '../components/PasswordForget';
import PasswordChangeForm from '../components/PasswordChange';
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import "./style.css";

class AccountPage extends Component {
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
                    <Calendar btnClickHandler={() => this.scheduleSession()} />
                </div>
            )
        };

        // let user = this.state;

        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <div className="container-fluid" id="dashboard-bg">
                            <div className="container" id="dashboard-box">
                                <div className="row">
                                    <div className="col-8">
                                        <h2 className="text-left mb-3">
                                            <strong><i>Hi, Hannah! </i></strong>
                                        </h2>
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
                                                                >schedule intro session</button>
                                                            )}
                                                            Button2={() => (
                                                                <a
                                                                    key={user._id}
                                                                    href="https://scaledrone.github.io/webrtc/index.html"
                                                                    className="btn btn-success"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >start intro session</a>
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
                                        <h4 className="mt-4" >Forgot your password?</h4>
                                        <PasswordForgetForm />
                                        <h4 className="mt-4" >Set new password?</h4>
                                        <PasswordChangeForm />
                                    </div>
                                    <div className="col-4">
                                        <div className="container mt-5">
                                            {calendar}
                                        </div>
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

export default AccountPage;