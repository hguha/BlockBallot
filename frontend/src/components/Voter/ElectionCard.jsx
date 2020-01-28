import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Common/Button';
import { FiActivity, FiBookOpen, FiBook } from 'react-icons/fi';

import '../../styles/Common/ColorScheme.css';
import '../../styles/Voter/ElectionCard.css';

const propTypes = {
    election: PropTypes.object,
    onClick: PropTypes.func,
};

const defaultProps = {
    election: {},
    onClick: () => {}
};

function ElectionCard(props) {
    const {
        onClick,
        election
    } = props;

    const {
        title,
        totalVotes,
        opens,
        closes
    } = election;

    return (
        <div className="election-card-container">
            <div className="election-card-title">
                {title}
            </div>
            <div className="election-card-num-votes">
                <FiActivity /> Votes: {totalVotes}
            </div>
            <div className="election-card-date">
                <FiBookOpen /> Opens: {opens}
            </div>
            <div className="election-card-date">
                <FiBook /> Closes: {closes}
            </div>
            <div className="election-card-button-container">
                <Button text="Vote" size="lg" onClick={() => onClick(election)} />
            </div>
        </div>
    );
}

ElectionCard.propTypes = propTypes;
ElectionCard.defaultProps = defaultProps;
export default ElectionCard;