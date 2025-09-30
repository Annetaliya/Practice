import React, { useState } from 'react';


function AddToCart () {
    const [cartItem, setCartItem] = useState([])
    const itemList = ['bread', 'butter', 'eggs', 'milk','chocos'];

    function handleAddToCart(element) {
        setCartItem([...cartItem, element ])
        console.log(cartItem)
       
    }
   
    return (
        <div>
            <h1>Add to cart</h1>
            <ul>
                {itemList.map((item, index) => (
                    <div key={index}>
                        <li>{item}</li>
                        <button onClick={() => handleAddToCart(item)}>Add to cart</button>
                    </div>
                ))}
            </ul>
            {cartItem &&
                <div> 
                    <h2>Cart</h2>
                    <ul>
                        {cartItem.length > 0 ? 
                            cartItem.map((el, index) => (
                                <div key={index}>
                                    <li>{el}</li>
                                </div>
                            ))
                        : ''
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default AddToCart;