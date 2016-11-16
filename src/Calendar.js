import React, { Component } from 'react';

import Day from './Day'

import Dialog from 'react-toolbox/lib/dialog';

import styles from './App.scss'

class Calendar extends Component {

  constructor(props) {
    super(props)

    this.themes = [
      {background: '#ffffff', border: '#f00000'},
    ]

    this.toggleDialog = this.toggleDialog.bind(this)
    this.openModal = this.openModal.bind(this)

    this.state = {
      dialogIsOpen: false
    }
  }

  toggleDialog() {
    this.setState({dialogIsOpen: !this.state.dialogIsOpen})
  }

  openModal(day) {
    console.log('open that modal')
    this.toggleDialog()
  }

  render() {
    return (
      <div>
        <div className={styles.calendar}>
          {this.props.days.map((elm)=> 
          <Day key={elm.id} day={elm.day} onClickCallback={this.openModal} imageSmallUrl={elm.imageSmallUrl}/>
          )}
        </div>

        <Dialog
          active={this.state.dialogIsOpen}
          onEscKeyDown={this.toggleDialog}
          onOverlayClick={this.toggleDialog}
        >
          <p>Good day, sir</p>
          </Dialog>
          </div>
    )
  }
}

export default Calendar;
