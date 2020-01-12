import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

export const ProductDetailView = ({name, thumbnail, categoryName, price}) => (
    <>
        <h2>{name}</h2>
        <img src={thumbnail} alt={name} style={{float: 'left'}} />
        <p><strong>Category:</strong> {categoryName}</p>
        <p><strong>Price:</strong> {price} €</p>
        <Link to="/products">{"<<<"} Back to shop</Link>
    </>
);

ProductDetailView.propTypes = {
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    categoryName: PropTypes.string,
    price: PropTypes.number,
};
