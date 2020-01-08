import React from 'react';
import PropTypes from 'prop-types';

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

OrderPage.propTypes = {
    onBackToShopClick: PropTypes.func.isRequired,
};
