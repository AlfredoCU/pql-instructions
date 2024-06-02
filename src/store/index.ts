import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore, applyMiddleware } from "redux";

import { rootReducer as reducers } from "./reducers";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
