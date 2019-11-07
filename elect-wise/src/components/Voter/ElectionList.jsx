import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ElectionCard from '../Voter/ElectionCard';
import ElectionModal from '../Voter/ElectionModal';

import '../../styles/ColorScheme.css';
import '../../styles/ElectionList.css';
import logo from '../../assets/logos/logo.png';

const propTypes = {
    elections: PropTypes.array,
    isLoading: PropTypes.bool // For when we have backend to talk to
};

const defaultProps = {
    elections: [],
    isLoading: false
};

function ElectionList(props) {
    const {
        elections,
        isLoading
    } = props;

    const [showModal, setShowModal] = useState(false);
    const [selectedElection, setSelectedElection] = useState({});

    if (isLoading){} // silencing warning on not using this prop for now

    function handleElectionClick(election) {
        setSelectedElection(election);
        setShowModal(true);
    }

    function renderElectionCards() {
        const cards = elections.map(election => {
            return (
                <ElectionCard
                    onClick={() => handleElectionClick(election)}
                    election={election}
                />
            );
        });
        return cards;
    }

    function renderHeader() {
        return (
            <div className="election-list-header-container">
                <img className="election-list-header-logo" src={logo} alt="ElectWise" />
                <div className="election-list-header-titles-container">
                    <div className="election-list-header-title">
                        Available Elections
                    </div>
                    <div className="election-list-header-subtitle">
                        These elections are curated using your voting registration information.
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="election-list-container">
            <ElectionModal election={selectedElection} onClose={() => { setShowModal(false); }} show={showModal} />
            {renderHeader()}
            {renderElectionCards()}
        </div>
    );
}

ElectionList.propTypes = propTypes;
ElectionList.defaultProps = defaultProps;
export default ElectionList;