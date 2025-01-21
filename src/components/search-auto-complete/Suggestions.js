import React from 'react';

const Suggestion = ({data, handleClick}) => {
    return (
        <ul>
            {data && data.length ?
            data.map((item ) => (
                <li key={item.id} onClick={handleClick}>
                    {item}
                     </li>
            ))
            : null}
        </ul>
    )
}

export default Suggestion;