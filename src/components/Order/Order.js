import React from 'react';
import './Order.css';
const Order = (props) => {
    const { name } = props.order;
    return (
        <div >
            <div><h4>{name}</h4></div>
        </div>

    );
};

export default Order;