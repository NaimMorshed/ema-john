import React, { useState } from 'react';

const Review = (props) => {
    let {items, setItems} = useState([]);
    return (
        <div>
            <h1>Total cart items: {items}</h1>
        </div>
    );
};

export default Review;