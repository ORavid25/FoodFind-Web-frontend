import React, { useEffect } from "react";

<<<<<<< HEAD
const Item = () => {
    return(
        <div className=" w-full h-20 flex justify-center items-center bg-yellow-500 ">
            <h1>itemName</h1>

        </div>
    )
  }

const ItemsDisplay = () => {

 



=======
const ItemsDisplay = ({ businessItems }) => {

  useEffect(() => {
    
    const res = businessItems.filter(item => item.itemID == 12)
    console.log("filter", res);
  }, [businessItems]);

  
>>>>>>> e3a43d70ccca2a430b8d760d40d0ba711541d904
  return (
    <div dir="rtl" className="w-full h-5/6 rounded-xl   px-5 py-5">
      <div className="flex flex-col justify-around p-5 bg-gray-200 h-20 rounded-t-xl">
        <h1 className="text-lg font-medium my-2">רשימת המוצרים</h1>
        <h2 className="text-md font-normal text-gray-500">כאן תוכלו לראות את רשימת המוצרים שלכם</h2>
      </div>

<<<<<<< HEAD
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
      
=======
      {businessItems.map((item, index) => {
        return (
          <div key={index} className="">{item.itemID}{item.toppingName}</div>
        )
      })}


      <div className="bg-green-200 w-full h-5/6">

      </div>

>>>>>>> e3a43d70ccca2a430b8d760d40d0ba711541d904
    </div>
  );
};

export default ItemsDisplay;
