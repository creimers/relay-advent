import React, { Component } from 'react';

import Day from './Day'

class Calendar extends Component {

  render() {
    return (
      <div>
          {this.props.days.map((elm)=> 
          <Day key={elm.id} day={elm.day} />
          )}
      </div>
    )
  }
}

export default Calendar;
