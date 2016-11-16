import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

import styles from './App.scss'


class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <a href="https://github.com/creimers/relay-advent" target="_blank">
          <FontAwesome name="github" />
        </a>
      </div>
    )
  }
}

export default Footer
