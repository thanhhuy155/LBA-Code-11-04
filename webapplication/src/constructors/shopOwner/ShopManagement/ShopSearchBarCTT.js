import React, { Component } from 'react';
import {connect} from 'react-redux'
import ShopSearchBar from '../../../components/shopOwner/ShopManagement/ShopSearchBar'
class ShopSearchBarCTT extends Component {
  render() {
    return (
      <ShopSearchBar /> 
    )
  }
};

export default connect (null,null) (ShopSearchBarCTT)
