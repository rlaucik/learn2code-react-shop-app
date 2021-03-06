import React from 'react';

import { products, categories } from './shopData';
import { ProductCategoriesDropdown } from './ProductCategoriesDropdown';
import { ProductPriceFilter } from './ProductPriceFilter';
import { ProductSearchFilter } from './ProductSearchFilter';
import { ProductList } from './ProductList';
import { Basket } from './Basket/Basket';
import { productsFilterCombined } from './productsFilterService'

export class ProductCatalogFiltering extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCategoryId: "0",
            basket: {},
            priceFrom: null,
            priceTo: null,
            searchQuery: '',
        }
    }
    render() {
        const { currentCategoryId, priceFrom, priceTo, searchQuery } = this.state;
        const filteredProducts = productsFilterCombined(
            products,
            currentCategoryId,
            priceFrom,
            priceTo,
            searchQuery,
        );

        return (
            <>
                <h2>Our products</h2>
                <ProductCategoriesDropdown
                    onChange={this.handleCategoryChange}
                    categories={categories}
                />
                <ProductSearchFilter
                    onChange={this.handleSearch}
                />
                <ProductPriceFilter
                    onChangeFrom={this.handlePriceFromChange}
                    onChangeTo={this.handlePriceToChange}
                />
                <ProductList
                    products={filteredProducts}
                    categories={categories}
                    basket={this.state.basket}
                    onAddToBasket={this.addToBasket}
                />
                <Basket
                    basket={this.state.basket}
                    onProductRemove={this.removeFromBasket}
                />
            </>
        );
    }

    handleCategoryChange = event => {
        this.setState({
            currentCategoryId: event.target.value,
        });
    }

    handlePriceFromChange = event => {
        this.setState({
            priceFrom: event.target.value,
        });
    }

    handlePriceToChange = event => {
        this.setState({
            priceTo: event.target.value,
        });
    }

    handleSearch = event => {
        this.setState({
            searchQuery: event.target.value,
        })
    }

    addToBasket = (productName) => {
        const basket = getUpdatedBasketAfterAdd(this.state.basket, productName);
        this.setState({
            basket,
        });
    }

    removeFromBasket = (productName) => {
        const basket = getUpdatedBasketAfterRemove(this.state.basket, productName)
        this.setState({
            basket,
        });
    }
}

const getUpdatedBasketAfterAdd = (basket, productName) => {
    const amount = basket[productName] ? basket[productName] + 1 : 1;
    return {
        ...basket,
        [productName]: amount,
    };
}

const getUpdatedBasketAfterRemove = (basket, productName) => {
    const {
        [productName]: deletedProduct,
        ...updatedBasket
    } = basket;
    return updatedBasket;
}
