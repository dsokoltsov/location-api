import actionTypes from './actionTypes';
import { SelectorData } from "../globals";

function inferLiteralFromString<T extends string>(arg: T): T {
  return arg;
}

export const fetchCountriesAction = () => ({
  type: inferLiteralFromString( actionTypes.FETCH_COUNTRIES )
});

export const fetchStatesAction = (data: string) => ({
  type: inferLiteralFromString( actionTypes.FETCH_STATES ),
  data,
});

export const fetchCitiesAction = (data: string) => ({
  type: inferLiteralFromString( actionTypes.FETCH_CITIES ),
  data,
});

export const requestCountriesData = () => ({
  type: inferLiteralFromString( actionTypes.REQUESTED_COUNTRY_DATA )
});

export const requestCountriesDataSuccess = (data: SelectorData[]) => ({
  type: inferLiteralFromString( actionTypes.REQUESTED_COUNTRY_DATA_SUCCEEDED ),
  data,
});

export const requestCountriesDataError = () => ({
  type: inferLiteralFromString( actionTypes.REQUESTED_COUNTRY_DATA_FAILED )
});

export const setSelectedCountryAction = (data: SelectorData | null) => ({
  type: inferLiteralFromString( actionTypes.SET_SELECTED_COUNTRY ),
  data,
});

export const requestStatesData = () => ({
  type: inferLiteralFromString( actionTypes.REQUESTED_STATE_DATA )
});

export const requestStatesDataSuccess = (data: SelectorData[]) => ({
  type: inferLiteralFromString( actionTypes.REQUESTED_STATE_DATA_SUCCEEDED ),
  data,
});

export const requestStatesDataError = () => ({
  type: inferLiteralFromString( actionTypes.REQUESTED_STATE_DATA_FAILED )
});

export const setSelectedStateAction = (data: SelectorData | null) => ({
  type: inferLiteralFromString( actionTypes.SET_SELECTED_STATE ),
  data,
});

export const requestCitiesData = () => ({
  type: inferLiteralFromString( actionTypes.REQUESTED_CITY_DATA )
});

export const requestCitiesDataSuccess = (data: SelectorData[]) => ({
  type: inferLiteralFromString( actionTypes.REQUESTED_CITY_DATA_SUCCEEDED ),
  data,
});

export const requestCitiesDataError = () => ({
  type: inferLiteralFromString( actionTypes.REQUESTED_CITY_DATA_FAILED )
});

export const setSelectedCityAction = (data: SelectorData | null) => ({
  type: inferLiteralFromString( actionTypes.SET_SELECTED_CITY ),
  data,
});

// export type ActionTypes =
//   ReturnType<typeof fetchCountriesAction>
//   | ReturnType<typeof requestCountriesData>
//   | ReturnType<typeof requestCountriesDataSuccess>
//   | ReturnType<typeof requestCountriesDataError>
//   | ReturnType<typeof setSelectedCountryAction>
//   | ReturnType<typeof fetchStatesAction>
//   | ReturnType<typeof requestStatesData>
//   | ReturnType<typeof requestStatesDataSuccess>
//   | ReturnType<typeof requestStatesDataError>
//   | ReturnType<typeof setSelectedStateAction>
//   | ReturnType<typeof fetchCitiesAction>
//   | ReturnType<typeof requestCitiesData>
//   | ReturnType<typeof requestCitiesDataSuccess>
//   | ReturnType<typeof requestCitiesDataError>
//   | ReturnType<typeof setSelectedCityAction>