import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import BusinessOrders from "../Components/BusinessOrders";

const BusinessMenu = () => {
  return (
    <div className="flex fixed flex-row fill-current   right-0 left-0 top-0 bottom-0  bg-gray-200">
    <div className="h-screen p-5 bg-gray-200">
      <Navbar/>
    </div>
    <div className=" w-screen h-screen  ">
      <Header />
      <div className="flex  flex-row flex-wrap justify-evenly bg-red-600">
       <BusinessOrders/>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  </div>
  );
};

export default BusinessMenu;
