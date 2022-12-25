import {
  getProductsAPI,
  getProductByIdAPI,
  createProductAPI,
  updateProductAPI,
  deleteProductByIdAPI,
} from '../apis/productApi';
import { setProductSlice } from '../slice/product';
import {
  addProductSlice,
  deleteProductSlice,
  editProductSlice,
  getProductsSlice,
} from '../slice/products';
import { put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { Product } from '@janettra-workspace/shared-types';

import {
  CREATE_PRODUCT,
  DELETE_PRODUCT_BY_ID,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  UPDATE_PRODUCT_BY_ID,
} from './types';
import { Action } from '@redux-saga/types';

interface ProductAction extends Action, Product {
  type: 'TASK_ADD';
}

export function* getProductsSaga() {
  const products: AxiosResponse = yield getProductsAPI();
  yield put(getProductsSlice(products.data));
}

export function* getProductByIdSaga(action: ProductAction) {
  yield getProductByIdAPI(action['id']);
  yield put(setProductSlice(action['id']));
}
export function* createProductSaga(action: Product) {
  yield createProductAPI(action);
  yield put(addProductSlice(action));
}

export function* updateProductSaga(action: Product) {
  yield updateProductAPI(action);
  yield put(editProductSlice(action));
}

export function* deleteProductByIdSaga(action: ProductAction) {
  yield deleteProductByIdAPI(action['id']);
  yield put(deleteProductSlice(action['id']));
}

export function* watchProductsAsync() {
  yield takeEvery<ProductAction>(GET_PRODUCTS, getProductsSaga);
  yield takeEvery<ProductAction>(GET_PRODUCT_BY_ID, getProductByIdSaga);
  yield takeEvery<ProductAction>(CREATE_PRODUCT, createProductSaga);
  yield takeEvery<ProductAction>(UPDATE_PRODUCT_BY_ID, updateProductSaga);
  yield takeEvery<ProductAction>(DELETE_PRODUCT_BY_ID, deleteProductByIdSaga);
}
