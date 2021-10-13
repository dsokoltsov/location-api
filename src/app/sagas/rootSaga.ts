import { all } from 'redux-saga/effects';
import { countrySaga } from './countrySaga';
import { stateSaga } from './stateSaga';
import { citySaga } from './citySaga';

export default function* rootSaga() {
  yield all([
    ...countrySaga,
    ...stateSaga,
    ...citySaga,
  ]);
}