import { all } from 'redux-saga/effects';
import { watchProductsAsync } from './productSaga';

export function* rootSaga() {
  yield all([watchProductsAsync()]);
}
