import React, { useState } from 'react'

const Counter2 = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1);
        setCount(prev => prev + 1)
    }
  return (
    <div>
        <h1> Count: {count}</h1>
        <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Counter2