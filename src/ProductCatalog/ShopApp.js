import React from 'react';
import { Router } from '@reach/router';

import '../App.css';

import { ProductCatalogFiltering } from './ProductCatalogFiltering';
import { OrderPage } from './OrderForm/OrderPage';
import { ShopMenu } from './ShopMenu';
import { PaymentDeliveryInfo } from './PaymentDeliveryInfo';
import { ProductDetailContainer } from './ProductDetailContainer';

export const ShopApp = () => (
    <>
        <h1>My shop</h1>
        <ShopMenu />
        <Router>
            <ProductCatalogFiltering
                path="/"
            />
            <ProductCatalogFiltering
                path="/products"
            />
            <OrderPage
                path="/order"
            />
            <PaymentDeliveryInfo
                path="/payment-delivery"
            />
            <ProductDetailContainer
                path="/product/:productId"
            />
        </Router>
    </>
);
