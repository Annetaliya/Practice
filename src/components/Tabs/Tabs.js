import React, { useState } from 'react';
import './style.css'
const Tabs = ({tabsContent, onChange}) => {
    const [currenTabIndex, setCurrentTabIndex] = useState(0);

    function handleClick (getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }
  return (
    <div className='wrapper'>
        <div className='heading'>
            {tabsContent.map((item,index) => (
                <div key={item.label} 
                onClick={()=>handleClick(index)}
                className={`tab-item ${currenTabIndex === index ? 'active' : ''}`}
                >
                    <span className='label'>
                        {item.label}
                    </span>

                </div>
            ))}

        </div>
        <div className='content' style={{color: 'red'}}>
            {tabsContent[currenTabIndex] && tabsContent[currenTabIndex].content}


        </div>

    </div>
  )
};

export default Tabs