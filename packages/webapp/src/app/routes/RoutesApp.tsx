import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import DefaultLayout from '../pages/layout/default';
import EmptyLayout from '../pages/layout/empty';
import Products from '../pages/Products';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import UserPage from '../pages/users';

interface RoutesAppProps {
  role: string;
}

export default function RoutesApp({ role }: RoutesAppProps) {
  return role === 'admin' ? (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </DefaultLayout>
  ) : (
    <EmptyLayout>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </EmptyLayout>
  );
}
