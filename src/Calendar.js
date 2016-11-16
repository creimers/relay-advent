import React, { Component } from 'react';

import Day from './Day'

class Calendar extends Component {

  constructor() {
    super()

    this.themes = [
      {background: '#ffffff', border: '#f000000'},
    ]
  }

  render() {
    return (
      <div className="calendar">
        {this.props.days.map((elm)=> 
          <Day id={elm.id} day={elm.day} />
        )}
      </div>
    )
  }
}

export default Calendar;
