import { USER_INIT_COURSE, USER_SET_BEST_RESULT } from "./types";

export const userInitCourse = id => dispatch => {
  const newCourseItem = {
    id,
    points: 0,
    passed: false
  };
  dispatch({
    type: USER_INIT_COURSE,
    payload: newCourseItem
  });
};

export const userSetBestResult = (id, points) => dispatch => {
  const editedCourseItem = {
    id,
    points
  };

  dispatch({
    type: USER_SET_BEST_RESULT,
    payload: editedCourseItem
  });
};
