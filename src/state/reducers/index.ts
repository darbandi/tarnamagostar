import { combineReducers } from "redux";
import bucketReducer from "./bucketReducer";

const reducers = combineReducers({
  bucket: bucketReducer,
});

export default reducers;
