import {
  getUsersAPI,
  getUserByIdAPI,
  createUserAPI,
  updateUserAPI,
  deleteUserByIdAPI,
} from '../apis/userApi';
import { setUserSlice } from '../slice/user';
import {
  addUserSlice,
  deleteUserSlice,
  editUserSlice,
  getUsersSlice,
} from '../slice/users';
import { put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { User } from '@janettra-workspace/shared-types';

import {
  CREATE_USER,
  DELETE_USER_BY_ID,
  GET_USERS,
  GET_USER_BY_ID,
  UPDATE_USER_BY_ID,
} from './types';
import { Action } from '@redux-saga/types';

interface UserAction extends Action, User {
  type: 'TASK_ADD';
}

export function* getUsersSaga() {
  const users: AxiosResponse = yield getUsersAPI();
  yield put(getUsersSlice(users.data));
}

export function* getUserByIdSaga(action: UserAction) {
  yield getUserByIdAPI(action['id']);
  yield put(setUserSlice(action['id']));
}
export function* createUserSaga(action: User) {
  yield createUserAPI(action);
  yield put(addUserSlice(action));
}

export function* updateUserSaga(action: User) {
  yield updateUserAPI(action);
  yield put(editUserSlice(action));
}

export function* deleteUserByIdSaga(action: UserAction) {
  yield deleteUserByIdAPI(action['id']);
  yield put(deleteUserSlice(action['id']));
}

export function* watchUsersAsync() {
  yield takeEvery<UserAction>(GET_USERS, getUsersSaga);
  yield takeEvery<UserAction>(GET_USER_BY_ID, getUserByIdSaga);
  yield takeEvery<UserAction>(CREATE_USER, createUserSaga);
  yield takeEvery<UserAction>(UPDATE_USER_BY_ID, updateUserSaga);
  yield takeEvery<UserAction>(DELETE_USER_BY_ID, deleteUserByIdSaga);
}
