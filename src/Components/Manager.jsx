import React from "react";

import { withRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import BusinessMenu from "../Screens/BusinessMenu";



const Manager = () => {
  return (
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
          while the rest are ignored */}
        <Route  path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/businessMenu">
          <BusinessMenu />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(Manager);
