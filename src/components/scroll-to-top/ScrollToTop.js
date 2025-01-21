import React, { useRef } from 'react';
import useFetch from '../use-fetch/useFetch';

const ScrollToTop = () => {
  const bottomRef = useRef(null)
  const {data, pending, error} = useFetch('https://dummyjson.com/products?limit=100', {})

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behaviour: 'smooth'
    })
  }

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behaviour: 'smooth'})
  }

  if (error) {
    return <p>Error Occured please try again later</p>
  }
  if (pending ) {
    return <div>Loading... Please wait</div>
  }
  return (
    <div>
      <h1>Scroll to Top and Bottom feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{listStyle: 'none'}}>
        {
          data && data.products && data.products.length ? 
          data.products.map((productItem) =>(
            <li key={productItem.id}>{productItem.title}</li>
          ))
          :null
        }
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  )
}

export default ScrollToTop