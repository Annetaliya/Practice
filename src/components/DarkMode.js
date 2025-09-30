import React, { useState } from 'react';

function DarkMode () {
    const [color, setColor] = useState('white')
    const [textColor, setTextColor] = useState('black')
    const [change, setChange] =  useState(false)

    function handleBackgroundChange() {
        console.log(change, color, textColor)
        setColor(change ? 'black': 'white');
        setTextColor(change ? 'white': 'black');
        setChange(!change);
    }

    return (
        <div >
            <button onClick={handleBackgroundChange}>Change mode</button>
            <div style={{background: color}}>
                <h1 style={{color: textColor}}>Hello World</h1>
                <p style={{color: textColor}}>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
            </div>
        </div>
    )
}

export default DarkMode;