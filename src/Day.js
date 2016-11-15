import React, { Component } from 'react';

class Day extends Component {

  constructor() {
    super()

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    console.log('day ' + this.props.day)
  }

  render() {
    return (
      <div className="day" onClick={this.handleOnClick}>
        <span>{this.props.day}</span>
      </div>
    )
  }
}

export default Day;
