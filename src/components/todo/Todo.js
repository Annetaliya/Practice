import React, { useState } from 'react';
import './todo.css'


const Todo = () => {
   const [input, setInput] = useState('');
   const [priority, setPriority] =  useState('Medium')
   const [items, setItems] = useState(
    [
        {text: 'Write Essay', checked: false, priority},
        {text: 'Send Email', checked: false, priority}
    ]
)

   
   const handleChange = (e) => {
    setInput(e.target.value)
    
    console.log(input)
   }

   const handlePriorityChange = (e) => {
    setPriority(e.target.value)
   }

   //function used to add todo items
   const handleAddTodos = () => {
    if (input === '') {
        return;
    } 
    const newList = {text: input, checked: false, priority}
    setItems([...items, newList]);
    setInput('')
    
   }
   // function delete to do item 
   const handleDeleteTodo = (id) => {
    const updtatedItems = items.filter((__, index) => index !== id)
    setItems(updtatedItems)
   }

   const handleCheckBox = (id) => {
    const checkedItem = items.map((itemlist, index) => 
        index === id ? { ...itemlist, checked: !itemlist.checked } : itemlist
    )
    
    setItems(checkedItem)
    console.log(checkedItem)
   }

  return (
    <div className='todo-container'>
        <div className='input-container'>
            <input
                className='todo-input'
                type='text'
                placeholder='Add your Todo'
                name='input'
                value={input}
                onChange={handleChange}
             />
             <select value={priority} onChange={handlePriorityChange}>
                <option value='High'>High</option>
                <option value='Medium'>Medium</option>
                <option value='Low'>Low</option>
             </select>
            <button onClick={handleAddTodos} className='btn1'>Add</button>
            <ul>
            {items.length !==0 ? 
            items.map((listItems, index) => (
                <li key={index} className={`${listItems.priority.toLowerCase()}`}>
                    <span style={{textDecoration: listItems.checked ? 'line-through' : 'none'}}>
                        {listItems.text}- <strong>{listItems.priority}</strong>
                    </span>
                    <input 
                    type='checkbox'
                    checked={listItems.checked}
                    className='checked'
                    onChange={() => handleCheckBox(index)}
                    />
                    
                    <button onClick={()=>handleDeleteTodo(index)} className='btn2'>delete</button>
                </li>
            ))
            : <p>No items</p>}
        </ul>
        </div>
        
        
    </div>
  )
}

export default Todo