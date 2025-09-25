import React, { useState } from'react';
import './tabs.css'

function SwitchTabs () {
    const [activeIndex, setActiveIndex] = useState(0)

    
   

    const navigation = ['Home', 'About', 'Profile']

    const data = [
        {
            title: 'Home Tab',
            more: 'React can change how you think about the designs you look at and the apps you build. Where once you might have seen a forest, after working with React, you will appreciate the individual trees.'
        },
        {
            title: 'About Tab',
            more: 'Now that you have your component hierarchy, it’s time to implement your app. The most straightforward approach is to build a version that renders the UI from your data model without adding any interactivity… yet!'
        },
        {
            title: 'Profile Tab',
            more: 'To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props. Props are a way of passing data from parent to child.'
        },
    ]

    function handleTabSwitch(index) {
        setActiveIndex(index)
        console.log(activeIndex)
    }
    return (
        <div>
            <nav style={{display: 'flex'}}>
                {navigation.map((item, index) => (
                    <div key={index}>
                        <button onClick={() => handleTabSwitch(index)}>{item}</button>
                    </div>
                ))}
            </nav>
            <div>
                {data.map((el,idx) => (
                    <div key={idx} className={activeIndex === idx ? 'show' : 'hide'} >
                        <h3>{el.title}</h3>
                        <p>{el.more}</p>
                        

                    </div>
                ))}
            </div>
        </div>
    )
}

export default SwitchTabs;