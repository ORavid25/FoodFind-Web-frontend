import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BusinessOrders from "../Components/BusinessOrders";
import Layout from "../Components/Layout";
import FormContainer from "../Components/FormContainer";

/////////////////////////////////////////////////!!!!!!!!!
const BusinessMenu = () => {
  return (
    <Layout>
      <div className="flex w-min p-2 fixed">
        <Navbar />
      </div>
      <div className="ml-44">
        <div className="flex h-screen flex-wrap justify-center bg-purple-500">
           <FormContainer/>
           <FormContainer/>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessMenu;
