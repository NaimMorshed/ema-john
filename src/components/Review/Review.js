import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [items, setItems] = useState([]);

    const removeProduct = productKey => {
        const newCart = items.filter(pd => pd.key !== productKey);
        setItems(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setItems(cartProducts);
    }, [])

    return (
        <div>
            <h1>Cart items: {items.length}</h1>
            {
                items.map(pd => <ReviewItem 
                    key={pd.key}
                    removeProduct={removeProduct}
                    product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;