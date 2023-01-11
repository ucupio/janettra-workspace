import { all } from 'redux-saga/effects';
import { watchAuthAsync } from './authSaga';
import { watchProductsAsync } from './productSaga';
import { watchUsersAsync } from './userSaga';

export function* rootSaga() {
  yield all([watchProductsAsync(), watchUsersAsync(), watchAuthAsync()]);
}
