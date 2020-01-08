import React from 'react';
import { SectionWrapper } from './SectionWrapper';

export class ProductItem extends React.Component {
    render() {
        const { product, categories, basket } = this.props;
        if (!product.thumbnail) {
            return null;
        }
        return (
            <SectionWrapper>
                <Image src={product.thumbnail} />
                <p><strong>{product.name}</strong></p>
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

const getAddToBasketName = (basket, productName) => {
    return basket[productName] ? "In basket, add more" : "Add to basket";
}

function Image(props) {
    return (
        <img src={props.src} width="150" style={{ float: 'left' }} />
    )
}

function getCategoryNameById(categories, productCategoryId) {
    return categories.filter(category => category.id === productCategoryId)[0].name;
}