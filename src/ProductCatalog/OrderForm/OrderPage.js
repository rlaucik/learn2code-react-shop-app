import React from 'react';
import { Link } from '@reach/router';

import { OrderForm } from './OrderForm';

export const OrderPage = () => (
    <>
        <h2>Order Form</h2>
        <p>
            <Link
                to="/products"
            > {'<<<'} Back to shop
            </Link>
        </p>
        <OrderForm />
    </>
);
