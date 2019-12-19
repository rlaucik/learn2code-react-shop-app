import React from 'react';
import { HelloWorldSetState } from './HelloWorldSetState';
import { ProductCatalog } from './ProductCatalog/ProductCatalog';
import { StateCounter } from './StateCounter';
import { RandomName } from './RandomName';
import { StateCounterConditional } from './StateCounterConditional';
import { ShopApp } from './ProductCatalog/ShopApp';

export function App() {
  return <ShopApp />

  return <ProductCatalog />
  return <RandomName />
  return <HelloWorldSetState />
  return <StateCounter />
  return <StateCounterConditional />
}
