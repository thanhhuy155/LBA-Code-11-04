import React, { Component } from 'react';
import EventInformation from '../../../components/shopOwner/ShopManagement/EventInformation'
import {connect} from 'react-redux'
class EventInformationCTT extends Component {
    render() {
        return (
            <EventInformation/>
        )
    }
};

export default connect (null,null) (EventInformationCTT)
