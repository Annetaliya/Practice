import React, { useState, useRef } from 'react';
import UseOutsideClick from './UseOutsideClick';


function ClickOutsideTest () {
   
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    UseOutsideClick(ref, ()=> setShowContent(false))
    return(
        <div>
            
            {
                showContent ? <div ref={ref}>
                    <h1>This is a random Content</h1>
                    <p>Please click oustide of this content to close</p>
                </div> 
                : <button onClick={() => setShowContent(true)}>Show Content</button>
            }
        </div>
    )
}

export default ClickOutsideTest