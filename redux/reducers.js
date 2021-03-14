import { combineReducers } from "redux";

const INITIAL_STATE = {
  access_token: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_ACCESS_TOKEN":
      console.log("SAVE_ACCESS_TOKEN");
      console.log(action.access_token);
      return {  
        access_token: action.access_token 
      };
    default:
      return state;
  }
};

export default combineReducers({
  authReducer: authReducer,
});
