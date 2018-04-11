import React, { Component } from 'react';
import {connect} from 'react-redux'
import PictureShop from '../../../components/shopOwner/ShopManagement/PictureShop'
class PictureShopCTT extends Component {
  render() {
    return (
      <PictureShop />
    )
  }
};

export default connect (null, null) (PictureShopCTT)
