import {combineReducers} from 'redux';

import cats from './course.js'
import {user} from './user.js'

const rootReducer = combineReducers({
  cats,
  user
})

export default rootReducer;
