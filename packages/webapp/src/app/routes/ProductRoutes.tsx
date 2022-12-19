import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Products from '../pages/Products';

export default function ProductRoutes(props: RouteProps) {
  return (
    <>
      <Route path="/products" element={<Products />} />
      <Route path="/products/detail" element={<Products />} />
    </>
  );
}
