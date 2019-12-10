import React from 'react';
import { products, categories } from './shopData';
import { ProductCategoriesDropdown } from './ProductCategoriesDropdown';
import { ProductList } from './ProductList';

export class ProductCatalogFiltering extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCategoryId: "0",
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
                />
            </>
        );
    }

    handleCategoryChange = (event) => {
        this.setState({
            currentCategoryId: event.target.value,
        });
    }
}

const getProductsFromCategory = (products, categoryId) => {
    if (categoryId === "0") {
        return products;
    }
    return products.filter(product => categoryId === product.categoryId);
}