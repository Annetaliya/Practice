import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';
import './style.css';

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (currentIndex) => {
        console.log(`clicked ${currentIndex}`)
        setRating(currentIndex)
        

    }
    const handleMouseEnter = (currentIndex) => {
        console.log(`enter ${currentIndex}`)
        setRating(currentIndex)

    }
    const handleMouseLeave = () => {
    
        setHover(rating)

    }

    return(
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1
                    return <FaStar key={index}
                    className={index <= (rating || hover) ? 'active' : 'inactive'}
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseMove={() => handleMouseLeave()}
                    size={40}
                     />
                })
            }

        </div>
    )
}

export default StarRating;