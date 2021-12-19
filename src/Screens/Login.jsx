import React, {  useContext, useEffect } from "react";
import { FoodFindContext } from "../context";
import LoginForm from "../Components/LoginForm";
import { useHistory } from "react-router-dom";




const Login = () => {
  const { user, setUser } = useContext(FoodFindContext);

  const history = useHistory();

  const checkIfLoggedIn = () => {
    let fromLocalStorage = window.localStorage.getItem("user")
    if(fromLocalStorage !== null && fromLocalStorage !== undefined) {
      history.push("/");
    }

  }
  
  
  useEffect(() => {
  checkIfLoggedIn();
  }, []);

  console.log(user);
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-400 py-12 px-4 sm:px-6 lg:px-8">
      
      <LoginForm/>

    </div>
  );
};

export default Login;
