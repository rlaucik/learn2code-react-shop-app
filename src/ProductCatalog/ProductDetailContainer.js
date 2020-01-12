import React from 'react';
import PropTypes from 'prop-types';

import { categories } from './shopData';
import { getCategoryNameById, getProductDetailsById } from './ProductService';
import { ProductDetailView } from './ProductDetailView';

export const ProductDetailContainer = ({productId}) => {
    const { name, thumbnail, categoryId, price } = getProductDetailsById(productId);
    const categoryName = getCategoryNameById(categories, categoryId);
    return (
        <ProductDetailView
            name={name}
            thumbnail={thumbnail}
            categoryName={categoryName}
            price={price}
        />
    );
};

ProductDetailContainer.propTypes = {
    id: PropTypes.string,
};
