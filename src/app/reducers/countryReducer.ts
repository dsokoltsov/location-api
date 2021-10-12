// import { AnyAction } from 'redux'
import actionTypes from '../actionTypes';
import { ActionTypes } from '../actions';
import { SelectorData } from '../../globals';

export interface CountryState {
  countries: SelectorData[],
  selected: SelectorData | null,
  isLoading: boolean,
  isError: boolean,
}

const initialState: CountryState = {
  countries: [{}],
  selected: null,
  isLoading: false,
  isError: false,
};

export default function countryReducer(state: CountryState = initialState, action: ActionTypes) {
  switch (action.type) {
    case actionTypes.REQUESTED_COUNTRY_DATA:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case actionTypes.REQUESTED_COUNTRY_DATA_SUCCEEDED:
      return {
        ...state,
        countries: action.data,
        isError: false,
        isLoading: false,
      };
    case actionTypes.REQUESTED_COUNTRY_DATA_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case actionTypes.SET_SELECTED_COUNTRY:
      return {
        ...state,
        selected: action.data,
      };
    default:
      return state;
  }
}