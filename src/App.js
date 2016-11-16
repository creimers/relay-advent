import React, { Component } from 'react';

import Relay from 'react-relay';

import styles from './App.scss';

import Calendar from './Calendar'

import Footer from './Footer'

class CalendarRoute extends Relay.Route {
  static routeName = 'CalendarRoute'
  static queries = {
    store: Component => {

      return Relay.QL`
      query {
        calendars(uuid: "ZuHHPJXi7QgVJuwTcG4kBg") {
          ${Component.getFragment('store')}
        }
      }
    `},
  };

  static params = {
    calendarUUID: "ZuHHPJXi7QgVJuwTcG4kBg"
  }
}

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8000/graphql')
);


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
        <Relay.RootContainer
          Component={Calendar}
          route={new CalendarRoute()} />
        <Footer />
      </div>
    );
  }
}

export default App;
