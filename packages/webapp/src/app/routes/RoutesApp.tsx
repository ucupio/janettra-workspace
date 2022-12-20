import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import DefaultLayout from '../pages/layout/default';
import Products from '../pages/Products';
import UserPage from '../pages/users';

export default function RoutesApp() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </DefaultLayout>
  );
}
