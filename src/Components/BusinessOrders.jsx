import React,{useContext} from "react";
import { FoodFindContext } from "../context";

const BusinessOrders = ({orderList,businessOrdersToHome}) => {

  const {orderData,setOrderData} = useContext(FoodFindContext);

  const orders = orderList.map((order) => {
    return (
      <div
        className="flex container bg-white border-4 hover:bg-green-300 "
        onClick={() => {
         businessOrdersToHome(order.orderID,order.orderDate,order.userName,order.userEmail)
        }}
      >
        <ul className="container" key={order.orderID}>
          <div className=" p-6 flex flex-col justify-evenly ">
            <div className="flex flex-row  justify-center items-center mb-3 ">
              <p className="text-lg text-gray-900 flex">{order.orderDate}</p>
            </div>
            <div className="flex flex-row-reverse justify-between">
              <p className="ml-14 leading-6 font-bold">הוזמן על ידי</p>
              <p className="text-lg">{order.userName}</p>
            </div>
          </div>
        </ul>
      </div>
    );
  });

  return (
    <div className="flex justify-center w-80 max-h-full ">
      <div className="bg-gray-200 shadow-md overflow-scroll rounded-lg ring-4 ring-opacity-90 ring-green-300 w-80 h-5/6">
        <div className="px-4 py-5 sm:px-6 " dir="rtl">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            מסך ההזמנות
          </h3>
          <p className=" text-sm text-gray-500">
            כאן תוכל לראות את ההזמנות הנכנסות
          </p>
        </div>
        <div classNameName="container overflow-y-scroll  ">{orders}</div>
      </div>
    </div>
  );
};

export default BusinessOrders;
