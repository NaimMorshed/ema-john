import React, { useState } from 'react';
import './Shop.css';    
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const productHandle = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const count = newCart.filter(cart => cart.key === product.key);
        addToDatabaseCart(product.key, count.length);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(
                        product => 
                            <Product 
                                key = {product.key}
                                showButton = {true}
                                productHandle = {productHandle}
                                product = {product}>
                            </Product>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;