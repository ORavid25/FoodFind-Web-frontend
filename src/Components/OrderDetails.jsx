import React from "react";

const OrderDetails = () => {
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

  return (
    <div className="flex container flex-col w-full mx-2 my-2 h-full bg-gray-200  rounded-lg  ring-4 ring-opacity-90 ring-green-300 mr-5 ">
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
                  הזמנה מספר:
                </h1>
                <a>{data.id}</a>
              </div>
              <div className="shadow-sm p-2 flex">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ml-2">
                  תאריך הזמנה:
                </h1>
                <a>
                  {data.orderDate} , {data.orderTime}
                </a>
              </div>

              <div className="shadow-sm p-2 flex">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ml-2">
                  כתובת למשלוח:
                </h1>
                <a>{data.orderAddress ? data.orderAddress : "איסוף עצמי"}</a>
              </div>
              <div className="shadow-sm p-2 flex flex-col">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ">
                  פירוט ההזמנה:
                </h1>
                <div className="mt-2 flex flex-col mr-2 text-xl font-normal">
                  <a>{data.products}</a>
                  <a>{data.Added}</a>
                  <a>{data.comment}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around p-3 mb-3">
        <button className="bg-yellow-900 ring-4 ring-yellow-600 border-white text-white p-3 text-lg rounded-lg " onClick={() => {
          alert("OrderReady / OnTheWay");
        }}>
          ההזמנה מוכנה/יצאה למשלוח
        </button>

        <button className="bg-green-600 ring-4 ring-green-300 hover:ring-green-900 text-white px-5 py-1 text-lg rounded-lg" onClick={() => {
          alert("orderPaidUp = true");
        }}>
          אישור תשלום
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
