import React, { Component } from "react";
import scrollToComponent from 'react-scroll-to-component';
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
            <div className="first-row" id="first-row">
              <div className="jumbotron container oswald-font">
                <h1 className="text-left mt-5 pt-3 text-center headline animated slideInDown first-headline" ref={(section) => { this.Top = section; }}>
                  <strong>find a coach today. for free.</strong>
                </h1>
                <h4 className="text-center">personal, business and fitness coaching</h4>
                <div className="container"><p className="btn next-page animated infinite pulse hvr-underline-from-center works-btn" onClick={() => scrollToComponent(this.One, { offset: 0, align: 'top', duration: 300, ease: 'inQuad' })}>how it works</p></div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div id="second-row" className="container-fluid" ref={(section) => { this.One = section; }}>
              <div className="container border-box text-center">
                <h1 className="headline second-headline">we help you find the right type of coaching</h1>
                <div className="row content-row">
                  <div className="col">

                    <div className="card-group">
                      <div className="card">
                        <i className="fas fa-hands-helping iconic"></i>
                        <div className="card-body">
                          <p className="card-text">Business and Entreprenuerial Coaching</p>
                          <p className="card-subtext">If you are looking to start a business, build your dream career or even
                          receive executive coaching, this is your type. </p>
                        </div>
                      </div>

                      <div className="card">
                        <i className="fas fa-heartbeat iconic"></i>
                        <div className="card-body">
                          <p className="card-text">Fitness and Wellness <br></br>Coaching</p>
                          <p className="card-subtext">Combining a systematic coaching process and personal training
                          to empower folks to develop a fit lifestyle. </p>

                        </div>
                      </div>

                      <div className="card">
                        <i className="fas fa-rocket iconic animated infinite bounce rocket"></i>
                        <div className="card-body">
                          <p className="card-text">Personal Life <br></br>Coaching</p>
                          <p className="card-subtext">Life coaching starts with the foundations and strives
                          to make individuals happier through radical lifestyle changes. </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="container"><p className="btn animated infinite pulse hvr-underline-from-center our-coaches" onClick={() => scrollToComponent(this.Two, { offset: 0, align: 'top', duration: 300, ease: 'inQuad' })}>our coaches</p></div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div id="third-row" className="container-fluid" ref={(section) => { this.Two = section; }}>
              <div className="container border-box text-center">
                <h1 className="headline second-headline">professional coaches with diverse experience</h1>
                <div className="row content-row">
                  <div className="col">
                    <div>
                      <i className="fas fa-user animated fadeOut infinite iconic pl-3 pr-3 userone"></i>
                      <i className="fas fa-user animated fadeOut infinite iconic pl-3 pr-3 usertwo"></i>
                      <i className="fas fa-user animated fadeOut infinite iconic pl-3 pr-3 userthree"></i>
                      <i className="fas fa-user animated fadeOut infinite iconic pl-3 pr-3 userfour"></i>
                      <i className="fas fa-user-check animated fadeIn infinite iconic pl-3 pr-3 userfive"></i>
                    </div>
                    <div className="container mt-5 pl-5 pr-5">
                      <p className="coach-text">Everyone can benefit from working with someone. Finding the right coach just got easier with <i>guru match</i>. <br></br>Because
                      not all coaches are the same, our matching algorithm identifies coaches near you well suited to your needs. <br></br> After the
                                introductory session, all sessions are in-person or virtual, per your preference.
                      </p>
                    </div>

                  </div>
                </div>
                <div className="container"><p className="btn animated infinite pulse hvr-underline-from-center our-coaches" onClick={() => scrollToComponent(this.Three, { offset: 0, align: 'top', duration: 300, ease: 'inQuad' })}>matching process</p></div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div id="fourth-row" className="container-fluid" ref={(section) => { this.Three = section; }}>
              <div className="container border-box">
                <h1 className="headline second-headline text-center">tell us a little bit about yourself</h1>
                <div className="row">
                  <div className="col">
                    <div className="card-group mt-4 pl-5 pr-5 text-center">
                      <div className="card">
                        <div className="card-body">
                          <p className="card-text">Fill out a short <br></br>matching questionnaire</p>
                          <p className="card-subtext">Answer simple questions to help us understand your unique needs. It takes less than 2 min. </p>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-body">
                          <p className="card-text">Receive personalized matches and try free</p>
                          <p className="card-subtext">Our algorithm recommends coaches who best fit your needs. Try each for FREE by video-chat. </p>

                        </div>
                      </div>

                      <div className="card">
                        <div className="card-body">
                          <p className="card-text">Choose your coach with confidence</p>
                          <p className="card-subtext">Choose the match you like best for 1:1 in-person sessions going forward. 90% success rate. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <img src={require("../images/yay-match.gif")} className="giphy-match" alt="yay-match" />
                  </div>

                  <div className="col text-center fourth-col">
                    <Link
                      className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                      to="/signup">
                      <div className="container"><p className="btn animated infinite pulse hvr-underline-from-center fourth-link">start the questionnaire</p></div>
                    </Link>
                    <div className="container"><p className="btn hvr-underline-from-center fourth-link" onClick={this.scrollToTopWithCallback}>back to the top</p></div>
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

export default Home;
