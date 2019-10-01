import {
  FETCH_COURSE,
  SAVE_COURSE
} from '../actions/types';

const initialState = {
  id: 1,
  nickname: 'Pavel',
  avatar: 'https://form-physic.com/wp-content/uploads/2019/03/avatar-1.jpg',
  token: 'example',
  login: 'example',
  password: 'example',
  myCoursesList: [
    
  ]
}

export default function (state = initialState, action) {
  switch(action.type) {
    default: 
      return state;
  }
}