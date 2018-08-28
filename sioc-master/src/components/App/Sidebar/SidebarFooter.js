import React from 'react';
import {NavItem, NavLink} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {requestSignOut} from '../../../actions';


const SidebarFooter = props => (
    <div className="sidebar-footer">
        <NavItem onClick={props.requestSignOut}>
            <NavLink to="/home">
                <FontAwesome name="power-off"/> Cerrar sesión
            </NavLink>
        </NavItem>
    </div>
);
SidebarFooter.propTypes = {
    requestSignOut: PropTypes.func.isRequired
};

export default connect(
    null,
    dispatch => ({
        requestSignOut: () => dispatch(requestSignOut())
    })
)(SidebarFooter);
