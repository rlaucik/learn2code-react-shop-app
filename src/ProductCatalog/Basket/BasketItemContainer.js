import React from 'react';
import { PropTypes } from 'prop-types';

import { getProductPrice } from './BasketService';
import { BasketItemView } from './BasketItemView';

export class BasketItemContainer extends React.Component {
    style = {
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

    render() {
        const { productName, productAmount } = this.props;
        const price = getProductPrice(productName);
        
        return (
            <BasketItemView
                name={productName}
                amount={productAmount}
                price={price}
                onProductRemove={this.onProductRemove}
            />
        );
    }

    onProductRemove = () => {
        this.props.onProductRemove(this.props.productName);
    }
}

BasketItemContainer.propTypes = {
    productName: PropTypes.string,
    productAmount: PropTypes.number,
}