import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Input.css';
import '../styles/ColorScheme.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const propTypes = {
    isDate: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

const defaultProps = {
    isDate: false,
    name: '',
    onChange: () => {},
    placeholder: ''
};

function Input(props) {
    const {
        isDate,
        name,
        onChange,
        placeholder
    } = props;
    
    const [selectedDate, setSelectedDate] = useState();

    function handleDateChange(date) {
        setSelectedDate(date);
        onChange(date);
    }

    if (isDate) {
        return (
            <div className="date-wrapper" name={name}>
                <DatePicker
                    className="input-field" 
                    selected={selectedDate} 
                    onChange={handleDateChange}
                    placeholderText={placeholder}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />
            </div>
        );
    }
    return (
        <input className="input-field" placeholder={placeholder} onChange={onChange} name={name} />
    );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
export default Input;