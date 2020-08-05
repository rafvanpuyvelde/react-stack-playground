import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import App from "../src/containers/app/App";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
