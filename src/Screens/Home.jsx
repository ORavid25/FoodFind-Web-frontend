import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import UpdateBusiness from "./UpdateBusiness";
import BusinessOrders from "../Components/BusinessOrders";
import Footer from "../Components/Footer";

export const Home = () => {
  return (
    <div className="flex fixed flex-row fill-current  right-0 left-0 top-0 bottom-0  bg-gray-200">
      <div className="h-screen p-5 bg-gray-200">
        <Navbar />
      </div>
      <div className=" w-screen h-screen ">
        <Header />
        <div className="flex flex-row flex-wrap justify-evenly">
          <div className="w-4/5 h-4/5 pl-3">{<UpdateBusiness />}</div>
          <div className="container w-80 ml-3">{<BusinessOrders />}</div>
{/* 
          <div className="bg-yellow-300 w-full h-20 rounded-2xl ">
            <h1>sadadasdasdasdasd</h1>
          </div> */}
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
