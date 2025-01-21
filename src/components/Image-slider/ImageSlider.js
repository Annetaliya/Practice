import React, { useEffect, useState } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './style.css';

const ImageSlider = ({ url, limit = 5, page = 1}) => {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length-1 : currentSlide - 1)

    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1 )

    }
    

    const fetchImages = async (getUrl) => {
        setLoading(true)
        try {
            const response = await fetch (`${getUrl}?page=${page}&limit=${limit}`);
            const data =  await response.json();

            if (data) {
                setImages(data)
                setLoading(false);
            }

        } catch(e) {
            setErrMsg(e.message);
            setLoading(false);

        }

    }

    useEffect (() => {
        if (url !== '') fetchImages(url)


    }, [url])
    console.log(images)

    if (loading) {
        return <div>Loading data please wait!</div>
    }
    // if (errMsg !== null) {
    //     return <div>Error occured try again later {errMsg}</div>
    // }
    
    return (
        <div className='container'>
            <BsArrowLeftCircleFill 
            className='arrow arrow-left'
            onClick={handlePrevious}
             />
            {
                images && ImageData.length ? 
                images.map((imagesItem, index) => (
                    <img key={imagesItem.id}
                    alt={imagesItem.download_url}
                    src={imagesItem.download_url}
                    className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
                    
                     />

                ))
                : null
                
            }
            <BsArrowRightCircleFill 
            className='arrow arrow-right'
            onClick={handleNext}
            />
            <span className='circle-indicators'>
                {images && images.length ? 
                images.map((_,index) => (
                    <button key={index} 
                    className={currentSlide === index ? 'current-indicator' : 'current-indicator hide-current-indicator' }
                    onClick={() => setCurrentSlide(index)}
                    >

                    </button>
                ))
                : null}

            </span>

        </div>
    )
}
export default ImageSlider;