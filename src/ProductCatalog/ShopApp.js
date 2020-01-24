import React from 'react';
import { Router } from '@reach/router';

import '../App.css';

import { ProductCatalogFiltering } from './ProductCatalogFiltering';
import { OrderPage } from './OrderForm/OrderPage';
import { ShopMenu } from './ShopMenu';
import { PaymentDeliveryInfo } from './PaymentDeliveryInfo';
import { ProductDetailContainer } from './ProductDetailContainer';
import { LanguageContext, translations } from './LanguageContext';
import { LanguageButton } from './LanguageButton';

export class ShopApp extends React.Component {
    constructor() {
        super();
        
        this.state = {
            language: 'en',
        };
    }

    render() {
        const translatedTexts = translations[this.state.language];
        return (
            <LanguageContext.Provider value={translatedTexts}>
                <div>
                    <LanguageButton
                        onChangeLanguage={this.onChangeLanguage}
                    />
                </div>
            <h1>{translations['My shop']}</h1>
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
        </LanguageContext.Provider>
        );
    }
    
    onChangeLanguage = () => {
        const language = this.state.language === 'en' ? 'sk' : 'en';
        this.setState({
            language,
        });
    }
}
