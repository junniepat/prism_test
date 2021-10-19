import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { breedReducer } from "./reducers/dogBreedReducer";


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const allReducers = combineReducers({ breedReducer });

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(allReducers, composedEnhancer);
export default store;