import React from 'react';

const ReviewItem = (props) => {
    const [name, quantity] = props.product;
    const style = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px'
    };
    return (
        <div style={style} className="review-item">
            <h4 className="product-name">This is review</h4>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;