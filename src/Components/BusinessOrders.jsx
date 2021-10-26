import React,{useContext} from "react";
import { FoodFindContext } from "../context";

const BusinessOrders = () => {

  const {orderData,setOrderData} = useContext(FoodFindContext);


  const data = [
    {
      id: "1",
      productName: "המבורגר",
      orderDate: "17/10/2021",
      orderTime: "20:25",
      orderAddress: "החרצית 5 חדרה",
      whoOrder: "דוד ביטון",
      products: "המבורגר 220",
      Added: "בצל מטוגן, ביצת עין",
      comment: "בלי עגבניה ובלי בצל חי , הרבה רטבים בצד",
    },
    {
      id: "2",
      productName: "המבורגר טלה ",
      orderDate: "19/10/2021",
      orderTime: "20:40",
      orderAddress: "בסיס מחנה 80",
      whoOrder: "שקד שרווי",
      products: "המבורגר 220,המבורגר אנטריקוט 300",
      Added: "בצל מטוגן,פטריות צרובות",
      comment: "בבקשה תפנק אנחנו חיילים בעורב צנחנים",
    },
    {
      id: "3",
      productName: "המבורגר טלה ",
      orderDate: "19/10/2021",
      orderTime: "20:40",
      orderAddress: "בסיס מחנה 80",
      whoOrder: "שקד שרווי",
      products: "המבורגר 220,המבורגר אנטריקוט 300",
      Added: "בצל מטוגן,פטריות צרובות",
      comment: "בבקשה תפנק אנחנו חיילים בעורב צנחנים",
    },
    {
      id: "4",
      productName: "המבורגר טלה ",
      orderDate: "19/10/2021",
      orderTime: "20:40",
      orderAddress: "בסיס מחנה 80",
      whoOrder: "שקד שרווי",
      products: "המבורגר 220,המבורגר אנטריקוט 300",
      Added: "בצל מטוגן,פטריות צרובות",
      comment: "בבקשה תפנק אנחנו חיילים בעורב צנחנים",
    },
    {
      id: "5",
      productName: "המבורגר טלה ",
      orderDate: "19/10/2021",
      orderTime: "20:40",
      orderAddress: "בסיס מחנה 80",
      whoOrder: "שקד שרווי",
      products: "המבורגר 220,המבורגר אנטריקוט 300",
      Added: "בצל מטוגן,פטריות צרובות",
      comment: "בבקשה תפנק אנחנו חיילים בעורב צנחנים",
    },

  ];

  // const OrderHandler = () => {
         
    
  // }

  const items = data.map((data, idx) => {
    return (
      <div
        classNameName="flex container hover:bg-green-300"
        onClick={(data) => {
          alert("heyy")
        }}
      >
        <ul classNameName="container" key={data.id}>
          <div className=" p-6 flex flex-col justify-evenly">
            <div className="flex flex-row justify-between mb-6">
              <p className="text-sm text-gray-900">{data.orderTime}</p>
              <p className=" text-sm font-medium text-gray-500 self-center">
                {data.productName}
              </p>
            </div>
            <div className="flex flex-row-reverse justify-between">
              <p className="ml-14">הוזמן על ידי</p>
              <p className="text-lg">{data.whoOrder}</p>
            </div>
          </div>
        </ul>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center w-80 h-full ">
      <div className="bg-gray-200 shadow-md overflow-hidden sm:rounded-lg  ring-4 ring-opacity-90 ring-green-300 ">
        <div className="px-4 py-5 sm:px-6" dir="rtl">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            מסך ההזמנות
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            כאן תוכל לראות את ההזמנות הנכנסות
          </p>
        </div>
        <div classNameName="container">{items}</div>
      </div>
    </div>
  );
};

export default BusinessOrders;
