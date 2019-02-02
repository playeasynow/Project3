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
        />
        <div className="container pr-0" onClick={this.props.btnClickHandler}><p className="btn animated infinite pulse hvr-underline-from-center pr-0 float-right" >schedule session</p></div>
      </div>
    );
  }
}

export default MyCalendar;