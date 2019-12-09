import React from 'react';
import { products, categories } from './shopData';
import { ProductItem } from './ProductItem';

export class ProductCatalogFiltering extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currenctCategoryId: "0",
        }
    }
    render() {
        const filteredProducts = getProductsFromCategory(products, this.state.currenctCategoryId);
        return (
            <>
                <h1>My shop</h1>
                <select
                    style={{ marginBottom: '10px' }}
                    onChange={this.handleCategoryChange}
                >   
                    <option value="0">
                        All products
                    </option>
                    {categories.map(category => 
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    )}
                </select>
                <div>
                    {filteredProducts.map(product => <ProductItem key={product.name} product={product} categories={categories} />)}
                </div>
            </>
        );
    }

    handleCategoryChange = (event) => {
        this.setState({
            currenctCategoryId: event.target.value,
        });
    }
}

const getProductsFromCategory = (products, categoryId) => {
    if (categoryId === "0") {
        return products;
    }
    return products.filter(product => categoryId === product.categoryId);
}