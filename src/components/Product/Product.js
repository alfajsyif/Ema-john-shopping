import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)
    const {name, img ,seller, ratings, price} = props.product;
   
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className='product-info'>
          <p className='product-name'>{name}</p>
          <p>Price:$ {price}</p>
          <p><small>Seller: {seller}</small></p>
          <p><small>Rating: {ratings} stars</small></p>
          </div>
          <button onClick={() =>props.handleClick(props.product)} className='btn-cart'>
              <p className='btn-text'>Add to Cart</p>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Product;