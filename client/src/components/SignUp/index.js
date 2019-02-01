import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
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
    username: '',
    email: '',
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
        const { email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.SURVEY);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();

    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <input
                    className="form-control"
                    name="username"
                    value={username}
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