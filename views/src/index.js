import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { groupManagement } from "./reducers";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const store = createStore(groupManagement);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
