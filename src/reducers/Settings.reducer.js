import { SET_SOUND } from "../actions/types";

const initialState = {
  isSoundEnabled: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SOUND:
      return {
        ...state,
        isSoundEnabled: action.payload
      };
    default:
      return state;
  }
}
