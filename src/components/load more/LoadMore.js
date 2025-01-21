import React, { useEffect, useState } from 'react';
import './style.css'

function LoadMore () {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const result  =  await response.json();
            if (result && result.products && result.products.length ){
                setProducts((prev) => [...prev, ...result.products]);
                setLoading(false);
            }
            console.log(result)
            
        } catch(e) {

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    if(loading) {
        return <div>Loading data! Please wait</div>
    }

    return (
        <div className='containers'>
            <div className='product-container'>
                {
                    products && products.length ? 
                    products.map((item) => (
                        <div key={item.id} className='product'>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>

                        </div>
                    ))
                    : null
                }
            </div>
            <div className='button-container'>
                <button onClick={() => setCount(count + 1)}>Load More Products</button>
            </div>

        </div>
    )
}
export default LoadMore;