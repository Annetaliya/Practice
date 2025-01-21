import React from 'react'
import useFetch from './useFetch'

const Test = () => {
    const {data, pending, error} = useFetch('https://dummyjson.com/products', {})

    console.log(data)
  return (
    <div>
        <h1>Use Fetch Hook</h1>
        {
            pending ? <h3>Please wait...</h3> : null
        }
        {
            data && data.products && data.products.length ? 
            data.products.map((dataItem) => (
                <div key={dataItem.id}>{dataItem.title}</div>
            ))
            : null
        }
    </div>
  )
}

export default Test