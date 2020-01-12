import React from 'react';
import PropTypes from 'prop-types';

import { BasketItemContainer } from './BasketItemContainer';
import { calculateTotal } from './BasketService';
import { Link } from '@reach/router';

const style = {
    width: "500px",
    padding: "10px",
    minHeight: "300px",
    position: "fixed",
    right: 0,
    top: 0,
    border: "5px solid silver",
}

export const Basket = ({ basket, onProductRemove, onOrderButtonClick }) => {
    const basketItems = Object.keys(basket);
    if (basketItems.length < 1) {
        return null;
    }

    return (
        <div style={style}>
            <h2>Basket content</h2>
            {basketItems.map(productName => 
                <BasketItemContainer
                    key={productName}
                    productName={productName}
                    productAmount={basket[productName]}
                    onProductRemove={onProductRemove}
                />
            )}
            <hr/>
            <p><strong>TOTAL: {calculateTotal(basket)} €</strong></p>
            <p><Link to="/order">Order</Link></p>
        </div>
    );
}

Basket.propTypes = {
    basket: PropTypes.object,
    onProductRemove: PropTypes.func,
    onOrderButtonClick: PropTypes.func,
};
