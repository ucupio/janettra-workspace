import { loginUserAPI } from '../apis/authApi';
import { setAuthSlice, setUserSlice, setTokenSlice } from '../slice/auth';
import { put, takeEvery } from 'redux-saga/effects';
import { User } from '@janettra-workspace/shared-types';

import { LOGIN_USER, LOGIN_FACEBOOK, LOGIN_GOOGLE } from './types';
import { Action } from '@redux-saga/types';

interface UserAction extends Action, User {
  type: string;
  token: string;
  auth: boolean;
}

export function* loginUserSaga(action: UserAction) {
  yield loginUserAPI(action.user_name, action.password);
  yield put(setUserSlice(action['id']));
  yield put(setTokenSlice(action['token']));
  yield put(setAuthSlice(true));
}
export function* loginGoogleSaga(action: UserAction) {
  yield loginUserAPI(action.user_name, action.password);
  yield put(setUserSlice(action['id']));
  yield put(setTokenSlice(action['token']));
  yield put(setAuthSlice(true));
}
export function* loginFacebookSaga(action: UserAction) {
  yield loginUserAPI(action.user_name, action.password);
  yield put(setUserSlice(action['id']));
  yield put(setTokenSlice(action['token']));
  yield put(setAuthSlice(true));
}

export function* watchAuthAsync() {
  yield takeEvery<UserAction>(LOGIN_USER, loginUserSaga);
  yield takeEvery<UserAction>(LOGIN_FACEBOOK, loginFacebookSaga);
  yield takeEvery<UserAction>(LOGIN_GOOGLE, loginGoogleSaga);
}
