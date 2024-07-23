import { createAction, handleActions } from "redux-actions";

const initialState = [];

export const SET_CURRENT_SORTED_TWO = "SET_CURRENT_SORTED_TWO";
export const setCurrentSortedTwo = createAction(SET_CURRENT_SORTED_TWO);

export const currentSortedTwo = handleActions({
  SET_CURRENT_SORTED_TWO: (state, { payload }) => {
    if (payload.length) {
      return state.concat(payload);
    } else {
      return [];
    }
  },
}, initialState);
