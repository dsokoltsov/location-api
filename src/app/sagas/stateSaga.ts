import {
  call, put, fork, takeEvery,
} from 'redux-saga/effects';
import {
  requestStatesData,
  requestStatesDataSuccess,
  requestStatesDataError,
  fetchStatesAction,
} from '../actions';
import { fetchStatesData } from '../../utilities/api';
import { ResponseGenerator } from '../../globals';



function* fetchStatesDataAsync({ data }: ReturnType<typeof fetchStatesAction>) {
  try {
    yield put(requestStatesData());
    const response: ResponseGenerator = yield call(fetchStatesData, data);
    yield put(requestStatesDataSuccess(response.data));
  } catch (error) {
    yield put(requestStatesDataError());
  }
}

export default function* watchFetchStatesData() {
  yield takeEvery('FETCH_STATES', fetchStatesDataAsync);
}
export const stateSaga = [fork(watchFetchStatesData)];
