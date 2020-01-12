import { products } from "../shopData";

export const calculateTotal = (basket) =>
    Object.keys(basket).reduce(
        (total, productName) => {
            const amount = basket[productName];
            const price = getProductPrice(productName);
            return total + (price * amount)
        }, 0
    );

export const getProductPrice = (productName) =>
    products.find(product => product.name === productName).price;
