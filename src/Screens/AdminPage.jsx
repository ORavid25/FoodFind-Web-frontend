import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Logo from "../assats/foodfind.png";
import { Link } from "react-router-dom";
import { FaUserCheck, FaUsers, FaFileExport } from "react-icons/fa";
import { GetAllBusinessUsers } from "../api/BusinessUserController";
import { GetAllClientUsers } from "../api/ClientUserController";
import BusinessUserList from "../Components/adminComponents/BusinessUserList";
import ClientUserList from "../Components/adminComponents/ClientUserList";

const AdminPage = () => {
  const [businessUsers, setBusinessUsers] = useState([]);
  const [clientUsers, setClientUsers] = useState([]);

  const fetchAllBusinessUsers = async () => {
    const res = await GetAllBusinessUsers();
    setBusinessUsers(res);
  };
  const fetchAllClientUsers = async () => {
    const res = await GetAllClientUsers();
    setClientUsers(res);
    console.log("client users :", res);
  };

  useEffect(() => {
    fetchAllBusinessUsers();
    fetchAllClientUsers();
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

      <div className="bg-gray-300 flex flex-col w-full h-full items-center rounded-lg p-2">
        <div className="bg-gray-400 flex w-full  items-center justify-end p-8 rounded-lg">
          <h1 className="text-3xl leading-6">מסך ראשי</h1>
        </div>
      </div>

      <div>
        <div className="bg-gray-300 flex flex-col w-full h-full items-center rounded-lg p-2">
          <div className="bg-gray-400 flex w-full  items-center justify-end p-8 rounded-lg">
            <h1 className="text-3xl leading-6">רשימת משתמשים</h1>
          </div>
          <BusinessUserList businessUsersList={businessUsers} />
          <ClientUserList clientUsers={clientUsers} />
        </div>
      </div>
      <div className="bg-gray-300 flex flex-col w-full h-full items-center rounded-lg p-2">
      <div className="bg-gray-400 flex w-full  items-center justify-end p-8 rounded-lg">
        <h1 className="text-3xl leading-6">אישור בעל עסק</h1>
      </div>
      </div>
      <div className="bg-gray-300 flex flex-col w-full h-full items-center rounded-lg p-2">
      <div className="bg-gray-400 flex w-full  items-center justify-end p-8 rounded-lg">
        <h1 className="text-3xl leading-6">הפקת דוחות</h1>
      </div>
      </div>

     
          <div className="bg-red-200 flex h-52">
            <footer>

            </footer>
          </div>
      

    </div>
  );
};

export default AdminPage;
