import { combineReducers } from "redux";

const INITIAL_STATE = {
  access_token: "",
  login: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_ACCESS_TOKEN":
      console.log("SAVE_ACCESS_TOKEN reducer : ", action);
      return {  
        ...state,
        access_token: action.access_token ,
        login : true
      };
    default:
      return state;
  }
};

export default combineReducers({
  authReducer: authReducer,
});
