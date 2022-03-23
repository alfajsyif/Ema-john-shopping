import React, { useEffect, useState } from 'react';
import {addToDb ,getStoredCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setcart] = useState([]);

    useEffect( () =>{
        // console.log('local storage first',products)
fetch('products.json')
.then(res =>res.json())
.then(data =>setproducts(data))
    },[products]);
    useEffect(() =>{
        const storedCart = getStoredCart();
        // console.log(storedCart);
        const saveCart = [];
        for(const id in storedCart){
            // console.log(id);
            const addedProduct = products.find(product=> product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
                // console.log(addedProduct);
            }
            setcart(saveCart);
            // console.log(addedProduct);
        }
        
    },[products])
    // eventhandler
    const handleClick = (product) =>{
        // console.log(product);
        // cart.push(product);
        const newCart = [...cart,product];
        setcart(newCart);
        addToDb(product.id);
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