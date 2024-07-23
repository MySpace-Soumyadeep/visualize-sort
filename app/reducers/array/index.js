import { createAction, handleActions } from "redux-actions";

// const initialState = [];

// export const SET_ARRAY = "SET_ARRAY";

// Define action types
const SET_ARRAY = 'SET_ARRAY';

// Define action creators using createAction
export const setArray = createAction(SET_ARRAY);

// Intiial State
const initialState = {
  arraySize: 20
}
export const array = handleActions({
  SET_ARRAY: (state, { payload }) => {
    return payload;
  },
}, initialState);

// Define reducers using handleActions
// export const array = handleActions(
//   {
//       [SET_ARRAY]: (state, action) => ({ ...state, arraySize: action.payload}),
//   },
//   initialState
// );