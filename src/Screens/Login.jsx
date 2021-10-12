import React, { useState, useContext, useEffect } from "react";
import FoodFindLogo from "../assats/foodfind.png";
import { FoodFindContext } from "../context";
import LoginForm from "../Components/LoginForm";


const Login = () => {
  const { user, setUser } = useContext(FoodFindContext);
  const [businessUsers, setBusinessUsers] = useState("");
  const [error, setError] = useState("");


  // useEffect(() => {
  //   async () => {
  
  //   }
   
  // }, []);

  // useEffect(() => {
  //   //find id from db and push myID to user context
  //   (async () => {
  //     setBusinessUsers(data);
  //   })()
  // }, []);



  /////////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <div className="min-h-screen flex items-center justify-center bg-green-400 py-12 px-4 sm:px-6 lg:px-8">
      
      <LoginForm/>

      {/* {isLoading ? (
        <div className='spinner-border text-primary' role='status'>
          {' '}
          <span className='sr-only'>Loading...</span>{' '}
        </div>
      ) : (
				businessUsers.map(busi => {
							<p key={busi.businessID}>{busi.businessEmail}</p>
				})
      )} */}

    </div>
  );
};

export default Login;
