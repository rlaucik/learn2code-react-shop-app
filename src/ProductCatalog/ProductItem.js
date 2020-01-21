import React from 'react';
import { Link } from '@reach/router';

import { SectionWrapper } from './SectionWrapper';
import { getCategoryNameById } from './ProductService';

export class ProductItem extends React.Component {
    render() {
        const { product, categories, basket } = this.props;
        if (!product.thumbnail) {
            return null;
        }
        return (
            <SectionWrapper>
                <Image src={product.thumbnail} />
                <Link to={`/product/${product.id}`}><strong>{product.name}</strong></Link>
                <p>Category: {getCategoryNameById(categories, product.categoryId)}</p>
                <p>Price: {product.price} €</p>
                <button
                    id="mojbutton"
                    value={product.name}
                    onClick={this.onAddToBasket}
                >
                    {getAddToBasketName(basket, product.name)}
                </button>
            </SectionWrapper>
        );
    }

    onAddToBasket = () => {
        this.props.onAddToBasket(this.props.product.name);
    }
}

export const getAddToBasketName = (basket, productName) => {
    return basket[productName] ? "In basket, add more" : "Add to basket";
}

export const Image = props =>
    <img
        src={props.src}
        width="150"
        style={{ float: 'left' }}
        alt="Product"
    />;
