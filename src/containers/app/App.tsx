import "./App.css";
import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Counter } from "../../components/counter/Counter";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div className="wrapper-app">
        <Counter />
      </div>
    </Router>
  );
};

export default App;
