import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignOutButton from '../SignOut';
import "./style.css";

const Nav = ({ authUser }) => (
    <div>{authUser ? <NavAuth /> : <NavNonAuth />}</div>
  );


class NavAuth extends Component {
    state = {
        open: false,
        width: window.innerWidth
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }
        this.setState(newState);
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnMount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render() {

        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light">
                <div className="container pl-0">
                    <Link className="navbar-brand pt-3 pb-0" to="/">
                        <div className="logo pb-2"></div>
                    </Link>
                    <button
                        onClick={this.toggleNav}
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`${this.state.open ? "" : "collapse "}navbar-collapse justify-content-end`}>
                        <ul className="nav">
                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/signup"
                                >
                                    <h4 className="oswald-font">get started</h4>
                                </Link>
                            </li>
                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/coaches"
                                >
                                    <h4 className="oswald-font">for coaches</h4>
                                </Link>
                            </li>

                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/account"
                                >
                                    <h4 className="oswald-font">account</h4>
                                </Link>
                            </li>
{/* 
                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/signin"
                                >
                                    <h4 className="oswald-font">login</h4>
                                </Link>
                            </li> */}
                            <li className="nav-item mt-3">
                                <SignOutButton />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

class NavNonAuth extends Component {
    state = {
        open: false,
        width: window.innerWidth
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }
        this.setState(newState);
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnMount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render() {

        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light">
                <div className="container pl-0">
                    <Link className="navbar-brand pt-3 pb-0" to="/">
                        <div className="logo pb-2"></div>
                    </Link>
                    <button
                        onClick={this.toggleNav}
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`${this.state.open ? "" : "collapse "}navbar-collapse justify-content-end`}>
                        <ul className="nav">
                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/signup"
                                >
                                    <h4 className="oswald-font">get started</h4>
                                </Link>
                            </li>
                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/coaches"
                                >
                                    <h4 className="oswald-font">for coaches</h4>
                                </Link>
                            </li>

                            {/* <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/account"
                                >
                                    <h4 className="oswald-font">account</h4>
                                </Link>
                            </li> */}

                            <li className="nav-item mt-3">
                                <Link
                                    onClick={this.toggleNav}
                                    className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                    to="/signin"
                                >
                                    <h4 className="oswald-font">login</h4>
                                </Link>
                            </li>
                            {/* <li className="nav-item mt-3">
                                <SignOutButton />
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Nav;