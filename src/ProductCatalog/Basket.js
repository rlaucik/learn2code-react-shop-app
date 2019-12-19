import React from 'react';
import { products } from './shopData';

const style = {
    width: "500px",
    padding: "10px",
    minHeight: "300px",
    position: "fixed",
    right: 0,
    top: 0,
    border: "5px solid silver",
}

export const Basket = ({ basket, onProductRemove }) => {
    const basketItems = Object.keys(basket);
    if (basketItems.length < 1) {
        return null;
    }

    return (
        <div style={style}>
            <h2>Basket content</h2>
            {basketItems.map(productName => 
                <BasketItem
                    key={productName}
                    productName={productName}
                    productAmount={basket[productName]}
                    onProductRemove={onProductRemove}
                />
            )}
            <hr/>
            <p><strong>TOTAL: {calculateTotal(basket)} €</strong></p>
        </div>
    );
}

export class BasketItem extends React.Component {
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
            <p>{productAmount} x {productName}, cena: {price} € 
                <button style={this.style} onClick={this.onProductRemove}>X</button>
            </p>
        );
    }

    onProductRemove = () => {
        this.props.onProductRemove(this.props.productName);
    }
}

const calculateTotal = (basket) =>
    Object.keys(basket).reduce(
        (total, productName) => {
            const amount = basket[productName];
            const price = getProductPrice(productName);
            return total + (price * amount)
        }, 0
    );

const getProductPrice = (productName) =>
    products.find(product => product.name === productName).price;
