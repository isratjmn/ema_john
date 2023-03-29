import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];

        // Step 1: Get id of the addedProduct
        for(const id in storedCart) {
            // Step 2: Get Product from Product State by Using id
            const addedProduct  = products.find(product => product.id === id)
            if(addedProduct) {
                // Step 3: Add Quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //  Step 4: Add the added Product to the Saved Cart
                savedCart.push(addedProduct);
            }
            // console.log('Added Product', addedProduct);

        }
        // Step 5: Set the Cart
        setCart(savedCart);
    }, [products])


    const handleAddToCart = (product) => {
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop_container'>
            <div className="products_container">
                {
                    products.map(product => <Product
                    key= {product.id} product= {product}
                    handleAddToCart= {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart_container">
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;