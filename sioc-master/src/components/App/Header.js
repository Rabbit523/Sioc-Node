/* global document */
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {NavbarToggler, NavbarBrand} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const Header = withRouter(props => <NavHeader {...props}/>);

class NavHeader extends Component {
    sidebarToggle = e => {
        e.preventDefault();
        document.body.classList.toggle('sidebar-hidden');
    };

    sidebarMinimize = e => {
        e.preventDefault();
        document.body.classList.toggle('sidebar-minimized');
    };

    mobileSidebarToggle = e => {
        e.preventDefault();
        document.body.classList.toggle('sidebar-mobile-show');
    };


    asideToggle = e => {
        e.preventDefault();
        document.body.classList.toggle('aside-menu-hidden');
    };

    render() {
        return (
            <header className="app-header navbar">
                <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
                    <span className="navbar-toggler-icon"/>
                </NavbarToggler>
                <NavbarBrand href="#"/>
                <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>
                    <span className="navbar-toggler-icon"/>
                </NavbarToggler>
                {(this.props.location.pathname === '/resultados/' || this.props.location.pathname === '/admin/dwellings/search') &&
                <NavbarToggler onClick={this.asideToggle}>
                    <FontAwesome name="map-marker" size='2x'/>
                </NavbarToggler>}
            </header>
        );
    }
}

export default Header;
