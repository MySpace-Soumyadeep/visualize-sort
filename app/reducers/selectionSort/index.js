import { createAction, handleActions } from "redux-actions";

const initialStateOne = [];
const initialStateTwo = null;

export const SET_CURRENT_SELECTION_TWO = "SET_CURRENT_SELECTION_TWO";
export const setCurrentSelectionTwo = createAction(SET_CURRENT_SELECTION_TWO);
export const SET_MIN = "SET_MIN";
export const setPivot = createAction(SET_MIN);

export const currentSelectionTwo = handleActions({
  SET_CURRENT_SELECTION_TWO: (state, { payload }) => {
    return payload;
  },
}, initialStateOne);
// export const pivot = handleActions({
//   SET_PIVOT: (state, { payload }) => {
//     return payload;
//   },
// }, initialStateTwo);
