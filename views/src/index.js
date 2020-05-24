import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { groupManagement } from "./services/reducers";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const logger = createLogger();
const store = createStore(
  groupManagement,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
