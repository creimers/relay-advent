import React, { Component } from 'react';

import Relay from 'react-relay';

import Day from './Day'

import Dialog from 'react-toolbox/lib/dialog';

import { Snackbar } from 'react-toolbox';

import styles from './App.scss'

class Calendar extends Component {

  constructor(props) {
    super(props)

    console.log('calendar props', props)
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
    console.log(this.props.store.edges[0].node.days.edges)
    return (
      <div>
        <div className={styles.calendar}>
          <Day store={this.props.store.edges[0].node} />  
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
            id
            uuid
            name
            days(first:10) {
              ${Day.getFragment('days')}
            }
          }
        }
      }
    `
  }
})

export default Calendar;
