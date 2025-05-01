import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function handleAdd() {
        setCount(count + 1)
    }

    function handleSubtract() {
        setCount(count - 1)
    }
    return (
        <>
        <h1>Counter: {count}</h1>
        <button onClick={handleSubtract}> - </button>
        <button onClick={handleAdd}> + </button>
        </>
    )

}
export default Counter;