import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";

import countryReducer from './reducers/countryReducer';
import statesReducer from './reducers/statesReducer';
import cityReducer from './reducers/cityReducer';

import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    country: countryReducer,
    state: statesReducer,
    city: cityReducer,
  },
  devTools: true,
  middleware: [sagaMiddleware, logger],
})

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;