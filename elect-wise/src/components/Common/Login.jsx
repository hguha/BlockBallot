import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from './Button';
import Input from './Input';

import '../../styles/ColorScheme.css';
import '../../styles/AdminLogin.css';
import logo from '../../assets/logos/logo.png';

function Login() {
    const [isReadySubmit, setIsReadySubmit] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleClick(str) {
        window.location.href = str;

    }

    return (

        <div className="admin-login-container">
            <div className="admin-login-logo-container">
                <img className="admin-login-logo" src={logo} alt="ElectWise" />
            </div>
            <div className="admin-login-submit-container">
                <Button onClick={() => handleClick("/voter")} text="Voter" variant="bg-primary-outline" />
                <Button onClick={() => handleClick("/admin")} text="Admin" variant="bg-primary-outline" />
            </div>
        </div>
    );
}

export default Login;
