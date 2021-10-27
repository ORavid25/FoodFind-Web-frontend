import React from "react";

const Item = () => {
    return(
        <div className=" w-full h-20 flex justify-center items-center bg-yellow-500 ">
            <h1>itemName</h1>

        </div>
    )
  }

const ItemsDisplay = () => {

 



  return (
    <div dir="rtl" className="w-full h-5/6 rounded-xl   px-5 py-5">
      <div className="flex flex-col justify-around p-5 bg-gray-200 h-20 rounded-t-xl">
        <h1 className="text-lg font-medium my-2">רשימת המוצרים</h1>
        <h2 className="text-md font-normal text-gray-500">כאן תוכלו לראות את רשימת המוצרים שלכם</h2>
      </div>

        <div className="grid grid-cols-2 gap-x-20 gap-y-16 h-5/6 p-5 rounded-b-lg bg-green-400  overflow-y-scroll">

          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>

          
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
   

      
        </div>
      
    </div>
  );
};

export default ItemsDisplay;
