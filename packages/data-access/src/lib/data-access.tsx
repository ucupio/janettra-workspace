import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import RootReducer from './reducers';

import RootSaga from './sagas/RootSagas';

import actions from './actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export { store, RootSaga, RootReducer, actions };
