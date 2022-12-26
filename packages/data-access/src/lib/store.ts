import { configureStore } from '@reduxjs/toolkit';
import product from './slice/product';
import products from './slice/products';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas';
import user from './slice/user';
import users from './slice/users';
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    product,
    products,
    user,
    users,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
