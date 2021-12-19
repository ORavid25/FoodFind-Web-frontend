import React,{useState,useEffect,useContext} from "react";
import { withRouter, Switch, Route,Redirect } from "react-router-dom";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import BusinessMenu from "../Screens/BusinessMenu";
import BusinessPage from "../Screens/BusinessPage";
import BusinessReport from "../Screens/BusinessReport";
import AdminPage from "../Screens/AdminPage";
import {retrieveLocalStorageData} from "../utility/localStorage";
import {FoodFindContext} from '../context'

const Manager = () => {
const {user} = useContext(FoodFindContext);
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
      {user?
      <Route path="/businessMenu">
        <BusinessMenu />
      </Route>
      :<Redirect to="/login" />}
      <Route path="/businessPage">
        <BusinessPage />
      </Route>
      <Route path="/businessReport">
        <BusinessReport />
      </Route>
      {user?.isAdmin?
      <Route path="/AdminPage">
        <AdminPage />
        </Route>
      : <Redirect to="/" />
    }
    </Switch>
  );
};

export default withRouter(Manager);