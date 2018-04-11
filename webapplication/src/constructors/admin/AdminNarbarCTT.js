import React, { Component } from 'react';
import AdminNarbar from '../../components/admin/AdminNarbar'
import { connect } from 'react-redux'
class AdminNarbarCTT extends Component {
    render() {
        return (
                <AdminNarbar/>
        )
    }
};

const mapStyleToProps = (state) => {
    return {
    }
}



export default connect(mapStyleToProps, null)(AdminNarbarCTT)
