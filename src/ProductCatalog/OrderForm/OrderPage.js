import React from 'react';
import { OrderForm } from './OrderForm';

export class OrderPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Objednávka</h1>
                <p>
                    <button
                        onClick={this.props.onBackToShopClick}
                    >
                        Späť do e-shopu
                    </button>
                </p>
                <OrderForm />
            </>
        );
    }
}