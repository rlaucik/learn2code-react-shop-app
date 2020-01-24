import React from 'react';
import { Link } from '@reach/router';
import './ShopMenu.css';
import { LanguageContext } from './LanguageContext';

export class ShopMenu extends React.Component {
    render() {
        const translations = this.context;
        return(
            <nav>
                <Link to="/products">{translations['Products']}</Link>
                <Link to="/payment-delivery">{translations['Delivery & Payment']}</Link>
                <Link to="/order">{translations['Order']}</Link>
            </nav>
        );
    }
}

ShopMenu.contextType = LanguageContext;
