export function productsFilterCombined(
    products,
    currentCategoryId,
    priceFrom,
    priceTo,
    searchQuery,
) {
    return products
        .filter(product => isProductInCategory(product, currentCategoryId))
        .filter(product => isProductWithinPriceRange(product, priceFrom, priceTo))
        .filter(product => isProductNameIncluding(product, searchQuery))
}

function isProductWithinPriceRange(
    product,
    priceFrom,
    priceTo,
) {
    if (isNaN(parseFloat(priceFrom)) || isNaN(parseFloat(priceTo))) {
        return true;
    }
    return product.price >= priceFrom && product.price <= priceTo;
}

export function isProductInCategory(product, categoryId) {
    if (categoryId === "0") {
        return true;
    }
    return product.categoryId === categoryId;
}

function isProductNameIncluding(product, searchQuery) {
    if (!searchQuery) {
        return true;
    }
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
}
