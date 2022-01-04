import { combineReducers } from "redux";

import appReducer from "./app/appReducer";

const rootReducer = combineReducers({
  user: appReducer,
});

export default rootReducer;
