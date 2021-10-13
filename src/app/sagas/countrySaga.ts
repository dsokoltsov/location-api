import {
  call, put, fork, takeEvery,
} from 'redux-saga/effects';
import {
  requestCountriesData,
  requestCountriesDataSuccess,
  requestCountriesDataError,
} from '../actions';
import { fetchCountriesData } from '../../utilities/api';
import { ResponseGenerator } from '../../globals';



function* fetchCountriesDataAsync() {
  try {
    yield put(requestCountriesData());
    const response: ResponseGenerator = yield call(fetchCountriesData);
    yield put(requestCountriesDataSuccess(response.data));
  } catch (error) {
    yield put(requestCountriesDataError());
  }
}

export default function* watchFetchCountriesData() {
  yield takeEvery('FETCH_COUNTRIES', fetchCountriesDataAsync);
}
export const countrySaga = [fork(watchFetchCountriesData)];
