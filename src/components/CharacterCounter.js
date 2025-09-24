import React, {useState} from 'react'

function CharacterCounter () {

    const [text, setText] = useState('');
    const [counter, setCounter] = useState(20)

    function handleChange (e) {
        setText(e.target.value)
        setCounter(counter - text.length)

    }
    return (
        <div>
            <h1>Character Counter</h1>
            <div>
                <input
                    type='text'
                    value={text}
                    onChange={handleChange}

                 />
                 <p>{counter}/20</p>
            </div>
        </div>
    )
}
export default CharacterCounter;