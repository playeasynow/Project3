import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
// import Form from "../components/Form";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";
import { ReactTypeformEmbed } from "react-typeform-embed";
// import ExampleWidget from "../components/Typeform";
import "./style.css";

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin"
  };

  // constructor(props) {
  //   super(props);
  //   this.openForm = this.openForm.bind(this);
  // }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-left mb-4 main-header">
                <strong><i>Find a coach today. For free.</i></strong>
              </h1>
              <h4 className="text-left">personal, professional, executive and wellness coaching</h4>
            </Jumbotron>
          </Col>
          
          {/* <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col> */}
        </Row>
        {/* <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row> */}
        {/* <Footer /> */}
        <ReactTypeformEmbed url="https://demo.typeform.com/to/njdbt5" />

      </Container>
    );
  }
}

export default Home;
