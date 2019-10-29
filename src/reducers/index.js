import { combineReducers } from "redux";
import ProfileReducer from "./ProfileReducer";
import CoursesReducer from "./CoursesReducer";
import SettingsReducer from "./Settings.reducer";

export default combineReducers({
  Profile: ProfileReducer,
  Courses: CoursesReducer,
  Settings: SettingsReducer
});
