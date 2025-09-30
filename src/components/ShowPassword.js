import React, {useState} from 'react';

function ShowPassword () {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] =  useState('');
    const [showbtn1, setShowBtn1] = useState(false)

    function handleClick () {
        setShowBtn1(!showbtn1)
    }
    return (
        <div style={{marginTop: '20px'}}>
            <h1>Show Password</h1>
            <div>
                <label>Enter Password</label>
                <input 
                    type={showbtn1 ? 'text' : 'password'}
                    value={password}
                    onChange={(e => setPassword(e.target.value))}
                />
                <button onClick={handleClick}>{showbtn1 ? 'hide' : 'show'}</button>

            </div>
            <div>
                <label>confirm Password</label>
                <input 
                    type='password'
                    value={confirmPassword}
                    onChange={(e => setConfirmPassword.target.value)}
                />
                <button >show</button>
            </div>
        </div>
    )
}

export default ShowPassword;