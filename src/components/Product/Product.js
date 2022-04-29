import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props.product)
    const { name, img, price } = props.product;

    return (
        <div className='product'>

            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>${price}</h4>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;