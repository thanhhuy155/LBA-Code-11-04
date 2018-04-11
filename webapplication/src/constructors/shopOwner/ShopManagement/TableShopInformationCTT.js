import React, { Component } from 'react';
import {connect} from 'react-redux'
import TableShopInformation from '../../../components/shopOwner/ShopManagement/TableShopInformation'
class TableShopInformationCTT extends Component {
  render() {
    return (
      <TableShopInformation/>
    )
  }
};

export default connect (null,null) (TableShopInformationCTT)
