import { combineReducers } from "redux";
import bucketReducer from "./bucketReducer";
import sortsReduce from "./sortsReducer";
import filtersReduce from "./filtersReduce";

const reducers = combineReducers({
  bucket: bucketReducer,
  sorts: sortsReduce,
  filters: filtersReduce,
});

export default reducers;
