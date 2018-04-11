import React, { Component } from 'react';
import {connect} from 'react-redux'
import Maps from '../../../components/shopOwner/ShopManagement/MapGoogle'
class MapGoogleCTT extends Component {
  render() {
    return (
      <Maps/>
    )
  }
};

export default connect (null,null) (MapGoogleCTT)
