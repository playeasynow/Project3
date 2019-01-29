import React, { Component } from "react";
import Form from "../components/Form";
// import axios from "axios";
// import Footer from "../components/Footer";
// import API from "../utils/API";
import Typeform from "../components/Typeform";
import { Col, Row, Container } from "../components/Grid";

class Forms extends Component {
    state = {
        fname: "",
        lname: "",
        pword: "",
        user: "",
        email: ""
    };

    constructor(props) {
        super(props);
        this.openForm = this.openForm.bind(this);
    }

    openForm() {
        this.typeformEmbed.typeform.open();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleInputChangeRadio = event => {
        let user = event.target.value;
        this.setState({
            user: user,
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.sendToDatabase();
    };

    sendToDatabase = () => {
        let userObj = {
            name: this.state.fname + " " + this.state.lname,
            pword: this.state.pword,
            user: this.state.user,
            confirmedEmail: this.state.email
        };
        console.log(userObj);
        // axios.post('https://project3-go-server.herokuapp.com/newuser', {
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

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-6">
                                    <h2 className="text-left mb-3">
                                        <strong><i>Signup Form</i></strong>
                                    </h2>
                                    <Form
                                        handleInputChange={this.handleInputChange}
                                        handleFormSubmit={this.handleFormSubmit}
                                        handleInputChangeRadio={this.handleInputChangeRadio}
                                        fname={this.state.fname}
                                        lname={this.state.lname}
                                        pword={this.state.pword}
                                        gridRadios={this.state.user}
                                        email={this.state.email}
                                    />
                                </div>
                                <div className="col-4">
                                    <h2 className="text-left mb-3">
                                        <strong><i></i></strong>
                                    </h2>
                                    <Typeform />
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