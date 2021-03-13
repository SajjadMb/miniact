import { combineReducers } from 'redux';

const INITIAL_STATE = {
  access_token: '',
  user : {}
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  authReducer : authReducer
})