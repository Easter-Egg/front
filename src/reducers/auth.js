import { combineReducers } from 'redux';
import * as Auth from '../actions/auth.js';

const defaultState = {
  isAuthenticated: false,
  isLoading: false,
  currentUser: {},
  error: ''
}

const authReducer = ( state = defaultState, action ) => {
  switch(action.type) {
    case Auth.AUTH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    
    case Auth.AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        currentUser: {email: action.result.data.email}
      };

    case Auth.AUTH_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return { ...state };
  }
}

export default combineReducers({
  currentUser: authReducer,
  isAuthenticated: (state = {}) => state,
  isLoading: (state = {}) => state,
  error: (state = {}) => state
})