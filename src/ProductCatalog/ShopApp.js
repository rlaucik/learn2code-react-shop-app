import React from 'react';
import { Router } from '@reach/router';

import { ProductCatalogFiltering } from './ProductCatalogFiltering';
import { OrderPage } from './OrderForm/OrderPage';
import { ShopMenu } from './ShopMenu';
import { PaymentDeliveryInfo } from './PaymentDeliveryInfo';

export const ShopApp = () => (
    <>
        <h1>My shop</h1>
        <ShopMenu />
        <Router>
            <ProductCatalogFiltering
                path="/products"
            />
            <OrderPage
                path="/order"
            />
            <PaymentDeliveryInfo
                path="/payment-delivery"
            />
        </Router>
    </>
);
