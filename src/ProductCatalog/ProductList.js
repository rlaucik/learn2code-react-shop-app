import React from 'react';
import { ProductItem } from './ProductItem';
import { SectionWrapper } from './SectionWrapper';

export const ProductList = (props) => {
    const { products, categories, basket } = props;
    if (products.length === 0) {
        return <SectionWrapper>
            No products found for this selection :(
        </SectionWrapper>
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
