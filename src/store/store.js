import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

/* state = {
  whatever: 0,
  something: {},
  users: [],
}; */

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
