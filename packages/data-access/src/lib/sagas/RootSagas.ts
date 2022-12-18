import { all } from 'redux-saga/effects';

import { userSaga } from './UserSagas';

export default function* RootSaga() {
  yield all([userSaga()]);
}
