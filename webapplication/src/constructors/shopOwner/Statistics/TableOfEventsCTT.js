import React, { Component } from 'react';
import {connect} from 'react-redux'
import TableOfEvents from '../../../components/shopOwner/Staristics/TableOfEvents'
class TableOfEventsCTT extends Component {
    render() {
        return (
            <TableOfEvents/>
        )
    }
};

export default connect (null,null) (TableOfEventsCTT)
