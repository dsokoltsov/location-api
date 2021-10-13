import ActionTypes from '../unionActionTypes';
import { SelectorData } from '../../globals';
import actionTypes from '../actionTypes';

interface StatesState {
  states: SelectorData[],
  selected: SelectorData | null,
  isLoading: boolean,
  isError: boolean,
}

const initialState: StatesState = {
  states: [{}],
  selected: null,
  isLoading: false,
  isError: false,
};

export default function userReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case actionTypes.REQUESTED_STATE_DATA:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case actionTypes.REQUESTED_STATE_DATA_SUCCEEDED:
      return {
        ...state,
        states: action.data,
        isError: false,
        isLoading: false,
      };
    case actionTypes.REQUESTED_STATE_DATA_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case actionTypes.SET_SELECTED_STATE:
        return {
          ...state,
          selected: action.data,
        };
    default:
      return state;
  }
}