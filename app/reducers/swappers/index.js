import { createAction, handleActions } from "redux-actions";

const initialState = [];

export const SET_CURRENT_SWAPPERS = "SET_CURRENT_SWAPPERS";
export const setCurrentSwappers = createAction(SET_CURRENT_SWAPPERS);

export const SET_CURRENT_CHECK_TWO = "SET_CURRENT_CHECK_TWO";
export const setCurrentCheckTwo = createAction(SET_CURRENT_CHECK_TWO);


export const currentSwappers = handleActions({
  SET_CURRENT_SWAPPERS: (state, { payload }) => {
    if (payload.length) {
      return state.concat(payload);
    } else {
      return [];
    }
  },
}, initialState);



export const currentChecker = handleActions({
  SET_CURRENT_CHECK_TWO: (state, { payload }) => {
    if (payload.length) {
      return state.concat(payload);
    } else {
      return [];
    }
  },
}, initialState);
