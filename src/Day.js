import classNames from 'classnames';

import Dialog from 'react-toolbox/lib/dialog';

import moment from 'moment'

import React, { Component } from 'react'

import styles from './App.scss'

class Day extends Component {

  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
    this.dayToMoment = this.dayToMoment.bind(this)
    this.isOpen = this.isOpen.bind(this)
    this.canOpen = this.canOpen.bind(this)
    this.toggleDialog = this.toggleDialog.bind(this)

    this.month = 11

    let borderStyles = ['solid', 'dashed', 'dotted']

    this.state = {
      isOpen: this.isOpen(props.day),
      borderStyle: borderStyles[Math.floor(Math.random() * borderStyles.length)],
      dialogIsOpen: false
    }
  }

  dayToMoment(day){
    let now = moment()
    let dayString = day.toString().length === 1? "0" + day : day
    let dayAsString = `${now.year()}-${this.month}-${dayString}`
    return moment(dayAsString)
  }

  isOpen(day) {
    let now = moment()
    let dayAsMoment = this.dayToMoment(day)
    return now.month() + 1 === this.month && dayAsMoment.date() < now.date()
  }

  canOpen(day) {
    let now = moment()
    let dayAsMoment = this.dayToMoment(day)
    return dayAsMoment <= now
  }

  toggleDialog() {
    this.setState({dialogIsOpen: !this.state.dialogIsOpen})
  }

  handleOnClick() {
    if (this.canOpen(this.props.day)) {
      this.setState({isOpen: true})
    }
    else {
      console.log('Geduld!')
    }

    if (this.state.isOpen) {
      console.log('open modal')
      this.toggleDialog()
    }
  }

  render() {
    let classes = classNames(
      styles.day,
      styles[this.state.borderStyle],
      {
        open: this.state.isOpen
      }
    )

    let style = {}

    if (this.state.isOpen) {
      style.background = `url(${this.props.imageSmallUrl})`
      style.backgroundSize = 'cover'
    }

    return (
      <div>
        <div className={classes} style={style} onClick={this.handleOnClick}>
          <span>{this.props.day}</span>
        </div>

        <Dialog
          active={this.state.dialogIsOpen}
          onEscKeyDown={this.toggleDialog}
          onOverlayClick={this.toggleDialog}
          title="he"
        >
          <p>Good day, sir</p>
        </Dialog>
      </div>
    )
  }
}

export default Day;
