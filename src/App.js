import React, { Component } from 'react';

import Relay from 'react-relay';

import styles from './App.scss';

import Calendar from './Calendar'

import Footer from './Footer'

import config from 'config'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(config.graphqlResource)
);


class App extends Component {
  constructor() {
    super()

    // TODO: remove all this.
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
    let body
    if (this.props.store && this.props.store.edges.length) {
      body = <Calendar calendar={this.props.store.edges[0].node} />
    }
    else {
      body = <div className={styles.wrong}><h1>You've got the wrong guy!</h1></div>
    }
    return (
      <div className={styles.App}>
        {body}
        <Footer />
      </div>
    );
  }
}

App = Relay.createContainer(App, {

  fragments: {
    store: () => Relay.QL`
      fragment C on CalendarNodeConnection {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          node{
            ${Calendar.getFragment('calendar')}
          }
        }
      }
    `
  }
})

export default App;
