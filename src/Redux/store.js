import { createStore, combineReducers, applyMiddleware } from "redux";
import { productReducer } from "./product/reducer";
import { loginReducer } from "./Login/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  login: loginReducer,
  product: productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
