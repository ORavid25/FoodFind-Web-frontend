import React, { useState, useEffect } from "react";
import { UpdateItemOfBusiness } from "../api/BusinessItemController";
import { GrFormClose } from "react-icons/gr";
import {AiOutlinePlus} from "react-icons/ai";
import { AddTopping } from "./AddTopping";

const EditBusinessItems = ({ ItemForEdit, itemToppings }) => {
  const [itemPrice, setItemPrice] = useState(0);
  const [itemComment, setItemComment] = useState("");
  const [unActiveToppings, setUnActiveToppings] = useState([]);
  const [activeToppings, setActiveToppings] = useState([]);
  const [addToppingClicked, setAddToppingClicked] = useState(false);

  useEffect(() => {
    setItemPrice(ItemForEdit.itemPrice);
    setItemComment(ItemForEdit.comment);
  }, []);

  useEffect(() => {
    (async () => {
      const unActiveTopping = itemToppings.filter(item => item.isActive === false)
      await setUnActiveToppings(unActiveTopping);
      const activeTopping = itemToppings.filter(item => item.isActive === true)
      await setActiveToppings(activeTopping);
    })()
  }, [itemToppings]);

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
    <div className="flex flex-col justify-around w-11/12 p-5 max-h-full rounded-t-xl ">
      <div className="rounded-t-xl bg-gray-300 rounded shadow-xl p-5">
        <h1 className="text-lg font-medium ">פירוט המוצרים והתוספות</h1>
        <h2 className="text-md font-normal text-gray-500">
          כאן ניתן לבצע שינויים במוצר ובתוספות המוצר
        </h2>
      </div>
      <div className=" flex justify-center items-center p-2 bg-gray-300">
        <h1 className="text-md font-semibold">{ItemForEdit.itemName}</h1>
      </div>
      <div className="flex max-h-40 justify-evenly items-center flex-row font-semibold text-lg  bg-gray-300 ">
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
      <div className="mt-10">
        <div>
          <h1 className="font-semibold text-lg mx-5">
            התוספות של המוצר {ItemForEdit.itemName}
          </h1>
          <h2 className="text-md font-normal text-gray-500 mx-5">
            כאן ניתן לראות את כל התוספות {ItemForEdit.itemName}
          </h2>
        </div>
        <button
          type="button"
          className="p-2 m-5 bg-green-500 w-44 text-xl text-white font-small ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300"
          onClick={() => { setAddToppingClicked(!addToppingClicked) }} >
          להוספת תוספת
        </button>
        {addToppingClicked && <AddTopping data={ItemForEdit} />}
        {itemToppings.length === 0 ? <div className="w-full h-54 text-xl font-semibold flex justify-center item-center mt-16">אין תוספות למוצר זה</div> :

          <div className="grid grid-cols-5 gap-x-20 gap-y-5 max-h-full p-5 rounded-b-lg justify-items-center bg-gray-200  overflow-y-scroll designedScroll">

            {activeToppings.map((item) => {
              return (
                <div className="flex flex-row justify-center items-center p-2">
                  <div className=" text-xl font-semibold rounded-lg w-40 bg-yellow-200 py-2 flex justify-around items-center">

                    <button onClick={() => { alert(item.toppingID) }}>
                      <GrFormClose
                        size={25}
                      />
                    </button>
                    {item.toppingName}

                  </div>

                </div>
              );
            })}
            
            {unActiveToppings.map((item) => {
              return (
                <div className="flex flex-row justify-center items-center p-2">
                <div className=" text-lg font-semibold rounded-lg w-40 bg-red-400 py-2 flex flex-row justify-around items-center">
                <button className="w-40 flex font-semibold justify-around" onClick={() => { alert(item.toppingID) }}>
                  <AiOutlinePlus
                    size={25}
                  />
                  {item.toppingName}
                </button>
                </div>
                </div>
              );
            })}







          </div>
        }
      </div>
    </div>
  );
};

export default EditBusinessItems;
