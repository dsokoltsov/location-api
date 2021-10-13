import actionTypes from '../actionTypes';
import ActionTypes from '../unionActionTypes';
import { SelectorData } from '../../globals';

export interface CityState {
  cities: SelectorData[],
  selected: SelectorData | null,
  isLoading: boolean,
  isError: boolean,
}

const initialState: CityState = {
  cities: [{}],
  selected: null,
  isLoading: false,
  isError: false,
};

export default function cityReducer(state: CityState = initialState, action: ActionTypes) {
  switch (action.type) {
    case actionTypes.REQUESTED_CITY_DATA:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case actionTypes.REQUESTED_CITY_DATA_SUCCEEDED:
      return {
        ...state,
        cities: action.data,
        isError: false,
        isLoading: false,
      };
    case actionTypes.REQUESTED_CITY_DATA_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case actionTypes.SET_SELECTED_CITY:
      return {
        ...state,
        selected: action.data,
      };
    default:
      return state;
  }
}