import React from 'react';
import { HelloWorldSetState } from './HelloWorldSetState';
import { ProductCatalog } from './ProductCatalog/ProductCatalog';
import { ProductCatalogFiltering } from './ProductCatalog/ProductCatalogFiltering';
import { StateCounter } from './StateCounter';
import { RandomName } from './RandomName';
import { StateCounterConditional } from './StateCounterConditional';

export function App() {
  return <ProductCatalogFiltering />
  return <ProductCatalog />
  return <RandomName />
  return <HelloWorldSetState />
  return <StateCounter />
  return <StateCounterConditional />
}
