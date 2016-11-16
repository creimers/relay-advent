import React, { Component } from 'react';

import Day from './Day'

class Calendar extends Component {

  constructor() {
    super()

    this.themes = [
      {background: '#ffffff', border: '#f00000'},
    ]
  }

  render() {
    return (
      <div className="calendar">
        {this.props.days.map((elm)=> 
          <Day key={elm.id} day={elm.day} />
        )}
      </div>
    )
  }
}

export default Calendar;
