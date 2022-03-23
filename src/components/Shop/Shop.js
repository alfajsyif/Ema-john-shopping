import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setcart] = useState([]);

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
         <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;