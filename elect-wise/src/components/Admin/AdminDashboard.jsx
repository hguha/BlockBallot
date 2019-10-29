import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/ColorScheme.css';
import '../../styles/AdminDashboard.css';
import logo from '../../assets/logos/logo.png';

const propTypes = {
    organization: PropTypes.string,
    username: PropTypes.string
}

const defaultProps = {
    organization: '',
    username: ''
};

function AdminDashboard(props) {
    const {
        organization,
        username
    } = props;

    return (
        <div className="admin-dashboard-container">
            <AdminSidebar organization={organization} username={username} />
        </div>
    );
}
function AdminSidebar(props) {
    const {
        organization,
        username,
        menuItems = [
            {
                name : "Home",
                route : "/admin/dashboard",
            },
            {
                name : "Elections",
                route : "/admin/elections",
            },
            {
                name : "Settings",
                route : "/admin/settings",
            }
        ]
    } = props;

    return (
        <div className="admin-sidebar-container">
            <div className="admin-sidebar-user-icon-container">
                <img src={logo} alt="user-icon" className="admin-sidebar-user-icon" />
            </div>
            <div className="admin-sidebar-username">
                {username}
            </div>
            <div className="admin-sidebar-organization">
                {organization}
            </div>
            <div className="admin-sidebar-menu">
              {menuItems.map((item) => {
                return <div class="menu-item"><a src={item.route}>{item.name}</a></div>
              })}
            </div>
        </div>
    )
}

AdminDashboard.propTypes = propTypes;
AdminDashboard.defaultProps = defaultProps;
export default AdminDashboard;