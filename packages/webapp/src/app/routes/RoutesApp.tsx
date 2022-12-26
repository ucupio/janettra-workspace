import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import DefaultLayout from '../pages/layout/default';
import EmptyLayout from '../pages/layout/empty';
import Products from '../pages/products/Products';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import UserPage from '../pages/users';
import GuardedRoute from './GuardedRoute';

interface RoutesAppProps {
  auth: boolean;
}

export default function RoutesApp({ auth }: RoutesAppProps) {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route
            path="/"
            element={
              <GuardedRoute auth={auth} redirectPath={'/login'}>
                <Dashboard />
              </GuardedRoute>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<UserPage />} />
        </Routes>
      </DefaultLayout>
      <EmptyLayout>
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </EmptyLayout>
    </>
  );
}
