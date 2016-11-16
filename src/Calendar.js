import React, { Component } from 'react';

import Day from './Day'

class Calendar extends Component {

  constructor(props) {
    super(props)

    this.themes = [
      {background: '#ffffff', border: '#f00000'},
    ]
  }

  render() {
    return (
      <div className="calendar">
        {this.props.days.map((elm)=> 
          <Day key={elm.id} day={elm.day} imageSmallUrl={elm.imageSmallUrl}/>
        )}
      </div>
    )
  }
}

export default Calendar;
