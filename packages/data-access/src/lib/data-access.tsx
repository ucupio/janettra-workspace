import { User } from '@janettra-workspace/shared-types';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducers from './reducers';
export { rootSaga } from './actions/userAction';

export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

export const selectUsers = (state: User[]) => state;

export const fetchUsers = () => ({ type: 'USERS_FETCH_REQUESTED' });
export const toggleUser = (user: User) => ({
  type: 'UPDATE_USER_REQUESTED',
  payload: {
    ...user,
    password: !user.password,
  },
});
export const removeUser = (user: User) => ({
  type: 'DELETE_USER_REQUESTED',
  payload: user,
});
export const addUser = (text: string) => ({
  type: 'CREATE_USER_REQUESTED',
  payload: text,
});
