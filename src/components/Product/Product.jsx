import React from 'react';
import './Product.css';


const Product = (props) => {
    // console.log(props.product);
    const {img, name, seller, ratings, price} = props.product;
    return (
        <div className='product'>
            <img src= {img} alt= '' />
            <div className='product_info'>
                <h5 className='product_name'>{name}</h5>
                <p>Price :  ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button className= 'btn_cart'>Add To Cart</button>
        </div>
    );
};

export default Product;