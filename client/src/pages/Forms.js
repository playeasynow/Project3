import React, { Component } from "react";
import Form from "../components/Form";
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
        // console.log(event.target);
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.sendToDatabase();
    };

    sendToDatabase = () => {
        let userObj = {
            fname: this.state.fname,
            lname: this.state.lname,
            pword: this.state.pword,
            user: this.state.user,
            confirmedEmail: this.state.email
        };
        console.log(userObj);
        // API.getBooks(this.state.q)
        //   .then(res =>
        //     this.setState({
        //       books: res.data
        //     })
        //   )
        //   .catch(() =>
        //     this.setState({
        //       books: [],
        //       message: "No New Books Found, Try a Different Query"
        //     })
        //   );
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
                                        fname={this.state.fname}
                                        lname={this.state.lname}
                                        pword={this.state.pword}
                                        user={this.state.user}
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