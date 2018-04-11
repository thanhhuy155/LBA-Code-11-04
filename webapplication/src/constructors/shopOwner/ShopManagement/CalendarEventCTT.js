import React, { Component } from 'react';
import {connect} from 'react-redux'
import CalendarEvent from '../../../components/shopOwner/ShopManagement/CalendarEvent'
class CalendarEventCTT extends Component {
  render() {
    return (
      <CalendarEvent />
    )
  }
};

export default connect (null,null) (CalendarEventCTT)
