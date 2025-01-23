import React, { useState } from 'react';
import './todo.css'


const Todo = () => {
   const [input, setInput] = useState('');
   const [items, setItems] = useState(['Make breakfast', 'Write Essay'])

   
   const handleChange = (e) => {
    setInput(e.target.value)
    
    console.log(input)
   }

   //function used to add todo items
   const handleAddTodos = () => {
    if (input === '') {
        return;
    } else {
        const newList = [...items, input]
        setItems(newList);
        setInput('')
    }
   }
   // function delete to do item 
   const handleDeleteTodo = (id) => {
    const updtatedItems = items.filter((__, index) => index !== id)
    setItems(updtatedItems)

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
            <button onClick={handleAddTodos} className='btn1'>Add</button>
            <ul>
            {items.length !==0 ? 
            items.map((listItems, index) => (
                <li key={index}>{listItems}
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