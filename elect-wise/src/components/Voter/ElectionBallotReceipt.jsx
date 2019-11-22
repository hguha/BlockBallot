import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Common/Button';

import '../../styles/Common/ColorScheme.css';
import '../../styles/Voter/ElectionBallotReceipt.css';

const propTypes = {
    election: PropTypes.object,
    onClose: PropTypes.func,
    selectedOptions: PropTypes.array,
    show: PropTypes.boolean
};

const defaultProps = {
    election: {},
    onClose: () => {},
    selectedOptions: null,
    show: false
};

function ElectionBallotReceipt(props) {
    const {
        election,
        onClose,
        selectedOptions,
        show
    } = props;

    const {
        title,
        options
    } = election;

    const modalVisibility = show ? "visible" : "hidden";
    const animation = show ? "animate-in" : "";

    function renderSelectedOptions(selectedOptions) {
        const relevantOptions = [...selectedOptions].filter(item => {
            return item.selected === true;
        });

        return (
            relevantOptions.map((option, i) => {
                return (
                    <>
                        <div className="election-ballot-receipt-divider-light" />
                        <div className="election-ballot-receipt-item-container">
                            <div className="election-ballot-receipt-item-category">
                                {election.categories[i]}
                            </div>
                            {options[option.key].value}
                        </div>
                    </>
                );
            })
        );
    }
    
    return (
        <div className="election-ballot-receipt-container" style={{ visibility: modalVisibility }}>
            <div className={`election-ballot-receipt ${animation}`}>
                <div className="election-ballot-receipt-title">
                    Ballot Receipt
                </div>
                <div className="election-ballot-receipt-divider-heavy" />
                <div className="election-ballot-receipt-item-container">
                    <div className="election-ballot-receipt-item-category">
                        Election:
                    </div>
                    {title}
                </div>
                {renderSelectedOptions(selectedOptions)}
                <div className="election-ballot-receipt-footer-container">
                    <div className="election-ballot-receipt-footer-button-container">
                        <Button text="Cancel" onClick={onClose} variant="bg-error" />
                    </div>
                    <div className="election-ballot-receipt-footer-button-container">
                        <Button text="Submit Vote" onClick={() => {}} variant="bg-primary" />
                    </div>
                </div>
            </div>
        </div>
    );
}

ElectionBallotReceipt.propTypes = propTypes;
ElectionBallotReceipt.defaultProps = defaultProps;
export default ElectionBallotReceipt;