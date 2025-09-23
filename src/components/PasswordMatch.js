import React, {useState} from 'react';

function PasswordMatch () {
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] =  useState('')

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value)
    }
    return (
        <div>
            <div>
                <label>Enter Password</label>
                <input 
                    type='text'
                    value={Password}
                    onChange={handlePasswordChange}
                 />
                 
            </div>
            <div>
                <label>Confirm Password</label>
                <input 
                    type='text'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
            </div>
            {Password === confirmPassword ? '' : <p>Password does not match</p> }
        </div>
    )
}
export default PasswordMatch;