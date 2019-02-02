import React, { Component } from "react";
import DateTimePicker from 'react-datetime-picker';
// import axios from "axios";
import "./style.css";

class MyCalendar extends Component {
  state = {
    date: new Date()
  }

 

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
          onChange={this.props.onChangeDate}
          value={this.props.date}
        />
        {/* <button className="btn btn-primary" >Schedule Session!</button> */}
        <div className="container pr-0" onClick={this.props.btnClickHandler}><p className="btn animated infinite pulse hvr-underline-from-center pr-0 float-right" >schedule session</p></div>
      </div>
    );
  }
}

export default MyCalendar;