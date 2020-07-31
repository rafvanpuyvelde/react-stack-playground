import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./containers/app/App";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  );
};

export default Routes;
