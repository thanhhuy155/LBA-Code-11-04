import React, { Component, Fragment } from 'react';
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'react-bootstrap'
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TrackPosition: 2
        }
    }

    handleSelect = (selectedKey) => {
        this.setState({ TrackPosition: selectedKey })
    }
    render() {
        return (
            <Fragment>
                <div class="profile" style={{ backgroundColor: '#CFD8DC', marginLeft: 5 }}>
                    <div class="profile-sidebar">
                        <div class="profile-usermenu">
                            <Nav activeKey={this.state.TrackPosition} onSelect={this.handleSelect} activeClassName="selected">

                                <NavItem eventKey={2}>
                                    <Link style={Styles.linkItem} to='/s'><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;<strong>Message</strong></Link>
                                </NavItem>

                                <NavItem eventKey={3}>
                                    <NavLink to='/s/StoreManagementPage' style={Styles.linkItem}>
                                        <i class="glyphicon glyphicon-home" activeClassName="active"></i>
                                        Store Management
                                    </NavLink>
                                </NavItem>

                                <NavItem eventKey={4}>
                                    <Link style={Styles.linkItem} to={`/s/BudgetManagementPage`}><span class="glyphicon glyphicon-usd" aria-hidden="true"></span>&nbsp;<strong>Budget Management</strong></Link>
                                </NavItem>

                            
                                <NavItem eventKey={5}>
                                    <Link style={Styles.linkItem} to='/s/CreateStorePage'><span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span>&nbsp;<strong>Create Store</strong></Link>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
};
const Styles = {
    linkItem: {
        textDecoration: 'none',
    }
}


