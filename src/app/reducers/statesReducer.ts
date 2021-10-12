import { AnyAction } from 'redux'
import actionTypes from '../actionTypes';

interface StatesState {
  states: object[],
  isLoading: boolean,
  isError: boolean,
}

const initialState: StatesState = {
  states: [{}],
  isLoading: false,
  isError: false,
};

export default function userReducer(state = initialState, action: AnyAction) {
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
    default:
      return state;
  }
}