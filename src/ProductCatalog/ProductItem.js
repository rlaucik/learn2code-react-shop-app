import React from 'react';
import { Link } from '@reach/router';

import { SectionWrapper } from './SectionWrapper';
import { getCategoryNameById } from './ProductService';
import { LanguageContext } from './LanguageContext';

export class ProductItem extends React.Component {
    render() {
        const { product, categories, basket } = this.props;
        if (!product.thumbnail) {
            return null;
        }
        const translations = this.context;
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
                    {getAddToBasketName(basket, product.name, translations)}
                </button>
            </SectionWrapper>
        );
    }

    onAddToBasket = () => {
        this.props.onAddToBasket(this.props.product.name);
    }
}

ProductItem.contextType = LanguageContext;

export const getAddToBasketName = (basket, productName, translations) => {
    return basket[productName] ? translations["In basket, add more"] : translations["Add to basket"];
}

export const Image = props =>
    <img
        src={props.src}
        width="150"
        style={{ float: 'left' }}
        alt="Product"
    />;
