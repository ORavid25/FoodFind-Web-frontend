import React, { useState, useEffect, useContext } from "react";
import { FoodFindContext } from "../context";
import { reportByDate } from "../api/OrderController";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const BusinessReport = () => {
  const { user } = useContext(FoodFindContext);

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [dateResult, setDateResult] = useState([]);

  const sendHandler = async () => {
    const res = await reportByDate(user.businessID, dateFrom, dateTo);
    console.log("reportDates =", res);
    setDateResult(res);
  };

  //handler if user click button without date insert
  const excelbuttonHandler = () => {
    if(dateResult == null){
      alert("לא ניתן להפיק קובץ בלי מידע")
      return;
    }

  }

  useEffect(() => {
    console.log("from=", dateFrom);
    console.log("to=", dateTo);
  });

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
            <button
              className="bg-green-400 ring-4 ring-green-300 text-black hover:ring-green-900 hover:text-white p-5 px-10 text-xl rounded-lg"
              onClick={() => {
                sendHandler();
              }}
            >
              להצגת ההזמנות
            </button>
            <input
              type="date"
              className="w-48 rounded-md h-14 font-semibold"
              onChange={(val) => setDateTo(val.target.value)}
            />
            <input
              type="date"
              className="w-48 rounded-md h-14 font-semibold"
              onChange={(val) => setDateFrom(val.target.value)}
            />
          </div>
        </div>

        <div dir="rtl" className="flex w-full h-full flex-col p-5 rounded-b-xl">
          <table id="reportTable" className="table-auto flex flex-col ">
          
              <thead className="bg-red-500 flex flex-col p-5 mb-5 text-xl font-bold leading-6 rounded-md">
                <tr className="flex items-center justify-between">
                  <td>מספר הזמנה</td>
                  <td>שם לקוח</td>
                  <td>האם שולם ?</td>
                  <td>סכום הזמנה</td>
                </tr>
              </thead>
           

            <tbody className="flex flex-col p-5 max-h-fulloverflow-y-scroll">
              {dateResult &&
                dateResult.map((item, index) => {
                  return (
                    <tr className="bg-gray-50 w-full flex justify-between items-center my-2 flex-row p-5 text-lg leading-6 rounded-md overflow-auto ring-4 ring-green-500 hover:bg-green-300" key={index}>
                      <td>{item.orderID}</td>
                      <td>{item.userName}</td>
                      <td>{item.orderPaidUp ? "כן" : "לא"}</td>
                      <td>{item.orderTotalPrice}₪</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className=" flex p-2 items-center justify-center">

          <ReactHTMLTableToExcel
            className="bg-green-400 ring-4 ring-green-300 text-black hover:ring-green-900 hover:text-white p-5 px-10 text-xl rounded-md"
            table="reportTable"
            filename={`${user.businessName}-${dateFrom}-${dateTo}`}
            sheet="Sheet"
            buttonText="להפקת קובץ אקסל לחץ כאן"
            onClick={() => {
              // excelbuttonHandler()
            }}
          />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessReport;
