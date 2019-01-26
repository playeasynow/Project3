import React, { Component } from "react";
import Calendar from 'react-calendar';
import "./style.css";

class myCalendar extends Component {
    state = {
      date: new Date(),
    }
  
    onClickDay = (value) => console.log(value);
  
    render() {
      return (
        <div>
          <Calendar
            onClickDay={this.onClickDay}
            value={this.state.date}
          />
        </div>
      );
    }
  }

export default myCalendar;