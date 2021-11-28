import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import BusinessOrders from "../Components/BusinessOrders";
import { FoodFindContext } from "../context";
import Layout from "../Components/Layout";
import OrderDetails from "../Components/OrderDetails";
import {
  getAllOrdersByBusinessID,
  getAllItemOfOrderByOrderID,
} from "../api/OrderController";

export const Home = () => {
  const { user, setOrderDetail } = useContext(FoodFindContext);
  const [businessOrders, setBusinessOrders] = useState([]);

  const fetchOrders = async () => {
    if (user !== null && user !== undefined) {
      const res = await getAllOrdersByBusinessID(user.businessID);
      setBusinessOrders(res);
    }
  };

  const businessOrdersToHome = async (
    orderID,
    orderDate,
    userName,
    userEmail
  ) => {
    let result = await getAllItemOfOrderByOrderID(orderID);
    let newArray = [];
    let obj = { orderID, orderDate, userName, userEmail };
    newArray.push(result, obj);
    setOrderDetail(newArray);
    console.log("orderDetail", obj);
    console.log("newArr", newArray);
    console.log("itemsOfOrder", result);
  };

  useEffect(() => {
    fetchOrders();
  }, [user]);

  return (
    <Layout>
      <Navbar />
      <div className="ml-56 min-w-full flex flex-row pt-10">
        <OrderDetails />
        <BusinessOrders
          orderList={businessOrders}
          businessOrdersToHome={businessOrdersToHome}
        />
      </div>
    </Layout>
  );
};

export default Home;
