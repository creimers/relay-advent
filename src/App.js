import React, { Component } from 'react';
import './App.css';

import Calendar from './Calendar'

class App extends Component {
  constructor() {
    super()

    this.days = [
      {
        day: '1',
        id: '1',
      },
      {
        day: '2',
        id: '2',
      },
      {
        day: '3',
        id: '3',
      },
      {
        day: '4',
        id: '4',
      },
      {
        day: '5',
        id: '5',
      }
    ]
    let range = n => Array.from(Array(n).keys())
    let remainingDays = range(24 - this.days.length)
    this.remainingDays = remainingDays.map((elm, index) => {
      return {
        day: this.days.length + index + 1,
        id: this.days.length + index + 1,
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Calendar days={this.days.concat(this.remainingDays)}/>
      </div>
    );
  }
}

export default App;
