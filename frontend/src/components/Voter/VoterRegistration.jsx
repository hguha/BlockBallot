import React, { useState } from 'react';

import Button from '../Common/Button';
import Input from '../Common/Input';
import { authenticateVoter } from "../../services/AuthService";

import '../../styles/Common/ColorScheme.css';
import '../../styles/Voter/VoterRegistration.css';
import logo from '../../assets/logos/logo.png';

function VoterRegistration() {
    const [isReadySubmit, setIsReadySubmit] = useState(false);
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [dob, setDOB] = useState("");

    function handleTextChange(event) {
        if (event.target.name === "field-fname") {
            setFName(event.target.value);
        } else if (event.target.name === "field-lname") {
            setLName(event.target.value);
        }
        setIsReadySubmit(fName.length > 0 && lName.length > 0 && dob.length > 0);
    }

    function handleDateChange(date) {
        setDOB(date.toISOString().split("T")[0]);
        setIsReadySubmit(fName.length > 0 && lName.length > 0 && dob.length > 0);
    }

    async function handleVerification() {
        const response = await authenticateVoter(fName, lName, dob);
        console.log(response);
    }

    return (
        <>
            <div className="voter-registration-container">
                <div className="voter-registration-logo-container">
                    <img className="voter-registration-logo" src={logo} alt="ElectWise" />
                </div>
                <div className="voter-registration-title">
                    Enter your credentials to get started.
                </div>
                <div className="voter-registration-input-container">
                    <Input placeholder="First Name" onChange={handleTextChange} name="field-fname" />
                </div>
                <div className="voter-registration-input-container">
                    <Input placeholder="Last Name" onChange={handleTextChange} name="field-lname" />
                </div>
                <div className="voter-registration-input-container">
                    <Input placeholder="Date of Birth" onChange={handleDateChange} isDate={true} />
                </div>
                <div className="voter-registration-input-container">
                    <Input placeholder="Email Address" onChange={handleTextChange} name="field-email" />
                </div>
                <div className="voter-registration-submit-container">
                    <Button text="Verify" enabled={isReadySubmit} variant="bg-primary-outline" onClick={() => handleVerification()} />
                </div>
            </div>
        </>
    );
}

export default VoterRegistration;
