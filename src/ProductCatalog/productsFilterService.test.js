import { isProductInCategory } from './productsFilterService';

describe('productsFilterService', () => {
    describe('isProductInCategory()', () => {
        it('returns true if product is in category', () => {
            const product = { categoryId: '5' };

            const isInCategory = isProductInCategory(product, "5");

            expect(isInCategory).toBe(true);
        })
        it('returns true if product is not in category but searched category is "0"', () => {
            const product = { categoryId: '5' };

            const isInCategory = isProductInCategory(product, "0");

            expect(isInCategory).toBe(true);
        })
    })
});