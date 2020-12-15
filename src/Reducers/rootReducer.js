import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  card: cardReducer,
  login: loginReducer,
});

export default rootReducer;
