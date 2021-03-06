import React, { useEffect, useState } from 'react';
import './Shop.css';    
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(keys => {
            const product = fakeData.find(pd => pd.key === keys);
            product.quantity = savedCart[keys];
            return product;
        })
        setCart(previousCart);
    }, []);

    const productHandle = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(cart => cart.key === toBeAddedKey);
        let count = 1;
        let newCount;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key === product.key)
            newCount = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCount = [...cart, product];
        }
        setCart(newCount);
        
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