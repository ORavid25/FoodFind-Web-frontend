import React,{useContext} from "react";
import { FoodFindContext } from "../context";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import BusinessUpdateForm from "../Components/BusinessUpdateForm";



const BusinessPage = () => {

  return (
    <Layout>
      <Navbar />
      <div className="flex ml-56 p-5 justify-center h-full w-full items-center">
        <BusinessUpdateForm />
      </div>
    </Layout>
  );
};

export default BusinessPage;
