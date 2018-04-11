import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ShopCard from '../../components/shopOwner/ShopManagement/ShopCard'
class ShopCardCTT extends Component {
  render() {
    return (
      <Link to="/s/StoreDetailPage/:id">
        <ShopCard />
      </Link>
    )
  }
};

export default connect (null,null) (ShopCardCTT)
