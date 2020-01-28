import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ElectionBallotReceipt from './ElectionBallotReceipt';
import Button from '../Common/Button';
import ReChartPieChart from '../Common/ReChartPieChart';
import { FiActivity, FiBookOpen, FiBook } from 'react-icons/fi';

import '../../styles/Common/ColorScheme.css';
import '../../styles/Common/Transitions.css';
import '../../styles/Voter/ElectionBallot.css';

const propTypes = {
    election: PropTypes.object,
    onClose: PropTypes.func,
};

const defaultProps = {
    election: {options: []},
    onClose: () => {},
}

function ElectionBallot(props) {
    const {
        election,
        onClose,
    } = props;

    const {
        title,
        totalVotes,
        opens,
        closes,
        options,
        categories
    } = election;

    let numCategories = 1;
    let pastCategory = options[0].category;
    const initialSelectedOptions = options.map(option => {
        if (option.category !== pastCategory) numCategories++;
        pastCategory = option.category;
        return (
            {
                category: option.category,
                selected: false,
                key: option.key
            }
        );
    });

    const initialCompleteCategories = Array(numCategories).fill().map(i => false)

    const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);
    const [completeCategories, setCompleteCategories] = useState(initialCompleteCategories);
    const [showModal, setShowModal] = useState(false);
    const [animation, setAnimation] = useState("slide-in-right");

    function handleUpdateSelections(key) {
        let updatedSelectedOptions = [...selectedOptions];
        let updatedCompleteCategories = [...completeCategories];

        const category = options[key].category;
        options.forEach(option => {
            if (option.category === category) {
                updatedSelectedOptions[option.key].selected = false;
            }
        });

        updatedSelectedOptions[key].selected = true;
        setSelectedOptions(updatedSelectedOptions);

        updatedCompleteCategories[category] = true;
        setCompleteCategories(updatedCompleteCategories);
    }

    function handleClose() {
        setAnimation("slide-out-right");
        setTimeout(() => onClose(), 500);
    }

    function renderCategories(selectedOptions) {
        const categories = completeCategories.map((_, i) => {
            return (
                <div className="election-ballot-category-container">
                    {renderOptionCategory(i, selectedOptions)}
                    {renderStatisticsCategory(i)}
                </div>
            );
        });
        return categories;
    }

    function renderOptionCategory(category, selectedOptions) {
        return (
            <div className="election-ballot-option-category-container" key={`cat-${categories}`}>
                <div className="election-ballot-category-title">
                        Selection for {categories[category]}
                    </div>
                <div className="election-ballot-options-container">
                    {renderOptions(category, selectedOptions)}
                </div>
            </div>
        );
    }

    function renderOptions(category, selectedOptions) {
        const relevantOptions = [...options].filter(item => {
            return item.category === category;
        });

        const optionItems = relevantOptions.map((option, i) => {
            return (
                <SelectableItem 
                    onClick={() => handleUpdateSelections(option.key)}
                    itemKey={option.key} 
                    text={option.value} 
                    selected={selectedOptions[option.key].selected === true}
                />
            );
        });
        return optionItems;
    }

    function renderStatisticsCategory(category) {
        const relevantResults = [...election.results].filter(item => {
            return item.category === category;
        });

        return (
            <div className="election-ballot-statistics-container">
                <div className="election-ballot-category-title">
                    Statistics
                </div>
                <div className="election-ballot-pie-chart-container">
                    <ReChartPieChart
                        data={relevantResults}
                        colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                    />
                </div>
            </div>
        );
    }

    return (
        <>
            <ElectionBallotReceipt 
                election={election}
                onClose={() => setShowModal(false)}
                selectedOptions={selectedOptions} 
                show={showModal}
            />
            <div className={`election-ballot-container ${animation}`}>
                <div className="election-ballot-information-container">
                    <div className="election-ballot-category-title">
                        Information
                    </div>
                    <div className="election-ballot-election-title">
                        {title}
                    </div>
                    <div className="election-ballot-information-row">
                        <div className="election-ballot-election-detail">
                            <FiBookOpen /> Opens: {opens}
                        </div>
                        <div className="election-ballot-election-detail">
                            <FiActivity /> Votes: {totalVotes}
                        </div>
                        <div className="election-ballot-election-detail">
                            <FiBook /> Closes: {closes}
                        </div>
                    </div>
                </div>
                {renderCategories(selectedOptions)}
                <div className="election-ballot-footer-container">
                    <div className="election-ballot-footer-step-container">
                        Step 1 of 2
                    </div>
                    <div className="election-ballot-footer-buttons-container">
                        <div className="election-ballot-footer-button-container">
                            <Button text="Cancel" onClick={handleClose} variant="bg-error" size="lg" />
                        </div>
                        <div className="election-ballot-footer-button-container">
                            <Button
                                text="Continue"
                                onClick={() => setShowModal(true)}
                                variant="bg-primary"
                                size="lg"
                                enabled={completeCategories.every(i => i === true)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

ElectionBallot.propTypes = propTypes;
ElectionBallot.defaultProps = defaultProps;
export default ElectionBallot;

function SelectableItem(props) {
    const {
        itemKey,
        onClick,
        selected,
        text
    } = props;

    const variant = selected ? " selected" : " not-selected"

    return (
        <div className={"selectable-item-container" + variant} onClick={() => onClick(itemKey)} key={itemKey}>
            {text}
        </div>
    )
}