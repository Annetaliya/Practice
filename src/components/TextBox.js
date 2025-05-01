import React, { useState } from 'react'

const TextBox = () => {
    const [inputValue, setInputValue] = useState('Blank');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
  return (
    <div>
        <h1>{inputValue}</h1>
        <input 
            type='text'
            name='inputValue'
            value={inputValue}
            onChange={handleChange}
        />
    </div>
  )
}

export default TextBox