import React from 'react';
import { HelloWorldSetState } from './HelloWorldSetState';
import { ProductCatalog } from './ProductCatalog/ProductCatalog';
import { ProductCatalogFiltering } from './ProductCatalog/ProductCatalogFiltering';
import { StateCounter } from './StateCounter';
import { RandomName } from './RandomName';

export function App() {
  return <ProductCatalogFiltering />
}

// export function App() {
//     return <ProductCatalog />
// }

// export function App() {
//   return <RandomName />
// }

// export function App() {
//     return <HelloWorldSetState />
// }

// export function App() {
//     return <StateCounter />
// }