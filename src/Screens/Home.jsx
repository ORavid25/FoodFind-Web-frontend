import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import UpdateBusiness from "./UpdateBusiness";
import BusinessOrders from "../Components/BusinessOrders";
import Footer from "../Components/Footer";
import { FoodFindContext } from "../context";
import Layout from "../Components/Layout";

export const Home = () => {
  const { user } = useContext(FoodFindContext);

  return (
    <Layout>
      <div className="flex w-min p-2 fixed">
        <Navbar />
      </div>
      <div className="ml-44">
      <div className="bg-yellow-300">
        <h1>sadasdasdasdasdasd</h1>

        <h1>sadasdasdasdasdasd</h1>

        <h1>sadasdasdasdasdasd</h1>

        <h1>sadasdasdasdasdasd</h1>

        <h1>sadasdasdasdasdasd</h1>

        <h1>sadasdasdasdasdasd</h1>

        <h1>sadasdasdasdasdasd</h1>
        
        <p className="text-6xl">
        Line 31:3:  Assign object to a variable before exporting as module default  import/no-anonymous-default-export

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.
Line 31:3:  Assign object to a variable before exporting as module default  import/no-anonymous-default-export

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.
Line 31:3:  Assign object to a variable before exporting as module default  import/no-anonymous-default-export

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.
Line 31:3:  Assign object to a variable before exporting as module default  import/no-anonymous-default-export

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.
Line 31:3:  Assign object to a variable before exporting as module default  import/no-anonymous-default-export

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

        </p>
      </div>
 
      </div>
     

    </Layout>
  );
};

export default Home;

// <div className="flex flex-row bg-gray-200">
// <div className="flex w-max p-5 bg-gray-200">
//   <Navbar />
// </div>
// <div className="bg-red-200 w-screen h-screen flex flex-col">
//   <div className="flex w-min">
//     <Header />
//   </div>
//   <div className="bg-red-700 flex flex-wrap">
//     <div className="flex m-3 ">
//       <BusinessOrders />
//     </div>
//     <div className="flex m-3">
//       <BusinessOrders />
//     </div>
//     <div className="flex m-3">
//       <BusinessOrders />
//     </div>
//     <div className="flex m-3">
//       <BusinessOrders />
//     </div>
//     <div className="flex m-3">
//       <BusinessOrders />
//     </div>
//     <div className="flex m-3">
//       <BusinessOrders />
//     </div>
//   </div>
//   <Footer />
// </div>
// </div>
