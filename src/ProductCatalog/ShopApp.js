import React from 'react';
import { ProductCatalogFiltering } from './ProductCatalogFiltering';
import { OrderPage } from './OrderForm/OrderPage';

export class ShopApp extends React.Component {
    constructor() {
        super();
        this.state = {
            isOrdering: false,
        };
    }
    
    render() {
        if (this.state.isOrdering) {
            return (
                <OrderPage
                    onBackToShopClick={this.onBackToShopClick}
                />
            );
        }

        return (
            <ProductCatalogFiltering
                onOrderButtonClick={this.onOrderButtonClick}
            />
        );
    }

    onOrderButtonClick = () => {
        this.setState({
            isOrdering: true,
        })
    }

    onBackToShopClick = () => {
        this.setState({
            isOrdering: false,
        });
    }
}