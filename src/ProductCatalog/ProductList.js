import React from 'react';
import { ProductItem } from './ProductItem';

export const ProductList = (props) => {
    const { products, categories, basket } = props;
    if (products.length === 0) {
        return <p>No products found for this category :(</p>
    }
    return (
        <div>
            {products.map(product => <ProductItem
                key={product.name}
                product={product}
                categories={categories} 
                basket={basket}
                onAddToBasket={props.onAddToBasket}
            />)}
        </div>
    );
}