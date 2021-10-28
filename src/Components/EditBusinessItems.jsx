import React, { useState, useEffect } from "react";
import { UpdateItemOfBusiness } from "../api/BusinessItemController";
import { GrFormClose } from "react-icons/gr";

const EditBusinessItems = ({ ItemForEdit, toppingItems }) => {
  const [itemPrice, setItemPrice] = useState(0);
  const [itemComment, setItemComment] = useState("");

  useEffect(() => {
    setItemPrice(ItemForEdit.itemPrice);
    setItemComment(ItemForEdit.comment);
  }, []);

  const handleUpdateBusinessItem = async () => {
    debugger;
    if (
      itemPrice !== ItemForEdit.itemPrice ||
      itemComment !== ItemForEdit.comment
    ) {
      const res = await UpdateItemOfBusiness(
        ItemForEdit.businessID,
        ItemForEdit.itemID,
        itemPrice,
        itemComment
      );
      console.log("updateBusinessItem res = ", res);
    }
  };

  return (
    <div className="flex flex-col justify-around w-11/12 p-5 h-20 rounded-t-xl mt-80 ">
      <div className="rounded-t-xl bg-gray-300 p-5 shadow-xl">
        <h1 className="text-lg font-medium ">פירוט המוצרים והתוספות</h1>
        <h2 className="text-md font-normal text-gray-500">
          כאן ניתן לבצע שינויים במוצר ובתוספות המוצר
        </h2>
      </div>
      <div className=" flex justify-center items-center p-5 bg-gray-300">
        <h1 className="text-xl font-semibold">{ItemForEdit.itemName}</h1>
      </div>
      <div className="flex h-64 justify-evenly items-center flex-row p-5 font-semibold text-lg  bg-gray-300 ">
        <h1>מחיר מוצר</h1>
        <input
          type="number"
          defaultValue={ItemForEdit.itemPrice}
          onChange={(e) => {
            setItemPrice(e.target.value);
          }}
          className="h-8 w-40 rounded-sm"
        />
        <h1>תיאור מוצר</h1>
        <textarea
          defaultValue={ItemForEdit.comment}
          className="h-16 w-56 rounded-md"
          onChange={(e) => {
            setItemComment(e.target.value);
          }}
        />
        <button
          type="button"
          className="p-2 m-5 bg-green-500 w-52 text-2xl text-white font-medium  ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 "
          onClick={handleUpdateBusinessItem}
        >
          עדכון
        </button>
      </div>
      <div className="pt-3 bg-gray-300">
        <div>
          <h1 className="font-semibold text-lg mx-5">
            התוספות של המוצר {ItemForEdit.itemName}
          </h1>
          <h2 className="text-md font-normal text-gray-500 mx-5">
            כאן ניתן לראות את כל התוספות הקשורות למוצר זה
          </h2>
        </div>


        <div className="grid grid-cols-5 gap-x-20 gap-y-5 max-h-100 p-5 rounded-lg justify-items-center bg-gray-300">

        {toppingItems !== null &&
          toppingItems.map((item) => {
            return (
              <div key={item.toppingID} className="flex flex-row justify-center items-center p-2">
                <div className=" text-xl font-semibold rounded-lg w-40 bg-yellow-200 py-2 flex justify-around items-center">
                  <button>
                    <GrFormClose
                      size={25}
                    
                    />
                  </button>
                  {item.toppingName}
                </div>
                {/* <h1 className="text-xl font-semibold ml-40"></h1> */}
                {/* <h2 className="text-xl">מחיר: {item.toppingPrice}</h2> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EditBusinessItems;
