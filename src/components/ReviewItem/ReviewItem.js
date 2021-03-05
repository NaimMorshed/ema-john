import React from 'react';
import Cart from '../Cart/Cart';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { name, key, quantity, price } = props.product;

    return (
        <div className="container">
            <div className="review-item">
                <h4 className="product-name">{name}</h4>
                <p>Quantity: {quantity}</p>
                <p><small>${price}</small></p>
                <br />
                <button onClick={() => props.removeProduct(key)} className="main-button">Remove</button>
            </div>
            <div className="cart-container">
                <Cart cart={props}></Cart>
            </div>
        </div>
    );
};

export default ReviewItem;