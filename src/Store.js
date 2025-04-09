import  countReducer  from "./Reducer.js";
import { createStore , applyMiddleware } from "redux";
import { thunk } from "redux-thunk";


// const middleware={thunk}
const store=createStore( countReducer,applyMiddleware(thunk))
export default store;