import React,{useEffect,useState,useContext} from "react";
import {FoodFindContext} from '../context';

const OrderDetails = () => {

  const {orderDetail} = useContext(FoodFindContext);

  const data = {
    id: "1",
    productName: "המבורגר",
    orderDate: "17/10/2021",
    orderTime: "20:25",
    orderAddress: "החרצית 5 חדרה",
    whoOrder: "שקד שרווי",
    products: "המבורגר 220",
    Added: "בצל מטוגן, ביצת עין",
    comment: "בלי עגבניה ובלי בצל , הרבה רטבים בצד",
  };
  useEffect(() => {
    console.log("orderDetailsFromOrderblat",orderDetail);
  }, [orderDetail]);

  return (
    <div className="flex container flex-col w-full m-2 h-full bg-gray-200  rounded-lg  ring-4 ring-opacity-90 ring-green-300 mr-5 ">
      <div dir="rtl" className="flex flex-col justify-between p-4 ">
        <h1 className="text-lg leading-6 font-medium text-gray-900">
          פירוט הזמנה
        </h1>
        <h2 className="mt-1 max-w-2xl text-sm text-gray-500">
          כאן ניתן לראות את פירוט ההזמנה שנבחרה
        </h2>
      </div>
      <div dir="rtl">
        <div className="mt-2">
          <div className="flex container flex-col  w-full h-full">
            <div dir="rtl" className="p-2">
              <div className="shadow-sm p-2 flex">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ml-2">
                 מספר הזמנה: 
                </h1>
                <a>{orderDetail&& orderDetail[1].orderID}</a>
              </div>
              <div className="shadow-sm p-2 flex">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ml-2">
                  תאריך הזמנה:
                </h1>
                <a>
                  {orderDetail&&orderDetail["1"].orderDate}
                </a>
              </div>

              <div className="shadow-sm p-2 flex">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ml-2">
                  שם לקוח:
                </h1>
                <a>{orderDetail&&orderDetail["1"].userName}</a>
              </div>
              <div className="shadow-sm p-2 flex">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ml-2">
                  כתובת מייל:
                </h1>
                <a>{orderDetail&&orderDetail["1"].userEmail}</a>
              </div>
              <div className="flex h-96 shadow-sm p-2  flex-col overflow-y-scroll">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ">
                  פירוט ההזמנה:
                </h1>
                <div className="mt-2 flex flex-col mr-2 text-xl font-normal ">
                  {orderDetail && orderDetail["0"].map((order,index)=>{
                    return(
                      <div className=" h-24 ring-2 rounded-md ring-green-300">
                        <div className="flex flex-row rounded-t-md px-2 bg-gray-300">
                        <h2>{order.itemName}</h2>
                        <span className="w-10"/>
                        <h2>{order.itemAmount}X</h2>
                        </div>
                       
                        <h2 className="text-gray-600 text-lg font-medium px-2 pt-2">תוספות וערות למוצר : {order.comments}</h2>
                        
                        <h2 className="text-gray-600 text-lg font-bold px-2">סה"כ מחיר למוצר : {order.itemTotalPrice}</h2>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around p-3 mb-3">
        <button className="bg-yellow-900 ring-4 ring-yellow-600 border-white text-white p-5 px-10 text-lg rounded-lg " onClick={() => {
          alert("OrderReady / OnTheWay");
        }}>
        ההזמנה מוכנה
        </button>

        <button className="bg-green-600 ring-4 ring-green-300 hover:ring-green-900 text-white p-5 px-10 text-xl rounded-lg" onClick={() => {
          alert("orderPaidUp = true");
        }}>
          אישור תשלום
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
