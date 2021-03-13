import { combineReducers } from "redux";

const INITIAL_STATE = {
  access_token: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_ACCESS_TOKEN":
      state = { 
        ...state, 
        access_token: action.access_token 
      };
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  authReducer: authReducer,
});
