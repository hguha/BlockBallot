import React, { useState } from 'react';

import Button from '../Common/Button';
import Input from '../Common/Input';

import '../../styles/ColorScheme.css';
import '../../styles/AdminLogin.css';
import logo from '../../assets/logos/logo.png';

function AdminLogin() {
    const [isReadySubmit, setIsReadySubmit] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);
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

    function tryLogin() {
        setLoginFailed(false);
        if(username != "admin" && password != "admin") setLoginFailed(true); //if not, add some red text under Login that says "username or password was incorrect"
        else window.location.href = "/admin/dashboard";
        //api request to server, check if login exists
        //if exists, route them to new page
        //TEMP
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
                <Button onClick={tryLogin} text="Login" enabled={isReadySubmit} variant="bg-primary-outline" />
            </div>
            <div className="admin-login-failure">
                {loginFailed ? "Invalid Username or Password" : ""}
            </div>

        </div>
    );
}

export default AdminLogin;
