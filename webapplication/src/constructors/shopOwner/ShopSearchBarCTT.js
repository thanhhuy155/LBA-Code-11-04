import React, { Component } from 'react';
import ShopSearchBar from '../../components/shopOwner/ShopManagement/ShopSearchBar'
import {connect} from 'react-redux'
class ShopSearchBarCTT extends Component {
    render() {
        return (
            <ShopSearchBar />
        )
    }
};

export default connect (null,null) (ShopSearchBarCTT)

