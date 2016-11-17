import React, { Component } from 'react';

import Relay from 'react-relay';

import Day from './Day'

import Dialog from 'react-toolbox/lib/dialog';

import { Snackbar } from 'react-toolbox';

import styles from './App.scss'

class Calendar extends Component {

  constructor(props) {
    super(props)

    console.log('Calendar', props)
    this.toggleDialog = this.toggleDialog.bind(this)
    this.toggleSnackbar = this.toggleSnackbar.bind(this)
    this.openModal = this.openModal.bind(this)

    this.state = {
      dialogIsOpen: false,
      snackbarIsActive: false,
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

  toggleSnackbar() {
    this.setState({snackbarIsActive: !this.state.snackbarIsActive})
  }

  render() {
    let dialogType = window.innerWidth <= 960 ? "large" : "normal"
    return (
      <div>
        <div className={styles.calendar}>
          {this.props.calendar.days.edges.map((day, index) =>
          <Day
            day={day.node}
            key={index}
            openModalCallback={this.openModal}
            showSnackbarCallback={this.toggleSnackbar}
          />
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

        <Snackbar
          active={this.state.snackbarIsActive}
          label='Geduld!'
          timeout={2000}
          onTimeout={this.toggleSnackbar}
          type='warning'
        />

      </div>
    )
  }
}

Calendar = Relay.createContainer(Calendar, {

  fragments: {
    calendar: () => Relay.QL`
      fragment CALENDAR on CalendarNode {
        id
        uuid
        name
        days(first:25) {
          edges {
            node {
              ${Day.getFragment('day')}
            }
          }
        }
      }
    `
  }
})

export default Calendar;
