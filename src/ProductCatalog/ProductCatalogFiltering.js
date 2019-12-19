import React from 'react';
import { products, categories } from './shopData';
import { ProductCategoriesDropdown } from './ProductCategoriesDropdown';
import { ProductList } from './ProductList';
import { Basket } from './Basket';

export class ProductCatalogFiltering extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCategoryId: "0",
            basket: {},
        }
    }
    render() {
        const filteredProducts = getProductsFromCategory(products, this.state.currentCategoryId);
        return (
            <>
                <h1>My shop</h1>
                <ProductCategoriesDropdown
                    onChange={this.handleCategoryChange} 
                    categories={categories}
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
                    onOrderButtonClick={this.props.onOrderButtonClick}
                />
            </>
        );
    }

    handleCategoryChange = (event) => {
        this.setState({
            currentCategoryId: event.target.value,
        });
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

const getProductsFromCategory = (products, categoryId) => {
    if (categoryId === "0") {
        return products;
    }
    return products.filter(product => categoryId === product.categoryId);
}