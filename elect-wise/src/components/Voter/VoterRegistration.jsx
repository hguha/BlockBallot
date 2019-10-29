import React, { useState } from 'react';

import Button from '../Common/Button';
import Input from '../Common/Input';

import '../../styles/ColorScheme.css';
import '../../styles/VoterRegistration.css';
import logo from '../../assets/logos/logo.png';

function VoterRegistration() {
    const [isReadySubmit, setIsReadySubmit] = useState(false);
    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [ssn, setSSN] = useState("");

    function handleTextChange(event) {
        if (event.target.name === "field-name") {
            setName(event.target.value);
        } else if (event.target.name === "field-ssn") {
            setSSN(event.target.value);
        }
        setIsReadySubmit(name.length > 0 && dob.length > 0 && ssn.length > 0);
    }

    function handleDateChange(date) {
        setDOB(date.toLocaleDateString());
        setIsReadySubmit(name.length > 0 && dob.length > 0 && ssn.length > 0);
    }

    return (
        <div className="voter-registration-container">
            <div className="voter-registration-logo-container">
                <img className="voter-registration-logo" src={logo} alt="ElectWise" />
            </div>
            <div className="voter-registration-title">
                Enter your credentials to get started.
            </div>
            <div className="voter-registration-input-container">
                <Input placeholder="First and Last Name" onChange={handleTextChange} name="field-name" />
            </div>
            <div className="voter-registration-input-container">
                <Input placeholder="Date of Birth" onChange={handleDateChange} isDate={true} />
            </div>
            <div className="voter-registration-input-container">
                <Input placeholder="Social Security Number" onChange={handleTextChange} name="field-ssn" />
            </div>
            <div className="voter-registration-input-container">
                <Input placeholder="Email Address" onChange={handleTextChange} name="field-email" />
            </div>
            <div className="voter-registration-submit-container">
                <Button text="Verify" enabled={isReadySubmit} variant="bg-primary-outline" />
            </div>
        </div>
    );
}

export default VoterRegistration;
