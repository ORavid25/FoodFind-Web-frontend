import React from "react";

const BusinessOrders = () => {
  const words = ["sky", "blue", "falcon", "wood", "cloud"];
  const data = [
    {
      id: "1",
      productName: "המבורגר",
      Added: "בצל מטוגן, ביצת עין, בלי ירקות",
      orderTime: "20:25",
      howOrder: "שקד שרווי",
    },
    {
      id: "2",
      productName: "ג'חנון",
      orderTime: "20:35",
      howOrder: "אור רביד",
    },
    {
      id: "3",
      productName: "פיצה",
      orderTime: "20:50",
      howOrder: "שקד ואור",
    },
  ];
  const items = data.map((data, idx) => {
    return (
      <div className="contianer hover:bg-red-300" onClick={() => {
        alert("heyy!")
      }}>
        <ul className="" key={data.id}>
          <div class=" p-6 flex flex-col justify-evenly">
            <div className="flex flex-row-reverse mb-6">
              <h1 class=" text-sm font-medium text-gray-500">
                {data.productName}
              </h1>
              <p class="mr-44 text-sm text-gray-900">{data.orderTime}</p>
            </div>
            <div className="flex flex-row-reverse justify-between">
              <p className="ml-14">הוזמן על ידי</p>
              <p className="text-lg">{data.howOrder}</p>
            </div>
          </div>
        </ul>
      </div>
    );
  });

  return (
    <div className="flex container">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6" dir="rtl">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            מסך ההזמנות
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            כאן תוכל לראות את ההזמנות הנכנסות
          </p>
        </div>
        <div className="container">{items}</div>
      </div>
    </div>
  );
};

export default BusinessOrders;
