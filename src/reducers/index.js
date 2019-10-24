import { combineReducers } from "redux";
import ProfileReducer from "./ProfileReducer";
import CoursesReducer from "./CoursesReducer";

export default combineReducers({
  Profile: ProfileReducer,
  Courses: CoursesReducer
});
