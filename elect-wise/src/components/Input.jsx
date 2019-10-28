import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import '../styles/Input.css';
import '../styles/ColorScheme.css';
import "react-datepicker/dist/react-datepicker.css";

const propTypes = {
    isDate: PropTypes.bool,
    isPassword: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

const defaultProps = {
    isDate: false,
    isPassword: false,
    name: '',
    onChange: () => {},
    placeholder: ''
};

function Input(props) {
    const {
        isDate,
        isPassword,
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
    } else if (isPassword) {
        return (
            <input className="input-field" placeholder={placeholder} onChange={onChange} name={name} type="password" />
        );
    }
    return (
        <input className="input-field" placeholder={placeholder} onChange={onChange} name={name} />
    );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
export default Input;