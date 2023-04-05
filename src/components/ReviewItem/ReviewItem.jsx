import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {id, img, price, name, quantity} = product;

    return (
        <div className='review_item'>
            <img src= {img} alt="" />
            <div className='review_details'>
                <p className='product_title'>{name}</p>
                <p>Price: <span className='orange_text'>${price}</span></p>
                <p>Order Quantity: <span className='orange_text'>{quantity}</span></p>
            </div>
            <button onClick= {() => handleRemoveFromCart(id)} className='btn_delete'>
                <FontAwesomeIcon className='delete_icon' icon={faTrashAlt}/>
            </button>
        </div>
    );
};

export default ReviewItem;