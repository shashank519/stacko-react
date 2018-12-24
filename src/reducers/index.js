import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import usersReducer from "./usersReducer";

const commonState = {
  defaultVal: false
};

const commonReducer = (state = commonState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const appRootReducer = combineReducers({
  commonReducer,
  questionsReducer,
  usersReducer
});

export default appRootReducer;
