import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { PasswordForgetLink } from '../PasswordForget';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import "./style.css";

const SignInPage = () => (
    <div className="container-fluid" id="sign-in-bg">
        <div className="container" id="sign-in-box">
            <h1 className="lobster-font">client login</h1><br></br>
            <ClientSignInForm />
            <h1 className="lobster-font mt-5">coach login</h1><br></br>
            <CoachSignInForm />
            <PasswordForgetLink />
            <SignUpLink />
        </div>
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class ClientSignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.CLIENTACCOUNT);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit}>
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
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="password"
                    />
                </div>
                <button
                    className="btn btn-dark login"
                    disabled={isInvalid}
                    type="submit">
                    login
        </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

class CoachSignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.COACHACCOUNT);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit}>
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
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="password"
                    />
                </div>
                <button
                    className="btn btn-dark login"
                    disabled={isInvalid}
                    type="submit">
                    login
        </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const ClientSignInForm = compose(
    withRouter,
    withFirebase,
)(ClientSignInFormBase);

const CoachSignInForm = compose(
    withRouter,
    withFirebase,
)(CoachSignInFormBase);

export default SignInPage;

export { ClientSignInForm, CoachSignInForm };