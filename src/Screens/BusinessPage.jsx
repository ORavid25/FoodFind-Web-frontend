import React,{useContext} from "react";
import { FoodFindContext } from "../context";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import BusinessUpdateForm from "../Components/BusinessUpdateForm";



const BusinessPage = () => {

  const { user } = useContext(FoodFindContext);




  return (
    <Layout>
      <Navbar />
      <div className="flex ml-44 p-5 justify-center h-screen">
        <BusinessUpdateForm />
      </div>
    </Layout>
  );
};

export default BusinessPage;
