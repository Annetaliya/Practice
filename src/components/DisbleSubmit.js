import React, { useState } from 'react';

function DisableSubmit () {
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handlePasswordChange (e) {
        setPassword(e.target.value)
    }

    function handleConfirmPasswordChange (e) {
        setConfirmPassword(e.target.value)
    }
    return (
        <div>
            <div>
                <lablel>Enter Password</lablel>
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
            <button disabled={Password !== confirmPassword}>Submit</button>

        </div>
    )
}
export default DisableSubmit;