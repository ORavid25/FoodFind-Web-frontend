import React,{useState,useEffect} from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import BusinessMenu from "../Screens/BusinessMenu";
import BusinessPage from "../Screens/BusinessPage";
import BusinessReport from "../Screens/BusinessReport";
import AdminPage from "../Screens/AdminPage";
import {retrieveLocalStorageData} from "../utility/localStorage";


const Manager = () => {
const [checkIfAdmin,setCheckIfAdmin] = useState(false);

const ifAdminLogin= async () => {
  let res = await retrieveLocalStorageData("user");
  if(res&&res.isAdmin===2) {
  setCheckIfAdmin(true);
  }
}

useEffect(() => {
  ifAdminLogin();
}, []);

  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        {checkIfAdmin?
        <AdminPage/>
        :<Home />
      }
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