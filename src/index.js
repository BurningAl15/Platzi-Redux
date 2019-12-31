import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/spinner.css";

import App from "./components/App.js";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers/index";

const store = createStore(
  //Without reducers the app will break
  reducers, //All the reducers
  {}, //Initial state
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
