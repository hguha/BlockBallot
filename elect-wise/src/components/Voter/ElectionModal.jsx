import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Common/Button';
import ReChartPieChart from '../Common/ReChartPieChart';
import { FiActivity, FiBookOpen, FiBook } from 'react-icons/fi';

import '../../styles/ColorScheme.css';
import '../../styles/ElectionModal.css';

const propTypes = {
    election: PropTypes.object,
    onClose: PropTypes.func,
    show: PropTypes.bool
};

const defaultProps = {
    election: {options: []},
    onClose: () => {},
    show: false
}

function ElectionModal(props) {
    const {
        election,
        onClose,
        show
    } = props;

    const [selectedOption, setSelectedOption] = useState(null);

    const modalVisibility = show ? "visible" : "hidden";
    const animation = show ? " animate-in" : "";

    const {
        title,
        totalVotes,
        opens,
        closes,
        options
    } = election;

    function handleClose() {
        setSelectedOption(null);
        onClose();
    }

    function handleOptionClick(key) {
        setSelectedOption(key);
    }

    function renderOptions() {
        if (!options) return;
        const optionItems = options.map(option => {
            return (
                <SelectableItem 
                    onClick={() => handleOptionClick(option.key)}
                    key={option.key} 
                    text={option.value} 
                    selected={option.key === selectedOption ? true : false}
                />
            );
        });
        return optionItems;
    }

    return (
        <div className={"election-modal-container"} style={{ visibility: modalVisibility }}>
            <div className={"election-modal" + animation}>
                <div className="election-modal-information-container">
                    <div className="election-modal-category-title">
                        Information
                    </div>
                    <div className="election-modal-election-title">
                        {title}
                    </div>
                    <div className="election-modal-election-detail">
                        <FiActivity /> Votes: {totalVotes}
                    </div>
                    <div className="election-modal-election-detail">
                        <FiBookOpen /> Opens: {opens}
                    </div>
                    <div className="election-modal-election-detail">
                        <FiBook /> Closes: {closes}
                    </div>
                </div>
                <div className="election-modal-statistics-container">
                    <div className="election-modal-category-title">
                        Statistics
                    </div>
                    <div className="election-modal-pie-chart-container">
                        <ReChartPieChart
                            data={election.results}
                            colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                        />
                    </div>
                </div>
                <div className="election-modal-options-container">
                    <div className="election-modal-category-title">
                        Selection
                    </div>
                    {renderOptions()}
                </div>
                <div className="election-modal-footer-container">
                    <div className="election-modal-footer-step-container">
                        Step 1 of 2
                    </div>
                    <div className="election-modal-footer-buttons-container">
                        <div className="election-modal-footer-button-container">
                            <Button text="Cancel" onClick={handleClose} variant="bg-error" size="lg" />
                        </div>
                        <div className="election-modal-footer-button-container">
                            <Button
                                text="Continue"
                                onClick={onClose}
                                variant="bg-primary"
                                size="lg"
                                enabled={selectedOption === null ? false : true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SelectableItem(props) {
    const {
        key,
        onClick,
        selected,
        text
    } = props;

    const variant = selected ? " selected" : " not-selected"

    return (
        <div className={"selectable-item-container" + variant} onClick={() => onClick(key)}>
            {text}
        </div>
    )
}

ElectionModal.propTypes = propTypes;
ElectionModal.defaultProps = defaultProps;
export default ElectionModal;