import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import axios from "axios";
import "./style.css";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
    <div className="container-fluid" id="sign-up-bg">
        <div className="container" id="sign-up-box">
            <h1 className="lobster-font">create an account</h1><br></br>
            <SignUpForm />
        </div>
    </div>
);

const INITIAL_STATE = {
    name: '',
    email: '',
    user: "",
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    };

    onSubmit = event => {
        const { name, email, user, passwordOne } = this.state;

        // const apptOne = "";
        // const apptTwo = "";
        // const apptThree = "";
        // const coach = "";

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        name,
                        email,
                        user,
                        // apptOne,
                        // apptTwo,
                        // apptThree,
                        // coach
                    });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                return (user === "client") ? this.props.history.push(ROUTES.CLIENTSURVEY) : this.props.history.push(ROUTES.COACHSURVEY);
            })
            .catch(error => {
                this.setState({ error });
            });        

        let userObj = {
            name: name,
            user: user,
            confirmedEmail: email
        };

        axios.post('https://project3-go-server.herokuapp.com/newuser', userObj, {
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(function (response) {
        // handle success
        console.log(response);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onChangeRadio = event => {
        let user = event.target.value;
        this.setState({
            user: user,
        });
    };

    render() {
        const {
            name,
            email,
            user,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            user === '' ||
            email === '' ||
            name === '';

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                        type="text"
                        placeholder="full name"
                    />
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="email address"
                    />
                </div>

                <fieldset className="form-group oswald-font">
                    <div className="row mt-2 pl-1">
                        <legend className="col-form-label col-sm-2 pt-0 label-padding">client or coach?</legend>
                        <div className="col-sm-10">
                            <div className="form-check custom-control-inline">
                                <input onChange={this.onChangeRadio} className="form-check-input" type="radio" name="gridRadios" value="client" />
                                <label className="form-check-label">
                                    client</label>
                            </div>
                            <div className="form-check custom-control-inline">
                                <input onChange={this.onChangeRadio} className="form-check-input" type="radio" name="gridRadios" value="coach" />
                                <label className="form-check-label">
                                    coach</label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <div className="form-group">
                    <input
                        className="form-control"
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="password"
                    />
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="confirm password"
                    />
                </div>

                <button
                    className="btn btn-dark"
                    disabled={isInvalid}
                    type="submit">
                    start questionnaire
                    </button>

                {error && <p>{error.message}</p>}

            </form>
        );
    }
}

const SignUpLink = () => (
    <p className="mt-2">
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };