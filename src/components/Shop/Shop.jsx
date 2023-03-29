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
        let newCart = [];

        // const newCart = [...cart, product];

        // If product doesnt exist in the cart, then Set Quantity = 1
        // If exist Update Quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
            
        }
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