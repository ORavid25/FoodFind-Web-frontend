import React, {useState,useEffect} from "react";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";

const BusinessReport = () => {

  const [dateFrom,setDateFrom] = useState("");
  const [dateTo,setDateTo] = useState("");

useEffect(() => {
  console.log("from=",dateFrom);
  console.log("to=",dateTo);
})



  return (
    <Layout>
      <Navbar />

      <div className="ml-56 w-full h-screen flex flex-col p-10  ">
        <div dir="rtl" className="w-full h-28 flex flex-col ">
          <div className="bg-gray-200 p-5 rounded-t-xl">
            <h1 className="text-xl  font-medium my-2 ">הפקת דוחות</h1>
            <h2 className="text-md font-normal text-gray-500">
              כאן ניתן לצפות בהזמנות שלך לפי תאריך ולהפיק את ההזמנות לקובץ אקסל
            </h2>
          </div>
        </div>
        <div className="bg-gray-200 w-full h-36 flex justify-center items-center">
          <div className=" flex w-full items-center justify-around ">
            <button className="bg-green-400 ring-4 ring-green-300 text-black hover:ring-green-900 hover:text-white p-5 px-10 text-xl rounded-lg">
              להצגת ההזמנות
            </button>
            <input type="date" className="w-48 rounded-md h-14 font-semibold" onChange={(val)=> setDateFrom(val.target.value)} />
            <input type="date" className="w-48 rounded-md h-14 font-semibold" onChange={(val)=> setDateTo(val.target.value)} />
          </div>
        </div>

        <div className="bg-gray-200 flex w-full h-full rounded-b-xl">


        </div>
      </div>
    </Layout>
  );
};

export default BusinessReport;
