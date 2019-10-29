import { SET_SOUND } from "./types";

export const setSound = value => dispatch => {
  dispatch({
    type: SET_SOUND,
    payload: value
  });
};
