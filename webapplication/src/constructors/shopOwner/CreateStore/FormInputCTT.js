import React, { Component } from 'react';
import FormInput from '../../../components/shopOwner/CreateStore/FormInput'
import {connect} from 'react-redux'
class FormInputCTT extends Component {
    render() {
        return (
            <FormInput />
        )
    }
};

export default connect (null,null) (FormInputCTT)
