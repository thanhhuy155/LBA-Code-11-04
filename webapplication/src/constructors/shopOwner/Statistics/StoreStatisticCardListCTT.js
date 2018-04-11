import React, { Component } from 'react';
import StoreStatisticCardList from '../../../components/shopOwner/Staristics/StoreStatisticCardList'
import {connect} from 'react-redux'
class StoreStatisticCardListCTT extends Component {
    render() {
        return (
            <StoreStatisticCardList />
        )
    }
};

export default connect (null,null) (StoreStatisticCardListCTT)
