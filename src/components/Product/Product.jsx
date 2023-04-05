import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    console.log(props);
    const {img, name, seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <img src= {img} alt= '' />
            <div className='product_info'>
                <h5 className='product_name'>{name}</h5>
                <p>Price :  ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button onClick= {() => handleAddToCart(props.product)} className= 'btn_cart'>
                Add To Cart
                <FontAwesomeIcon icon={faCartShopping}/>
            </button>
        </div>
    );
};

export default Product;