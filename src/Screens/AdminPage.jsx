import React, { useState, useEffect } from "react";
import Logo from "../assats/foodfind.png";
import { FcApprove, FcDisapprove } from "react-icons/fc";
import { GetAllBusinessUsers } from "../api/BusinessUserController";
import { GetAllClientUsers } from "../api/ClientUserController";
import BusinessUserList from "../Components/adminComponents/BusinessUserList";
import ClientUserList from "../Components/adminComponents/ClientUserList";
import Loader from "../Components/Loader";

const AdminPage = () => {
  const [businessUsers, setBusinessUsers] = useState([]);
  const [clientUsers, setClientUsers] = useState([]);
  const [unActiveBusiness, setUnActiveBusiness] = useState([]);
  const [activeBusiness, setActiveBusiness] = useState([]);

  const fetchAllBusinessUsers = async () => {
    const res = await GetAllBusinessUsers();
    await setBusinessUsers(res);
    let active = res.filter((user) => user.businessStatus === true);

    await setActiveBusiness(active);
    console.log(res);
  };
  const fetchAllClientUsers = async () => {
    const res = await GetAllClientUsers();
    await setClientUsers(res);
    console.log("client users :", res);
  };

  const filterUnActiveBusiness = async () => {
    let unActive = businessUsers.filter(
      (user) => user.businessStatus === false
    );

    await setUnActiveBusiness(unActive);
    console.log("unActiveBusiness", unActive);
  };

  /// will work on page load
  useEffect(() => {
    fetchAllBusinessUsers();
    fetchAllClientUsers();
  }, []);

  /// will work only if we have data in BusinessUsers
  useEffect(() => {
    filterUnActiveBusiness();
  }, [businessUsers]);

  return (
    <div className="w-screen h-screen bg-gray-300 overflow-y-auto">
      {/* header */}
      <div className=" bg-green-300 w-full h-20 flex justify-around items-center">
        <h1 className="ml-96 text-xl font-sans leading-6 font-bold">
          !שלום אדמין
        </h1>
        <img src={Logo} alt="Logo" className=" w-52 mr-5 h-20" />
      </div>

      <div className="bg-gray-300 flex flex-wrap w-full h-full items-center justify-center rounded-lg p-2">
        <div className="bg-green-700 w-full h-full my-5 flex flex-row-reverse p-5 ">
          <div className="bg-gray-300 flex flex-col max-w-5/6 w-3/6 p-3 h-full items-end rounded-lg text-3xl leading-6 ">
            <div className="bg-yellow-300 flex flex-col max-w-5/6 w-full p-3 h-5/12 items-end rounded-lg text-3xl leading-6 ">
              <h1 className=" mb-4 mt-2 mr-5">כמות משתמשים</h1>
              <div className="bg-white w-full h-16 flex items-center justify-around text-xl rounded-xl">
                <h1>{businessUsers.length} :בעלי עסק</h1>
                <h1>{clientUsers.length} :לקוחות אפליקציה</h1>
              </div>
            </div>

            <div className="bg-red-200 flex flex-col w-3/6 h-96 p-3 mx-3 mt-5 items-end rounded-lg text-3xl leading-6 ">
              <h1 className=" mb-4 mt-2 mr-5">עסקים מובילים</h1>
              <div className="bg-white w-full  flex items-center justify-around text-xl rounded-lg">
                <h1>{businessUsers.length} :בעלי עסק</h1>
                <h1>{clientUsers.length} :לקוחות אפליקציה</h1>
              </div>
            </div>
          </div>

          <div className="bg-gray-300 flex flex-col w-3/6 h-96 p-3 mx-3 items-end rounded-lg text-3xl leading-6 ">
            <h1 className=" mb-4 mt-2 mr-5">עסקים מובילים</h1>
            <div className="bg-white w-full  flex items-center justify-around text-xl rounded-xl">
              <h1>{businessUsers.length} :בעלי עסק</h1>
              <h1>{clientUsers.length} :לקוחות אפליקציה</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gray-300 flex flex-col w-full h-full items-center rounded-lg p-2">
          <div className="bg-gray-400 flex w-full  items-center justify-end p-7 rounded-lg">
            <h1 className="text-3xl leading-6">רשימת משתמשים</h1>
          </div>
          <BusinessUserList businessUsersList={activeBusiness} />
          <ClientUserList clientUsers={clientUsers} />
        </div>
      </div>
      <div className="bg-gray-300 flex flex-col w-full h-full items-center rounded-lg p-2">
        <div className="bg-gray-400 flex w-full  items-center justify-end p-7 rounded-lg">
          <h1 className="text-3xl leading-6">אישור בעל עסק</h1>
        </div>
        <div className="bg-gray-300 w-full h-full">
          <div className="bg-gray-200 max-h-full h-full p-5 m-5 flex flex-col  rounded-lg">
            <div className="bg-green-400 flex justify-end items-center p-7 rounded-lg mb-2">
              <h1 className="text-2xl leading-6 ">בעלי העסק לא פעילים</h1>
            </div>
            {unActiveBusiness === null ? (
              <Loader />
            ) : (
              unActiveBusiness.map((user) => {
                return (
                  <div className="bg-gray-50 w-full flex justify-between items-center my-2 flex-row-reverse p-5 text-lg leading-6 rounded-lg overflow-auto ring-4 ring-green-500 hover:bg-green-300">
                    <h1>{user.businessID}</h1>
                    <h1>{user.businessName}</h1>
                    <h1>{user.businessEmail}</h1>
                    <h1>{user.businessCreatedDate}</h1>
                    <div className="flex flex-row ">
                      <FcApprove
                        className="mx-5 cursor-pointer"
                        size={50}
                        onClick={() => {
                          alert("Approve");
                        }}
                      />
                      <FcDisapprove
                        className="mx-5 cursor-pointer"
                        size={50}
                        onClick={() => alert("DisApprove")}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-300 flex flex-col w-full h-full items-center rounded-lg p-2">
        <div className="bg-gray-400 flex w-full my-7  items-center justify-end p-8 rounded-lg">
          <h1 className="text-3xl leading-6">הפקת דוחות</h1>
        </div>
      </div>

      <div className="bg-red-200 flex h-52">
        <footer></footer>
      </div>
    </div>
  );
};

export default AdminPage;
