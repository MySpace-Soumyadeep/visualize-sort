import { createAction, handleActions } from "redux-actions";

const initialState = "";

const SET_ALGORITHM = "SET_ALGORITHM";
export const setAlgorithm = createAction(SET_ALGORITHM);

export const algorithm = handleActions({
  SET_ALGORITHM: (state, { payload }) => {
    console.log({payload});
    return payload;
  },
}, initialState);
