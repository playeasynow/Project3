import React, { Component } from "react";
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

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <div id="first-row">
              <Jumbotron>
                <h1 className="text-left mt-5 pt-3 text-center" ref={(section) => { this.Top = section; }}>
                  <strong>Find a coach today. For free.</strong>
                </h1>
                <h4 className="text-center">personal, professional and wellness coaching</h4>
                <div className="container"><p className="btn btn-dark next-page animated infinite pulse" onClick={() => scrollToComponent(this.One, { offset: 0, align: 'top', duration: 300, ease: 'inQuad' })}>how it works</p></div>
              </Jumbotron>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div id="second-row" className="container-fluid" ref={(section) => { this.One = section; }}>
              <div className="container border-box">
                <h2>We help you find coaches</h2>
                <p>Whether it's to help your career, overall wellness and/or personal life </p>
                <button className="btn btn-primary" onClick={() => scrollToComponent(this.Two, { offset: 0, align: 'top', duration: 300, ease: 'inQuad' })}>Go To Two</button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div id="third-row" className="container-fluid" ref={(section) => { this.Two = section; }}>
              <div className="container mt-5 border-box">
                <h2>Professional coaches with years of experience at an affordable rate</h2>
                <p>Coaches can tell us about their experience so that we match them with the right clients</p>
                <button className="btn btn-primary" onClick={() => scrollToComponent(this.Three, { offset: 0, align: 'top', duration: 300, ease: 'inQuad' })}>Go To Three</button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div id="fourth-row" className="container-fluid" ref={(section) => { this.Three = section; }}>
              <div className="container mt-5 border-box">
                <h2>Tell us a little about yourself to start talking to potential coaches as early as this week!</h2>
                <Link
                  className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                  to="/signup">
                  <button className="btn btn-primary" >get started</button>
                </Link>
                <button className="btn btn-primary" onClick={this.scrollToTopWithCallback}>Go to Top</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
