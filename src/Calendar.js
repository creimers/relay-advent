import React, { Component } from 'react';

import Day from './Day'

import Dialog from 'react-toolbox/lib/dialog';

import styles from './App.scss'

class Calendar extends Component {

  constructor(props) {
    super(props)

    this.toggleDialog = this.toggleDialog.bind(this)
    this.openModal = this.openModal.bind(this)

    this.state = {
      dialogIsOpen: false,
      activeDay: {}
    }
  }

  toggleDialog() {
    this.setState({dialogIsOpen: !this.state.dialogIsOpen})
  }

  openModal(day) {
    this.setState({activeDay: day})
    this.toggleDialog()
  }

  render() {
    let dialogType = window.innerWidth <= 960 ? "large" : "normal"
    return (
      <div>
        <div className={styles.calendar}>
          {this.props.days.map((elm)=> 
          <Day key={elm.id} day={elm} onClickCallback={this.openModal}/>
          )}
        </div>

        <Dialog
          active={this.state.dialogIsOpen}
          onEscKeyDown={this.toggleDialog}
          onOverlayClick={this.toggleDialog}
          type={dialogType}
        >
          <img role="presentation" src={this.state.activeDay.imageLargeUrl} className={styles.dialogImage}/>
        </Dialog>

      </div>
    )
  }
}

export default Calendar;
