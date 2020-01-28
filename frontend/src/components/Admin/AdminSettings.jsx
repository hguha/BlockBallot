import React, { useState } from 'react';
import Input from '../Common/Input'
import Button from '../Common/Button'


function AdminSettings(props) {
    const {
        username = "Settings",
    } = props;

    const [isReadySubmit, setIsReadySubmit] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleInputChange(event) {
        if(event.target.name == "field-password") {
            setPassword(event.target.value);
        }
        else if(event.target.name == "field-confirm-password") {
            setConfirmPassword(event.target.value);
        }

        setIsReadySubmit(confirmPassword.length > 0 && password.length > 0);
    }

    function clearFields(event) {
        document.getElementsByName("field-password")[0].value = "";
        document.getElementsByName("field-confirm-password")[0].value = "";
        setPassword("");
        setConfirmPassword("");
        setIsReadySubmit(false);
    }

    return (
        <div>
            <Input onChange={handleInputChange} placeholder="Password" name="field-password" isPassword={true}/>
            <Input onChange={handleInputChange} placeholder="Confirm Password" name="field-confirm-password" isPassword={true}/>
            <Button text="Cancel" onClick={clearFields} variant="bg-primary-outline" />
            <Button text="Update" enabled={isReadySubmit} variant="bg-primary-outline" />
        </div>
    )
}

export default AdminSettings;
