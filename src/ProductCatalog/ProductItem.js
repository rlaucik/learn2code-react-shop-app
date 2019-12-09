import React from 'react';

const style = {
    minWidth: "500px",
    float: "left",
    clear: "both",
    border: "5px solid silver",
    marginBottom: "20px",
};

export function ProductItem(props) {
    const { product, categories } = props;
    return (
        <div style={style}>
            <Image src={product.thumbnail} />
            <p><strong>{product.name}</strong></p>
            <p>Category: {getCategoryNameById(categories, product.categoryId)}</p>
            <p>Price: {product.price} €</p>
        </div>
    );
}

function Image(props) {
    return (
        <img src={props.src} width="150" style={{ float: 'left' }} />
    )
}

function getCategoryNameById(categories, productCategoryId) {
    return categories.filter(category => category.id === productCategoryId)[0].name;
}