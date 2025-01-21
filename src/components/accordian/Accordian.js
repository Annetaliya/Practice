import React, { useState } from 'react'
import './accordian.css';

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enableSelection, setEnableSelection] = useState(false);
    const [multiSelect, setMultiSelect] = useState([]);

    const data = [
        {
            id: 1,
            question: "what are accordion components?",
            answer: "Accordion componenets are user interface elememts used for organisation",
        
        },
        {
            id: 2,
            question: "What are they used for?",
            answer: "They are used in various context incliding FAQs"
        },
        {
            id: 3,
            question: "Accodion as a musical instrument",
            answer: "The accordion is a musical instrument with a keyboard"
        },
        {
            id: 4,
            question: "Can I create accordion with a different framework?",
            answer: "Yes, of course it is very possible"
        },
    ];

    function handleSingleSelection (currentId) {
        console.log(currentId);
        setSelected(currentId === selected ? null: currentId)

    }
    function handleMultiSelection (currentId) {
        let cpyMultiple = [...multiSelect];
        const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
        console.log(findIndexOfCurrentId)
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(currentId)
        } else cpyMultiple.splice(findIndexOfCurrentId, 1)
        setMultiSelect(cpyMultiple);
        console.log(multiSelect)

    }
  return (
    <div className='wrapper'>
        <button onClick={()=>setEnableSelection(!enableSelection)}>Enable Multi Selection</button>
        <div className='accordian'>
            {data && data.length > 0 ? 
            data.map((item) => (
                <div key={item.id} className='item'>
                    <div onClick={enableSelection 
                        ? () => handleMultiSelection(item.id) 
                        : () => handleSingleSelection(item.id)} className='title'>
                        <h3>{item.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === item.id || multiSelect.indexOf(item.id) !== -1 ? 
                        <div className='content'>{item.answer}</div>
                        : null
                    }
                    

                </div>
            ))
            : <div>No data found!</div>}

        </div>
    </div>
  )
}

export default Accordian