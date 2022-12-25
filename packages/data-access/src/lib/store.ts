import { configureStore } from '@reduxjs/toolkit';
import product from './slice/product';
import products from './slice/products';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas';
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    product,
    products,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
