import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
// import Form from "../components/Form";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";
// import { ReactTypeformEmbed } from "react-typeform-embed";
import Typeform from "../components/Typeform";
import Calendar from "../components/Calendar";
import axios from "axios";
import scrollToComponent from 'react-scroll-to-component';
import "./style.css";

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin"
  };

  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
    this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
  }

  componentDidMount() {
    scrollToComponent(this.Top, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  scrollToTopWithCallback() {
    let scroller = scrollToComponent(this.Top, { offset: -200, align: 'top', duration: 1500});
    scroller.on('end', () => console.log('Scrolling end!') );
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

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

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
  onClick = (value) => alert('Clicked day: ', value);

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-left mb-4 main-header" ref={(section) => { this.Top = section; }}>
                <strong><i>Find a coach today. For free.</i></strong>
              </h1>
              <h4 className="text-left">personal, professional, executive and wellness coaching</h4>
            </Jumbotron>
            <button className="btn btn-primary next-page animated infinite pulse" onClick={() => scrollToComponent(this.One, { offset: 0, align: 'top', duration: 300, ease:'inQuad'})}>Go To One</button>
            <button onClick={() => scrollToComponent(this.Three, { offset: 0, align: 'top', duration: 300, ease:'inQuad'})}>Go To Bottom</button>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <h1 ref={(section) => { this.One = section; }}>1</h1>
            <Calendar />
            <button onClick={() => scrollToComponent(this.Two, { offset: 0, align: 'top', duration: 300, ease:'inQuad'})}>Go To Two</button>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
          <h1 ref={(section) => { this.Two = section; }}>2</h1>
            <button
              className="btn btn-primary"
              onClick={this.onBtnClick}>
              Backend
            </button>
            <button onClick={() => scrollToComponent(this.Three, { offset: 0, align: 'top', duration: 300, ease:'inQuad'})}>Go To Three</button>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
          <h1 ref={(section) => { this.Three = section; }}>3</h1>
          <button onClick={this.scrollToTopWithCallback}>Go to Top</button>
            <Typeform />
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Home;
