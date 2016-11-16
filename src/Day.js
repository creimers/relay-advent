import classNames from 'classnames';

import moment from 'moment'

import React, { Component } from 'react'


class Day extends Component {

  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
    this.dayToMoment = this.dayToMoment.bind(this)
    this.isOpen = this.isOpen.bind(this)
    this.canOpen = this.canOpen.bind(this)

    this.month = 11

    let borderStyles = ['solid', 'dashed', 'dotted']

    this.state = {
      isOpen: this.isOpen(props.day),
      borderStyle: borderStyles[Math.floor(Math.random() * borderStyles.length)]
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

  handleOnClick() {
    if (this.canOpen(this.props.day)) {
      this.setState({isOpen: true})
    }
    else {
      console.log('Geduld!')
    }

    if (this.state.isOpen) {
      console.log('open modal')
    }
  }

  render() {
    let classes = classNames(
      'day',
      this.state.borderStyle,
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
      <div className={classes} style={style} onClick={this.handleOnClick}>
        <span>{this.props.day}</span>
      </div>
    )
  }
}

export default Day;
