import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./authReducer";
import heroesReducer from './heroesReducer'

const reducers = combineReducers({
  auth: authReducer,
  heroes: heroesReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;