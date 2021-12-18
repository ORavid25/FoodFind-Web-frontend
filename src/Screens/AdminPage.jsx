import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import Logo from "../assats/foodfind.png";
import { FcApprove, FcDisapprove } from "react-icons/fc";
import {
  GetAllBusinessUsers,
  UpdateBusinessToActive,
} from "../api/BusinessUserController";
import { reportByDate } from "../api/OrderController";

import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { GetAllClientUsers } from "../api/ClientUserController";
import { FoodFindContext } from "../context";
import BusinessUserList from "../Components/adminComponents/BusinessUserList";
import ClientUserList from "../Components/adminComponents/ClientUserList";
import PieChart from "../Components/PieChart";
import BarChart from "../Components/BarChart";
import Loader from "../Components/Loader";
import { useHistory } from "react-router-dom";
import {
  getAllOrdersByBusinessID,
  GetTop3BusinessOrders,
  GetTop5AppUserOrders,
} from "../api/OrderController";

const AdminPage = () => {
  const { user } = useContext(FoodFindContext);
  const [businessUsers, setBusinessUsers] = useState([]);
  const [clientUsers, setClientUsers] = useState([]);
  const [unActiveBusiness, setUnActiveBusiness] = useState([]);
  const [activeBusiness, setActiveBusiness] = useState([]);
  const [nameOfUsers, setNameOfUsers] = useState([]);
  const [userNumOfOrders, setUserNumOfOrders] = useState([]);
  const [namesOfBusiness, setNamesOfBusiness] = useState([]);
  const [numberOfOrders, setNumberOfOrders] = useState([]);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [inputBusinessID, setInputBusinessID] = useState("");
  const [dateResult, setDateResult] = useState([]);

  const history = useHistory();

  // retun the top 3 business of FoodFind
  const GetTop3 = async () => {
    let res = await GetTop3BusinessOrders();
    let names = [];
    let numOfOrders = [];
    // get business names and number of orders of top 3 highest orders amount
    if (res !== "Conflict") {
      res.map((name) => {
        names.push(name.businessName);
        numOfOrders.push(name.numOfOrders);
      });
    }
    setNamesOfBusiness(names);
    setNumberOfOrders(numOfOrders);
  };

  const GetTop5Users = async () => {
    let res = await GetTop5AppUserOrders();
    console.log("res=", res);
    let names = [];
    let numOfOrders = [];
    // get business names and number of orders of top 5 highest orders amount
    if (res !== "Conflict") {
      res.map((user) => {
        names.push(user.userName);
        numOfOrders.push(user.numOfOrders);
      });
    }

    setNameOfUsers(names);
    setUserNumOfOrders(numOfOrders);
  };

  const Logout = () => {
    window.localStorage.removeItem("user");
    history.push("/login");
  };

  const fetchAllBusinessUsers = async () => {
    const res = await GetAllBusinessUsers();

    setBusinessUsers(res);
    let active = res.filter((user) => user.businessStatus === true);
    setActiveBusiness(active);
    GetTop3();
  };

  const fetchAllClientUsers = async () => {
    const res = await GetAllClientUsers();
    setClientUsers(res);
    GetTop5Users();
  };

  const filterUnActiveBusiness = async () => {
    let unActive = businessUsers.filter(
      (user) => user.businessStatus === false
    );

    setUnActiveBusiness(unActive);
  };

  const UpdateBusinessUserToActive = async (id) => {
    if (id !== undefined && id !== null) {
      let res = await UpdateBusinessToActive(id);
      fetchAllBusinessUsers();
    }
  };

  /// will work on page load
  useEffect(() => {
    fetchAllBusinessUsers();
    fetchAllClientUsers();
  }, []);

  /// will work only if we have data in BusinessUsers
  useLayoutEffect(() => {
    filterUnActiveBusiness();
  }, [businessUsers]);



  const sendHandler = async () => {
    if(inputBusinessID !== "" && dateFrom !== "" && dateTo !== ""){
      const res = await reportByDate(inputBusinessID, dateFrom, dateTo);
      console.log("reportDates =", res);
      setDateResult(res);
    }
    else{
      alert("הנה מלא את כל השדות")
    }
    
   
  };

  //handler if user click button without date insert
  const excelbuttonHandler = () => {
    if (dateResult === null&&dateResult ===undefined) {
      alert("לא ניתן להפיק קובץ בלי מידע")
      return;
    }

  }

  return (
    <div className="w-screen h-screen bg-gray-300 overflow-y-auto">
      {/* header */}
      <div className=" bg-green-300 w-full h-20 flex justify-between items-center">
        <a
          href="/login"
          onClick={Logout}
          className="flex justify-center items-center w-20 h-20 text-black opacity-80 rounded-xl hover:bg-white hover:opacity-100 hover:text-green-500 transform hover:translate-x-3 duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </a>
        <h1 className="ml-96 text-xl font-sans leading-6 font-bold">
          !שלום {user && user.adminName} אדמין
        </h1>
        <img src={Logo} alt="Logo" className=" w-52 mr-5 h-20" />
      </div>

      <div className="bg-gray-200 flex flex-wrap w-full h-full items-center justify-center rounded-lg p-2">
        <div className="w-full h-full my-5 flex flex-row-reverse p-5 ">
          <div className="bg-white flex flex-col max-w-5/6 w-3/6 p-3 h-full items-end rounded-lg text-3xl leading-6 ">
            <div className="bg-green-300 flex flex-col max-w-5/6 w-full p-3 h-5/12 items-end rounded-lg text-3xl leading-6 shadow-sm ">
              <h1 className=" mb-4 mt-2 mr-5">כמות משתמשים</h1>
              <div className="bg-white w-full h-16 flex items-center justify-around text-xl rounded-xl">
                <h1>{businessUsers.length} :בעלי עסק</h1>
                <h1>{clientUsers.length} :לקוחות אפליקציה</h1>
              </div>
            </div>
            <div   dir="rtl" className="flex justify-center items-center w-full p-5">
              <h1 className="leading-6 text-2xl ">5 המשתמשים בעלי כמות ההזמנות הגבוהה ביותר</h1>
            </div>
            <div  className=" w-full h-full ">
              <BarChart
                nameOfUsers={nameOfUsers}
                userNumOfOrders={userNumOfOrders}
              />
            </div>
          </div>

          <div
            dir="rtl"
            className="bg-white flex flex-col justify-center items-center w-3/6 max-h-96  p-3 mx-3  rounded-lg  "
          >
            <h1 className="text-2xl leading-6">3 העסקים המובילים</h1>

            <PieChart
              numberOfOrders={numberOfOrders}
              namesOfBusiness={namesOfBusiness}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gray-200 flex flex-col w-full h-full items-center rounded-lg p-2">
          <div className="bg-gray-300 flex w-full  items-center justify-end p-7 rounded-lg">
            <h1 className="text-3xl leading-6">רשימת משתמשים</h1>
          </div>
          <BusinessUserList businessUsersList={activeBusiness} />
          <ClientUserList clientUsers={clientUsers} />
        </div>
      </div>
      <div className="bg-gray-200 flex flex-col w-full h-full items-center rounded-lg p-2">
        <div className="bg-gray-300 flex w-full  items-center justify-end p-7 rounded-lg">
          <h1 className="text-3xl leading-6">אישור בעל עסק</h1>
        </div>
        <div className="bg-gray-200 w-full h-full">
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
                        onClick={() =>
                          UpdateBusinessUserToActive(user.businessID)
                        }
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
      <div className="bg-gray-200 flex flex-col w-full h-full items-center rounded-lg p-2">
        <div className="bg-gray-300 flex w-full my-7  items-center justify-end p-8 rounded-lg">
          <h1 className="text-3xl leading-6">הפקת דוחות</h1>
        </div>
        
      <div className="w-full h-screen flex flex-col p-5">
        <div dir="rtl" className="w-full h-28 flex flex-col ">
          <div className="bg-gray-200 p-5 rounded-t-xl">
            <h1 className="text-xl  font-medium my-2 ">הפקת דוחות</h1>
            <h2 className="text-md font-normal text-gray-500">
              כאן ניתן לצפות בהזמנות שלך לפי תאריך ולהפיק את ההזמנות לקובץ אקסל
            </h2>
          </div>
        </div>
        <div className="bg-gray-200 w-full h-36 flex justify-center items-center rounded-b-xl">
          <div  className=" flex w-full items-center justify-around ">
            <button
              className="bg-green-400 w-48 h-14 ring-4 ring-green-300 text-black hover:ring-green-900 hover:text-white text-xl rounded-lg"
              onClick={() => {
                sendHandler();
              }}
            >
              להצגת ההזמנות
            </button>
            <div className="flex flex-row items-center">

            <input
              
              type="text"
              className="w-48 rounded-md h-14 font-semibold"
              onChange={(val) => setInputBusinessID(val.target.value)}
            />
             <p className="m-2 text-lg">קוד בעל עסק</p>
            </div>
            <div className="flex flex-row items-center">

            <input
             
              type="date"
              className="w-48 rounded-md h-14 font-semibold"
              onChange={(val) => setDateTo(val.target.value)}
            />
            <p className="m-2 text-lg">עד תאריך</p>

            </div>
            <div className="flex flex-row items-center">

            <input
              type="date"
              className="w-48 rounded-md h-14 font-semibold"
              onChange={(val) => setDateFrom(val.target.value)}
            />
           <p className="m-2 text-lg">מתאריך</p>
         
            </div>
          </div>
        </div>

        <div dir="rtl" className="flex w-full h-4/6 flex-col p-5 rounded-b-xl">
          <table id="reportTable" className="table-auto flex flex-col  ">

            <thead className="bg-red-500 flex flex-col p-5 mb-5 text-xl font-bold leading-6 rounded-md">
              <tr className="flex items-center justify-between">
                <td>מספר הזמנה</td>
                <td>שם לקוח</td>
                <td>האם שולם ?</td>
                <td>תאריך הזמנה</td>
                <td>סכום הזמנה</td>
              </tr>
            </thead>

            <div className="h-4/6 overflow-y-scroll">
              <tbody className="flex flex-col p-5 ">
                {dateResult &&
                  dateResult.map((item, index) => {
                    return (
                      <tr className="bg-gray-50 w-full flex justify-between items-center my-2 flex-row p-5 text-lg leading-6 rounded-md overflow-auto ring-4 ring-green-500 hover:bg-green-300" key={index}>
                        <td>{item.orderID}</td>
                        <td>{item.userName}</td>
                        <td>{item.orderPaidUp ? "כן" : "לא"}</td>
                        <td>{item.orderDate}</td>
                        <td>{item.orderTotalPrice}₪</td>
                      </tr>
                    );
                  })}
              </tbody>
            </div>
          </table>

        </div>
        {dateTo===""||dateFrom===""||dateResult===null?<div></div>:
        <div className=" flex items-center justify-center">
          <ReactHTMLTableToExcel
            className="bg-green-400 ring-4 ring-green-300 text-black hover:ring-green-900 hover:text-white p-5 px-10 text-xl rounded-md"
            table="reportTable"
            filename={`${inputBusinessID}-${dateFrom}-${dateTo}`}
            sheet="Sheet"
            buttonText="להפקת קובץ אקסל לחץ כאן"
            onClick={excelbuttonHandler}
          />
        </div>
        }
      </div>
      </div>

    
    </div>
  );
};

export default AdminPage;
