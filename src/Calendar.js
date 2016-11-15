import React, { Component } from 'react';

import { Flex, Box } from 'reflexbox';

import Day from './Day'

class Calendar extends Component {

  render() {
    return (
      <div className="calendar">
        <Flex wrap justify="space-around" align="flex-start">
          {this.props.days.map((elm)=> 
          <Box flex col={12} sm={6} md={4} lg={3} p={2} key={elm.id}>
            <Day day={elm.day} />
          </Box>
          )}
        </Flex>
      </div>
    )
  }
}

export default Calendar;
