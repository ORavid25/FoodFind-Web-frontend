import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Logo from "../assats/foodfind.png";
import { Link } from "react-router-dom";
import { FaUserCheck, FaUsers, FaFileExport } from "react-icons/fa";
import { GetAllBusinessUsers } from "../api/BusinessUserController";
import BusinessUserList from "../Components/adminComponents/BusinessUserList";

const AdminPage = () => {
  const [businessUsers, setBusinessUsers] = useState([]);

  const fetchAllBusinessUsers = async () => {
    const res = await GetAllBusinessUsers();
    setBusinessUsers(res);
  };

  useEffect(() => {
    fetchAllBusinessUsers();
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-300 overflow-y-auto">
      {/* header */}
      <div className=" bg-blue-300 w-full h-24 flex justify-around items-center">
        <h1 className="ml-96 text-xl font-sans leading-6 font-bold">
          שלום דוד
        </h1>
        <img src={Logo} alt="Logo" className=" w-52 mr-5 h-20" />
      </div>

      <div className="bg-green-500">
        <ul className="flex flex-row-reverse items-center text-2xl p-5 font-bold justify-evenly">
          <Link className="hover:bg-red-400 p-2 rounded">
            <li>דף הבית</li>
          </Link>
          <Link className="hover:bg-red-400  p-2 rounded">
            <li>טיפול במשתמשים</li>
          </Link>
          <Link className="hover:bg-red-400  p-2 rounded">
            <li>אישור בעלי עסק</li>
          </Link>
          <Link className="hover:bg-red-400  p-2 rounded">
            <li>הפקת דוחות</li>
          </Link>
        </ul>
      </div>

      {/* <div className="w-full bg-green-500 h-24 flex justify-evenly items-center flex-row ">
        <Link
          to="/"
          className="flex justify-center flex-col items-center w-36 h-24 text-black  opacity-80 rounded-xl hover:bg-white hover:opacity-100 hover:text-green-500 transform hover:-translate-y-3 duration-300"
        >
          <div className="flex justify-center items-center  leading-6 font-sans rounded-md">
       
          </div>
          <h1 className="text-white text-xl font-bold font-sans">הפקת דוחות</h1>
        </Link>
        <Link
          to="/"
          className="flex justify-center flex-col items-center w-36 h-24 text-black  opacity-80 rounded-xl hover:bg-white hover:opacity-100 hover:text-green-500 transform hover:-translate-y-3 duration-300"
        >
          <div className="flex justify-center flex-col items-center text-xl leading-6 font-sans font-bold rounded-md">
      
            <h1 className="text-white font-sans">בעלי עסק</h1>
          </div>
        </Link>
        <Link
          to="/"
          className="flex justify-center flex-col items-center w-36 h-24 text-black  opacity-80 rounded-xl hover:bg-white hover:opacity-100 hover:text-green-500 transform hover:-translate-y-3 duration-300"
        >
          <a href="//#">
        
            <div className="flex justify-center items-center text-xl leading-6 font-sans font-bold text-white rounded-md">
              <h1 className="font-sans ">משתמשים</h1>
            </div>
          </a>
        </Link>
        <Link
          to="/"
          className="flex justify-center flex-col items-center w-24 h-24 text-black  opacity-80 rounded-xl hover:bg-white hover:opacity-100 hover:text-green-500 transform hover:-translate-y-3 duration-300"
        >
          <a href="//#">
            <div className="flex justify-center flex-col items-center text-xl leading-6 font-sans rounded-md">
              <h1 className="font-bold text-white ">דף הבית</h1>
            </div>
          </a>
        </Link>
      </div> */}
      <div className=" flex flex-col h-full items-center rounded-lg p-2">
          
        <div className="container bg-gray-200 w-11/12 h-5/6 flex flex-col items-center rounded-lg m-3">
            {/* כותרת */}
          <div className="w-full p-5 flex items-center justify-end text-2xl rounded-t-lg bg-green-400">
            <h1>משתמשים בעלי עסק</h1>
          </div>
          <div className="flex w-full flex-col items-center p-3">
              <div className="flex flex-row-reverse w-full text-xl p-3 justify-around ml-2">
                  <h1>קוד משתמש</h1>
                  <h1>שם משתמש</h1>
                  <h1>איימיל</h1>
                  <h1>תאריך יצירה</h1>
              </div>
              
          {businessUsers.map((user)=>{
                return(
                    <div className="bg-gray-50 w-full flex justify-around my-2 flex-row-reverse p-5 text-lg leading-6 rounded-lg ring-4 ring-green-500 hover:bg-pink-400">
                        <h1>{user.businessID}</h1>
                        <h1>{user.businessName}</h1>
                        <h1>{user.businessEmail}</h1>
                        <h1>{user.businessCreatedDate}</h1>
                    </div>
                )
            })}
          </div>
        </div>

        <div className="container bg-gray-200 w-full h-5/6 flex flex-col items-center rounded-lg m-3">
            {/* כותרת */}
          <div className="w-full p-5 flex items-center justify-end text-2xl rounded-t-lg bg-green-400">
            <h1>לקוחות רשומים</h1>
          </div>
          <div className="flex w-full flex-col items-center p-3">
              <div className="flex flex-row-reverse w-full text-xl p-3 justify-between ml-2">
                  <h1>קוד משתמש</h1>
                  <h1>שם משתמש</h1>
                  <h1>איימיל</h1>
                  <h1>תאריך יצירה</h1>
              </div>
              
          {businessUsers.map((user)=>{
                return(
                    <div className="bg-gray-50 w-full flex justify-between my-2 flex-row-reverse p-5 text-lg leading-6 rounded-lg ring-4 ring-green-500 hover:bg-pink-400">
                        <h1>{user.businessID}</h1>
                        <h1>{user.businessName}</h1>
                        <h1>{user.businessEmail}</h1>
                        <h1>{user.businessCreatedDate}</h1>
                    </div>
                )
            })}
          </div>
        </div>
       

      </div>
      <div className="bg-blue-300 my-10 mx-10 h-full rounded-lg p-5">

      </div>
    </div>
  );
};

export default AdminPage;
