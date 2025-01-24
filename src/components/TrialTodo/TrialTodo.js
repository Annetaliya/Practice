import React, { useState } from "react";

const TrialTodo = () => {
 const [input, setInput] = useState('');
 const [items, setItems] = useState([
    {text: 'Send Email', checked: false},
    {text: 'Go shopping', checked: false}
 ])

 function handleChange (e) {
    setInput(e.target.value)
 }

 function handleChecked (id) {
    const checkedItem = items.map((item, index) => 
        index === id ? {...item, checked: !item.checked}: item
    )
    setItems(checkedItem)
    console.log(items)
 }

 function handleAddTodo () {
    const newItems = {text: input, checked: false}
    setItems([...items, newItems]);
    setInput('');
 }

 function handleDeleteTodo (id) {
    const filtered = items.filter((__, index) => index !== id)
    setItems(filtered);
 }

  return (
    <div>
        <div>
            <input
                type="text"
                placeholder="Add todo Item"
                name="input"
                value={input}
                onChange={handleChange}
            />
            <button 
                style={{background: 'black', color: 'white'}}
                onClick={handleAddTodo}
                >
                    Add
            </button>
            <ul>
                {items.length !== 0 ?
                items.map((listItems, index) => (
                    <li key={index}>
                        {listItems.text}
                        <input type='checkbox' value={listItems.checked} onChange={() => handleChecked(index)}/>
                        <button 
                        style={{marginLeft: '30px', background: 'red'}}
                        onClick={()=> handleDeleteTodo(index)}
                        >Delete
                        </button>
                    </li>
                )) 
                : <p>No Items Found</p>}
            </ul>
        </div>
    </div>
  );
};

export default TrialTodo;
