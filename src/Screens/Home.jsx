import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import BusinessOrders from "../Components/BusinessOrders";
import { FoodFindContext } from "../context";
import Layout from "../Components/Layout";
import OrderDetails from "../Components/OrderDetails";

export const Home = () => {
  const { user } = useContext(FoodFindContext);

  return (
    <Layout>
      <Navbar />
      <div className="ml-56 h-full w-full flex flex-col">
        <div className="flex w-full justify-end items-center p-5 ">
            <OrderDetails />
          <div className="flex justify-center items-center ">
            <BusinessOrders />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Home;
