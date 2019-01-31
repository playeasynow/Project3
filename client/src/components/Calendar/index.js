import React, { Component } from "react";
import DateTimePicker from 'react-datetime-picker';
// import axios from "axios";
import "./style.css";

class MyCalendar extends Component {
  state = {
    date: new Date()
  }

  // onChangeDate = date => {
  //   this.setState({ date });
  // } 

  // scheduleSession = event => {
  //   console.log(this.state.date);

    // alert("Great! You have booked " + this.state.date + "." );
    // console.log(this.props.displayCalendars);
        // axios.post('https://project3-go-server.herokuapp.com/user/:email', {
        // headers: {
        //     'Content-Type': 'application/json'
        // },  userObj})
        // .then(function (response) {
        // // handle success
        // console.log(response);
        // })
        // .catch(function (error) {
        // // handle error
        // console.log(error);
        // })
        // .then(function () {
        // // always executed
        // });
  // }

  render() {
    return (
      <div>
        <DateTimePicker
          onChange={this.props.calClickHandler}
          value={this.state.date}
        />
        <button className="btn btn-primary" onClick={this.props.btnClickHandler}>Schedule Session!</button>
      </div>
    );
  }
}

export default MyCalendar;