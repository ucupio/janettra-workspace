import { getUsers, updateUser, deleteUser, createUser } from '../api';
import { put, takeEvery } from 'redux-saga/effects';
import { User } from '@janettra-workspace/shared-types';

export function* getUsersAction() {
  const users: User[] = yield getUsers();
  yield put({ type: 'USERS_FETCH_SUCCEEDED', payload: users });
}

export function* createUserAction({
  payload,
}: {
  type: 'CREATE_USER_REQUESTED';
  payload: string;
}) {
  yield createUser(payload);
  yield put({ type: 'USERS_FETCH_REQUESTED' });
}

export function* updateUserAction({
  payload,
}: {
  type: 'UPDATE_USER_REQUESTED';
  payload: User;
}) {
  yield updateUser(payload);
  yield put({ type: 'USERS_FETCH_REQUESTED' });
}

export function* deleteUserAction({
  payload,
}: {
  type: 'DELETE_USER_REQUESTED';
  payload: User;
}) {
  yield deleteUser(payload);
  yield put({ type: 'USERS_FETCH_REQUESTED' });
}

export function* rootSaga() {
  yield takeEvery('USERS_FETCH_REQUESTED', getUsersAction);
  yield takeEvery('UPDATE_USER_REQUESTED', updateUserAction);
  yield takeEvery('DELETE_USER_REQUESTED', deleteUserAction);
  yield takeEvery('CREATE_USER_REQUESTED', createUserAction);
}
