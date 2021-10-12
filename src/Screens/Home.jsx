import React,{useContext} from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import UpdateBusiness from "./UpdateBusiness";
import BusinessOrders from "../Components/BusinessOrders";
import Footer from "../Components/Footer";
import { FoodFindContext } from "../context";


export const Home = () => {


  const { user } = useContext(FoodFindContext);




  return (
    <div className="flex fixed flex-row fill-current overflow-scroll  right-0 left-0 top-0 bottom-0  bg-gray-200">
      <div className="h-screen p-5 bg-gray-200">
        <Navbar />
      </div>
      <div className=" w-screen h-screen  ">
        <Header />
        <div className="flex flex-row flex-wrap justify-evenly">
          <div className="w-full h-full bg-red-900 flex">
            
            <div className="bg-green-400 p-10">
               <BusinessOrders />
             

            </div>
            
            {/* {<UpdateBusiness />} */}
            
            </div>

        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;




{/* <div className="flex fixed flex-row fill-current overflow-scroll  right-0 left-0 top-0 bottom-0  bg-gray-200">
      <div className="h-screen p-5 bg-gray-200">
        <Navbar />
      </div>
      <div className=" w-screen h-screen  ">
        <Header />
        <div className="flex flex-row flex-wrap justify-evenly">
          <div className="w-full h-full bg-red-900 flex">
            
            <div className="bg-green-400 p-10">
               <BusinessOrders />
             

            </div>
            
            {/* {<UpdateBusiness />} */}
            
    //         </div>

    //     </div>

    //     <div className="">
    //       <Footer />
    //     </div>
    //   </div>
    // </div> */}