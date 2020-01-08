import React from 'react';
import { OrderForm } from './OrderForm';

export const OrderPage = ({ onBackToShopClick }) => (
    <>
        <h1>Objednávka</h1>
        <p>
            <button
                onClick={onBackToShopClick}
            >
                Späť do e-shopu
            </button>
        </p>
        <OrderForm />
    </>
);