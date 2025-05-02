import React, { useState } from "react";

function Button({ text, setText }) {
    return (
        <div>
            <button onClick={() => text === 'Logged In' ? setText('Logged out') : setText('Logged In')}>Toggle Login</button>
        </div>
    )
}

function Profiles() {
    const [text, setText] = useState('Logged In')

    // function toggleLogin() {
    //     if (text === 'Logged In') {
    //         setText('Logged out')
    //     } else {
    //         setText('Logged In')
    //     }
    // }
    return (
        <div>
            <p>{text}</p>
            <Button text={text} setText={setText}/>

        </div>
    )
}
export default Profiles;