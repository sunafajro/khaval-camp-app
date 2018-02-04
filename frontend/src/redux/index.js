import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import app from './reducers/app';
//import auth from './reducers/auth';
import registrations from './reducers/registrations';

export default combineReducers({
  routing: routerReducer,
  app,
  //auth,
  registrations,
})