import React, { useState } from "react";

const TrialTodo = () => {
    const [input, setInput] = useState('');
    const [items, setItem] = useState([
        {text: 'Send email', checked: false},
        {text: 'Write essay', checked: false},

    ])
 
    function handleChange (e) {
        setInput(e.target.value)
    }

    function handleAddTodo () {
        if (input === '') {
            return;
        }
        const newItem = {text: input, checked: false};
        setItem([...items, newItem]);
        setInput('')
    }

    function handleChecked (id) {
        const checkedItem = items.map((item, index) => 
            index === id ? { ...item, checked: !item.checked} : item
        )
        setItem(checkedItem)
        console.log(checkedItem)
    }

    function handleDeleteTodo (id) {
        const filtered = items.filter((__, index) => index !== id)
        setItem(filtered);

    }


  return (
    <div>
        <div>
            <input 
                type="text"
                name="input"
                placeholder="Add todo Item"
                value={input}
                onChange={handleChange}
            />
            <button style={{color: 'white', background: 'black'}}
            onClick={handleAddTodo}
            >
                Add
            </button>
        </div>
        <ul>
            {items.length !== 0 ? 
            items.map((listItem, index) => (
                <li key={index}>
                    <span style={{ textDecoration: listItem.checked ? 'line-through' : 'none'}}>
                        {listItem.text}
                    </span>
                    
                    <input 
                        type="checkbox"
                        checked={listItem.checked}
                        onChange={() => handleChecked(index)}
                    />
                    
                    <button 
                    style={{marginLeft: '30px'}}
                    onClick={() => handleDeleteTodo(index)}
                    >
                        Delete
                    </button>
                </li>
            ))
            : <p>No items found</p>}
        </ul>
        
    </div>
  );
};

export default TrialTodo;
