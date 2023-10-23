import {todoReducer} from "./todos"

import { combineReducers } from "redux";
const rootReducer = combineReducers({
    todoReducer,
    
});
export default rootReducer;
