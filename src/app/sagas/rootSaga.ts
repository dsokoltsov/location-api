import { all } from 'redux-saga/effects';
import { userSaga } from './countrySaga';

export default function* rootSaga() {
  yield all([...userSaga]);
}