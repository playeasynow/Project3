import React, { Component } from "react";
import DateTimePicker from 'react-datetime-picker';
// import axios from "axios";
import "./style.css";

class MyCalendar extends Component {
  state = {
    date: new Date()
  }

  render() {
    return (
      <div>
        <DateTimePicker
          onChange={this.props.onChangeDate}
          value={this.props.date}
          className="align-center"
        />
        <div className="container align-center-btn" onClick={this.props.btnClickHandler}><p className="btn animated infinite pulse hvr-underline-from-center" >schedule session</p></div>
      </div>
    );
  }
}

export default MyCalendar;