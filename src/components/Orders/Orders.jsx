import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Orders.css';

import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    // console.log(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);


    }

    return (
        <div className='shop_container'>
            <div className='review_container'>
                {/* <h2>Orders Page: {cart.length}</h2> */}
                {
                    cart.map(product => <ReviewItem
                    key = {product.id}
                    product = {product}
                    handleRemoveFromCart = {handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart_container'>
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;