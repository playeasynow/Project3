import React, { Component } from "react";
import axios from "axios";
import scrollToComponent from 'react-scroll-to-component';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import "./style.css";

class Home extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
    this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
  }

  componentDidMount() {
    scrollToComponent(this.Top, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
    window.addEventListener("resize", this.updateWidth);
  }

  scrollToTopWithCallback() {
    scrollToComponent(this.Top, { offset: 0, align: 'middle', duration: 500, ease: 'inQuad' });
  }

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

  componentWillUnMount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  callBackend = () => {
    axios.get('https://project3-go-server.herokuapp.com/newuser')
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
  }

  onBtnClick = event => {
    event.preventDefault();
    this.callBackend();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <div id="first-row">
              <Jumbotron>
                <h1 className="text-left mb-4" ref={(section) => { this.Top = section; }}>
                  <strong><i>Find a coach today. For free.</i></strong>
                </h1>
                <h4 className="text-left">personal, professional, executive and wellness coaching</h4>
              </Jumbotron>
              <p className="btn btn-primary next-page animated infinite pulse" onClick={() => scrollToComponent(this.One, { offset: 0, align: 'top', duration: 300, ease: 'inQuad' })}>How it Works</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div id="second-row" className="container-fluid" ref={(section) => { this.One = section; }}>
              <h2>We help you find coaching</h2>
              <p>Career, personal, wellness</p>
              <button className="btn btn-primary" onClick={() => scrollToComponent(this.Two, { offset: 0, align: 'top', duration: 300, ease: 'inQuad' })}>Go To Two</button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div id="third-row" className="container-fluid" ref={(section) => { this.Two = section; }}>
              <h2>Professional coaches with years of experience</h2>
              <p>at an affordable rate</p>
              <br></br>
              <button className="btn btn-primary" onClick={() => scrollToComponent(this.Three, { offset: 0, align: 'top', duration: 300, ease: 'inQuad' })}>Go To Three</button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div id="fourth-row" className="container-fluid" ref={(section) => { this.Three = section; }}>
            <h2>Get matched!</h2>
              <p>using your information</p>
              <br></br>
              <Link
                onClick={this.toggleNav}
                className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                to="/signup"
              >
                <h4 className="btn btn-primary" >get started</h4>
              </Link>
              <button className="btn btn-primary" onClick={this.scrollToTopWithCallback}>Go to Top</button>

            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
