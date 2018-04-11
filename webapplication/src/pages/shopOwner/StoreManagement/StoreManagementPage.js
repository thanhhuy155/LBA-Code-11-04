import React, { Component } from 'react';
import ShopCardCTT from '../../../constructors/shopOwner/ShopCardCTT'
import ShopSearchBarCTT from '../../../constructors/shopOwner/ShopSearchBarCTT'
import StoreStatisticCardListCTT from '../../../constructors/shopOwner/Statistics/StoreStatisticCardListCTT'
export default class StoreManagementPage extends Component {
  render() {
    return (
      <div class="container-fluid" style={Styles.div_wrapper}>
        
        <div class="row">
          <StoreStatisticCardListCTT/>
        </div>
        
        <hr/>
        <ShopSearchBarCTT/>
        <hr/>
        <div class="row" style = {Styles.div_body_shopCard}>
          <ShopCardCTT/>
          <ShopCardCTT/>
          <ShopCardCTT/>
          <ShopCardCTT/>
          <ShopCardCTT/>
          <ShopCardCTT/>
          <ShopCardCTT/>
          <ShopCardCTT/>
          <ShopCardCTT/>
        </div>
        
      </div>
      
    )
  }
};

const Styles={
  div_wrapper:{
    marginTop: 10,
  },
  div_body_shopCard:{
    marginTop: 10,
  }

}

