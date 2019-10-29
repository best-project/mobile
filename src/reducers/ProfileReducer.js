import { USER_INIT_COURSE, USER_SET_BEST_RESULT } from "../actions/types";

const initialState = {
  id: "YbSwWMX73DMY7RdDSKev",
  nickname: "Nickname",
  avatar: "https://form-physic.com/wp-content/uploads/2019/03/avatar-1.jpg",
  token: "example",
  level: 1,
  points: 0,
  profileCourses: [
    {
      id: "kq8d2GyQZRci0qCzNI4s",
      points: 0,
      passed: false
    },
    {
      id: "TmiZYk3sDmzBV56MwQQO",
      points: 0,
      passed: false
    },
    {
      id: "cDV6KacZOz4DeMQ8sn0j",
      points: 0,
      passed: false
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_INIT_COURSE:
      return {
        ...state,
        profileCourses: [...state.profileCourses, action.payload]
      };
    case USER_SET_BEST_RESULT:
      const { id, points } = action.payload;
      const profileCourses = [...state.profileCourses];
      const courseIndex = profileCourses.findIndex(item => item.id === id);
      const course = profileCourses.find(item => item.id === id);
      if (courseIndex !== -1 && course.points < points) {
        let newProfileCourses = profileCourses.slice(
          courseIndex + 1,
          profileCourses.length
        );
        course.points = points;
        newProfileCourses = [...newProfileCourses, course];
        return {
          ...state,
          profileCourses: [...state.profileCourses, newProfileCourses]
        };
      }
      return state;
    default:
      return state;
  }
}
