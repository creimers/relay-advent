import React, { Component } from 'react';

import { Flex, withReflex  } from 'reflexbox';

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
      <div className="day dashed" onClick={this.handleOnClick}>
        <Flex column justify="center" align="center">
          <span>{this.props.day}</span>
        </Flex>
      </div>
    )
  }
}

export default withReflex()(Day);
