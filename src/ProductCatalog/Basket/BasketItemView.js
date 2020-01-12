import React from 'react';
import { PropTypes } from 'prop-types';

const style = {
    border: "0",
    borderRadius: "0",
    background: "black",
    width: "35px",
    height: "25px",
    color: "white",
    fontWeight: "bold",
    marginLeft: "10px",
    cursor: "pointer",
}

export const BasketItemView = ({ name, amount, price, onProductRemove }) => (
    <p>{amount} x {name}, price: {price} € 
        <button style={style} onClick={onProductRemove}>X</button>
    </p>
);

BasketItemView.propTypes = {
    name: PropTypes.string,
    amount: PropTypes.number,
    price: PropTypes.number,
}
