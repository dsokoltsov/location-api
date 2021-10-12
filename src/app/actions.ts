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

export const setSelectedCountryAction = (data: SelectorData) => ({
  type: inferLiteralFromString( actionTypes.SET_SELECTED_COUNTRY ),
  data,
});


export type ActionTypes =
  ReturnType<typeof fetchCountriesAction>
  | ReturnType<typeof requestCountriesData>
  | ReturnType<typeof requestCountriesDataSuccess>
  | ReturnType<typeof requestCountriesDataError>
  | ReturnType<typeof setSelectedCountryAction>