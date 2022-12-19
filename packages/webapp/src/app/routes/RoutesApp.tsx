import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';
import UserPage from '../pages/users';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/users" element={<UserPage />} />
    </Routes>
  );
}
