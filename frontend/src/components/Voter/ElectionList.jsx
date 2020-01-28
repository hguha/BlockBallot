import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ElectionCard from '../Voter/ElectionCard';
import GridLoader from 'react-spinners/GridLoader';

import '../../styles/Common/ColorScheme.css';
import '../../styles/Voter/ElectionList.css';
import '../../styles/Common/Transitions.css';
import logo from '../../assets/logos/logo.png';

const propTypes = {
    elections: PropTypes.array,
    isLoading: PropTypes.bool,
    onElectionClick: PropTypes.func
};

const defaultProps = {
    elections: [],
    isLoading: false,
    onElectionClick: () => {}
};

function ElectionList(props) {
    const {
        elections,
        isLoading,
        onElectionClick
    } = props;

    const [animation, setAnimation] = useState("slide-in-left");

    function handleElectionClick(election) {
        setAnimation("slide-out-left");
        setTimeout(() => onElectionClick(election), 500);
    }

    function renderLoading() {
        return (
            <div className="election-list-loading-container">
                <GridLoader
                    css=""
                    size={30}
                    color={"#ebebeb"}
                    loading={isLoading}
                />
            </div>
        );
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
                <div className="election-list-header-logo-container">
                    <img className="election-list-header-logo" src={logo} alt="ElectWise" />
                </div>
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
        <div className={`election-list-container ${animation}`}>
            {renderHeader()}
            {isLoading ? renderLoading() : renderElectionCards()}
        </div>
    );
}

ElectionList.propTypes = propTypes;
ElectionList.defaultProps = defaultProps;
export default ElectionList;