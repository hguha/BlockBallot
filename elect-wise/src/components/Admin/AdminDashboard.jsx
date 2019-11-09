import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Common/Button';
import CreateElectionModal from './CreateElectionModal';
import AdminSettings from './AdminSettings';

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


    const [currentPage, setCurrentPage] = useState(0);

    function setPage(page){
      setCurrentPage(page)
    }

    function renderCurrentPage() {
        switch(currentPage) {
            case 0:
                return(<AdminHome />);
            case 1:
                return(<AdminSettings />);
            case 2:
                //stuff with ending sessions
                window.location.href = "/admin";
        }
    }

    return (
        <div className="admin-dashboard-container">
            <AdminSidebar setPage={setPage} organization={organization} username={username} />
            <div className="admin-dashboard-current-page-container">
                {renderCurrentPage()}
            </div>
        </div>
    );
}

function AdminSidebar(props) {
    const {
        organization,
        username,
        setPage,
        menuItems = [
            {
                name : "Elections",
                page :0
            },
            {
                name : "Settings",
                page: 1
            },
            {
                name : "Logout",
                page: 2
            }
        ]
    } = props;

    function sendData(page) {
         props.setPage(page);
    }

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
                return <div className="menu-item"><a onClick={() => sendData(item.page)}>{item.name}</a></div>
              })}
            </div>
        </div>
    )
}

function AdminHome(props) {
    const [showModal, setShowModal] = useState(false);
    function createElection() {
        setShowModal(true);
    }

    const {
        username = "Elections",
        parentCallback
    } = props;

    return (
        <div>
            <div className = "create-election">
                <Button onClick={createElection} text="Create New Election"/>
            </div>
            <CreateElectionModal onClose={() => { setShowModal(false); }} show={showModal} />
        </div>
    )
}



AdminDashboard.propTypes = propTypes;
AdminDashboard.defaultProps = defaultProps;
export default AdminDashboard;
