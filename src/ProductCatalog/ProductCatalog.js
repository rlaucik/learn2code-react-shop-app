import React from 'react';
import { products, categories } from './shopData';
import { ProductItem } from './ProductItem';

export function ProductCatalog() {
  return (
    <>
      <h1>My shop</h1>
      <select>
        { categories.map(category => <option>{category.name}</option>) }
      </select>
      <div>
        { products.map(product => <ProductItem product={product} categories={categories} />) }
      </div>
    </>
  );
}
