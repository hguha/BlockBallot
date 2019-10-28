import React, { useState } from 'react';

import Button from './Button';
import Input from './Input';

import '../styles/ColorScheme.css';
import '../styles/AdminLogin.css';
import logo from '../assets/logos/logo.png';

function AdminLogin() {
    const [isReadySubmit, setIsReadySubmit] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleInputChange(event) {
        if (event.target.name === "field-username") {
            setUsername(event.target.value);
        } else if (event.target.name === "field-password") {
            setPassword(event.target.value);
        }
        setIsReadySubmit(username.length > 0 && password.length > 0);
    }

    return (
        <div className="admin-login-container">
            <div className="admin-login-logo-container">
                <img className="admin-login-logo" src={logo} alt="ElectWise" />
            </div>
            <div className="admin-login-input-container">
                <Input placeholder="Username" onChange={handleInputChange} name="field-username" />
            </div>
            <div className="admin-login-input-container">
                <Input placeholder="Password" onChange={handleInputChange} name="field-password" isPassword={true} />
            </div>
            <div className="admin-login-submit-container">
                <Button text="Login" enabled={isReadySubmit} variant="bg-primary-outline" />
            </div>
        </div>
    );
}

export default AdminLogin;