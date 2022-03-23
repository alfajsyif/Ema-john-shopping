import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart,setcart] = useState([]);

    useEffect( () =>{
fetch('products.json')
.then(res =>res.json())
.then(data =>setproducts(data))
    },[]);

    // eventhandler
    const handleClick = (product) =>{
        console.log(product);
        // cart.push(product);
        const newCart = [...cart,product];
        setcart(newCart);
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
            {
              products.map(product=><Product 
                key={product.id}
                product={product}
                handleClick={handleClick}
                ></Product>)
            }
            </div>
           <div className="cart-container">
            <h4>order summary</h4>
            <p>Selected Items: {cart.length}</p>
           </div>
        </div>
    );
};

export default Shop;