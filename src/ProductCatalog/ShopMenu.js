import React from 'react';
import { Link } from '@reach/router';
import './ShopMenu.css';

export const ShopMenu = () => (
    <nav>
        <Link to="/products">Products</Link>
        <Link to="/payment-delivery">Delivery & Payment</Link>
        <Link to="/order">Order</Link>
    </nav>
);
