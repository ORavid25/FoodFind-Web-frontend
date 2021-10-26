import React from "react";

const ItemsDisplay = () => {
  return (
    <div dir="rtl" className="w-full h-full rounded-xl bg-white">
      <div className="flex flex-col justify-around p-5 bg-gray-200 h-20 rounded-t-xl">
        <h1 className="text-lg font-medium my-2">רשימת המוצרים</h1>
        <h2 className="text-md font-normal text-gray-500">כאן תוכלו לראות את רשימת המוצרים שלכם</h2>
      </div>

      <div className="bg-green-200 w-full h-5/6">

      </div>
    </div>
  );
};

export default ItemsDisplay;
