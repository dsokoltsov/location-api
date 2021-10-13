import {
  call, put, fork, takeEvery,
} from 'redux-saga/effects';
import {
  requestCitiesData,
  requestCitiesDataSuccess,
  requestCitiesDataError,
  fetchCitiesAction,
} from '../actions';
import { fetchCitiesData } from '../../utilities/api';
import { ResponseGenerator } from '../../globals';



function* fetchCitiesDataAsync({ data }: ReturnType<typeof fetchCitiesAction>) {
  try {
    yield put(requestCitiesData());
    const response: ResponseGenerator = yield call(fetchCitiesData, data);
    yield put(requestCitiesDataSuccess(response.data));
  } catch (error) {
    yield put(requestCitiesDataError());
  }
}

export default function* watchFetchCitiesData() {
  yield takeEvery('FETCH_CITIES', fetchCitiesDataAsync);
}
export const citySaga = [fork(watchFetchCitiesData)];
