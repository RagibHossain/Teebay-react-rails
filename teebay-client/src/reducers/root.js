import { combineReducers } from "redux";
import productReducer from "./product"
import userReducer from "./userAuthentication";

export default combineReducers({product : productReducer,user : userReducer})
// export default rootReducer;