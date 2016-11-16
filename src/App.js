import React, { Component } from 'react';
import styles from './App.scss';

import Calendar from './Calendar'

class App extends Component {
  constructor() {
    super()

    this.days = [
      {
        day: '1',
        id: '1',
        imageSmallUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Stamps_of_Germany_%28DDR%29_1980%2C_MiNr_2499.jpg',
        imageLargeUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Stamps_of_Germany_%28DDR%29_1980%2C_MiNr_2499.jpg'
      },
    ]
    let range = n => Array.from(Array(n).keys())
    let remainingDays = range(24 - this.days.length)
    this.remainingDays = remainingDays.map((elm, index) => {
      return {
        day: this.days.length + index + 1,
        id: this.days.length + index + 1,
        imageSmallUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Stamps_of_Germany_%28DDR%29_1980%2C_MiNr_2499.jpg',
        imageLargeUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Stamps_of_Germany_%28DDR%29_1980%2C_MiNr_2499.jpg'
      }
    })
  }

  render() {
    return (
      <div className={styles.App}>
        <Calendar days={this.days.concat(this.remainingDays)}/>
      </div>
    );
  }
}

export default App;
