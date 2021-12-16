import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import Logo from "../assats/foodfind.png";
import { FcApprove, FcDisapprove } from "react-icons/fc";
import { GetAllBusinessUsers, UpdateBusinessToActive } from "../api/BusinessUserController";
import { GetAllClientUsers } from "../api/ClientUserController";
import { FoodFindContext } from "../context";
import BusinessUserList from "../Components/adminComponents/BusinessUserList";
import ClientUserList from "../Components/adminComponents/ClientUserList";
import Loader from "../Components/Loader";
import { useHistory } from "react-router-dom";
import { getAllOrdersByBusinessID } from "../api/OrderController";
import 'chart.js/auto';
import { Pie } from "react-chartjs-2";




const AdminPage = () => {
  const { user } = useContext(FoodFindContext);
  const [businessUsers, setBusinessUsers] = useState([]);
  const [clientUsers, setClientUsers] = useState([]);
  const [unActiveBusiness, setUnActiveBusiness] = useState([]);
  const [activeBusiness, setActiveBusiness] = useState([]);
  const [listTopBusiness, setListTopBusiness] = useState([]);
  const [namesOfBusiness, setNamesOfBusiness] = useState([]);
  const [numberOfOrders, setNumberOfOrders] = useState([]);

  const history = useHistory();

  const listOfNames = () => {
    const names = []
    const numberOfOrder=[];
    console.log("businessUser",businessUsers);
    if(businessUsers!== null && businessUsers !== undefined){
      names.push(businessUsers[0].businessName)
      names.push(businessUsers[1].businessName)
    }
   
    for (let index = 0; index < listTopBusiness.length; index++) {
     numberOfOrder.push(listTopBusiness[index].length)
      
    }
    console.log("numberOfOrders",numberOfOrder);
    setNamesOfBusiness(names);
    setNumberOfOrders(numberOfOrder);    
  }

  const GetOrdersForFilter = async () => {
    if(listTopBusiness.length>1){
      await setListTopBusiness([])
    }
    for (let index = 0; index < businessUsers.length; index++) {
      const result = await getAllOrdersByBusinessID(businessUsers[index].businessID);
      console.log("result is=", result);
      if (result.length < 1 || result === "Conflict") {
        break;
      }
      listTopBusiness.push(result);
    }
    console.log("listTopBusiness", listTopBusiness);
    setListTopBusiness(listTopBusiness);
  }


  useEffect(() => {
    async function getOrders(){
     await GetOrdersForFilter()
      await listOfNames();
    }
    getOrders();
  }, [businessUsers])

  const PieChart = () => {
    return (

      <Pie
        data={{
          labels: namesOfBusiness,
          datasets: [
            {
              label: '# of votes',
              data: numberOfOrders ,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />

    )

  }


 

 

  const Logout = () => {
    window.localStorage.removeItem("user");
    history.push("/login");
  };

  const fetchAllBusinessUsers = async () => {
    const res = await GetAllBusinessUsers();

    setBusinessUsers(res);
    let active = res.filter((user) => user.businessStatus === true);
    setActiveBusiness(active);
  };

  const fetchAllClientUsers = async () => {
    const res = await GetAllClientUsers();
    setClientUsers(res);
  };

  const filterUnActiveBusiness = async () => {
    let unActive = businessUsers.filter(
      (user) => user.businessStatus === false
    );

     setUnActiveBusiness(unActive);
  };

  const UpdateBusinessUserToActive = async (id) => {
    if (id !== undefined && id !== null) {
      let res = await UpdateBusinessToActive(id)
      fetchAllBusinessUsers();
    }
  }

  /// will work on page load
  useEffect(() => {
    fetchAllBusinessUsers();
    fetchAllClientUsers();
  }, []);

  /// will work only if we have data in BusinessUsers
  useLayoutEffect(() => {
    filterUnActiveBusiness();
  }, [businessUsers]);

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
            <PieChart />
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
                        onClick={() => UpdateBusinessUserToActive(user.businessID)}
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
