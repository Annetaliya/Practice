import React, {useState} from 'react';

const Practice = () => {

    const [selected, setSelected] = useState(null);
    const [enableMultiple, setEnaleMultiple] = useState(false);
    const [selectMultiple, setSelectedMultiple] = useState([])
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

    function trackSelected (currentId){
        setSelected(currentId === selected ? null : currentId)
        
        console.log(selected)

    }

    function handleMultipleSelect (currentId) {
        const cpyMultiple = [...selectMultiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(currentId)
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(currentId)
        } else {
        cpyMultiple.splice(findIndexOfCurrentId, 1)
         }
        setSelectedMultiple(cpyMultiple)
        console.log(selectMultiple)
        
    }
    return(
        <div>
            <button onClick={()=> setEnaleMultiple(!enableMultiple)}>Select Multiple</button>
            {
                data.map((item) => (
                    <div key={item.id}>
                        <div  onClick={ enableMultiple ? () => handleMultipleSelect(item.id) : () => trackSelected(item.id)}>
                            <h3>{item.question}</h3>
                            <span>+</span>

                        </div>
                        {
                            selected === item.id  || selectMultiple.indexOf(item.id) !== -1 ?
                            <div>{item.answer}</div>
                            : null
                        }
                        
                    </div>
                  
                ))
            }
        </div>
    )
}
export default Practice;