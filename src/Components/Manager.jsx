import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import BusinessMenu from "../Screens/BusinessMenu";
import BusinessPage from "../Screens/BusinessPage";
import BusinessReport from "../Screens/BusinessReport";
import AdminPage from "../Screens/AdminPage";


const Manager = () => {
  return (
    <Switch>
      {/* If the current URL is /about, this route is rendered
          while the rest are ignored */}
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
        {/* <AdminPage /> */}
      </Route>
      <Route path="/businessMenu">
        <BusinessMenu />
      </Route>
      <Route path="/businessPage">
        <BusinessPage />
      </Route>
      <Route path="/businessReport">
        <BusinessReport />
      </Route>
      <Route path="/AdminPage">
        <AdminPage />
      </Route>
    
    </Switch>
  );
};

export default withRouter(Manager);
