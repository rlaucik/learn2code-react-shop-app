import { products } from './shopData';

export const getProductDetailsById = (id) => {
    const product = products.find(product => String(product.id) === String(id));
    return {
        name: product.name,
        thumbnail: product.thumbnail,
        categoryId: product.categoryId,
        price: product.price,
    };
}

export const getCategoryNameById = (categories, productCategoryId) => {
    return categories.filter(category => category.id === productCategoryId)[0].name;
}