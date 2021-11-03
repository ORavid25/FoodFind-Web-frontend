import React, { useState, useEffect } from "react";
import {
  UpdateItemOfBusiness,
  UpdateToppingToActive,
  UpdateToppingToUnActive,
  GetBusinessItemsByBusinessID,
} from "../api/BusinessItemController";
import { GrFormClose } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { AddTopping } from "./AddTopping";
import Modal from "./Modal";

const EditBusinessItems = ({ ItemForEdit, itemToppings, setItemsToppings }) => {
  const [itemPrice, setItemPrice] = useState(0);
  const [itemComment, setItemComment] = useState("");
  const [unActiveToppings, setUnActiveToppings] = useState([]);
  const [activeToppings, setActiveToppings] = useState([]);
  const [addToppingClicked, setAddToppingClicked] = useState(false);
  const [currentToppingForUpdate,setCurrentToppingForUpdate ] = useState(false);
  const [updateTopping,setUpdateTopping ] = useState(false);



  useEffect(() => {
    setItemPrice(ItemForEdit.itemPrice);
    setItemComment(ItemForEdit.comment);
  }, []);

  //get the corrent list of toppings for render it on screen
  const renderDataToppings = async () => {
    if (itemToppings.length !== 0) {
      const res = await GetBusinessItemsByBusinessID(
        itemToppings["0"].businessID
      );
      const toppings = res["toppings"];
      // console.log("Before filter", toppings);
      const filtered = toppings.filter(
        (item) => item.itemID === ItemForEdit.itemID
      );
      await setItemsToppings(filtered);
      // console.log("After filter", filtered);
    }
  };

  // filter topping to category Active/UnActive
  const filterToppings = async () => {
    const unActiveTopping1 = itemToppings.filter(
      (item) => item.isActive === false
    );
    await setUnActiveToppings(unActiveTopping1);

    const activeTopping1 = itemToppings.filter(
      (item) => item.isActive === true
    );
    await setActiveToppings(activeTopping1);
  };

  useEffect(() => {
    filterToppings();
  }, [itemToppings]);

  const handleUpdateBusinessItem = async () => {
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
  const ActiveTopping = ({ item }) => {
    return (
      <div className="flex flex-row justify-center items-center p-2">
        <div className=" text-xl font-semibold rounded-lg w-40 bg-yellow-200 py-2 flex justify-around items-center">
          <button
            onClick={async () => {
              const res = await UpdateToppingToUnActive(
                item.businessID,
                item.itemID,
                item.toppingID
              );

              renderDataToppings();
            }}
          >
            <GrFormClose size={25} />
          </button>
          <button
            onClick={async () => {
              await setUpdateTopping(!updateTopping);
              await setCurrentToppingForUpdate(item)
            }}
          >
            {item.toppingName}
          </button>
        </div>
      </div>
    );
  };

  const UnActiveToppings = ({ item }) => {
    return (
      <div className="flex flex-row justify-center items-center p-2">
        <div className=" text-xl  font-semibold rounded-lg w-40 bg-red-200 py-2 flex justify-around items-center">
          <button
            onClick={async () => {
              const res = await UpdateToppingToActive(
                item.businessID,
                item.itemID,
                item.toppingID
              );
              renderDataToppings();
            }}
          >
            <AiOutlinePlus size={25} />
          </button>
          <button onClick={async () => {
              await setUpdateTopping(!updateTopping);
              await setCurrentToppingForUpdate(item)
            }}
          >{item.toppingName}</button>
          
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-around w-11/12 p-5 h-max rounded-t-xl ">
      <div className="rounded-t-xl bg-gray-300 p-5 shadow-xl">
        <h1 className="text-lg font-medium ">פירוט המוצרים והתוספות</h1>
        <h2 className="text-md font-normal text-gray-500">
          כאן ניתן לבצע שינויים במוצר ובתוספות המוצר
        </h2>
      </div>
      <div className=" flex justify-center items-center p-2 bg-gray-300">
        <h1 className="text-xl font-semibold">{ItemForEdit.itemName}</h1>
      </div>
      <div className="flex h-32 justify-evenly items-center flex-row p-5 font-semibold text-lg rounded-b-xl bg-gray-300 ">
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
      <div className="mt-10 max-h-96">
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
          onClick={() => {
            setAddToppingClicked(!addToppingClicked);
          }}
        >
          להוספת תוספת
        </button>
        {/* Open Add Toppings */}
        {addToppingClicked && (
          <AddTopping
            data={ItemForEdit}
            renderDataToppings={renderDataToppings}
            setAddToppingClicked={setAddToppingClicked}
          />
        )}
        {itemToppings.length === 0 ? (
          <div className="w-full h-54 text-xl font-semibold flex justify-center item-center mt-">
            אין תוספות למוצר זה
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-x-20 gap-y-5 max-h-60 p-5 rounded-b-lg justify-items-center bg-gray-200  overflow-y-scroll overflow-x-hidden designedScroll">
            {activeToppings !== null ? (
              activeToppings.map((item) => {
                return <ActiveTopping key={item.toppingID} item={item} />;
              })
            ) : (
              <div></div>
            )}

            {unActiveToppings !== null ? (
              unActiveToppings.map((item) => {
                return <UnActiveToppings key={item.toppingID} item={item} />;
              })
            ) : (
              <div></div>
            )}
          </div>
        )}
            <Modal showModal={updateTopping} setShowModal={setUpdateTopping} >
                 <AddTopping data={currentToppingForUpdate} ifUpdate={true} />
                </Modal>
      </div>
    </div>
  );
};

export default EditBusinessItems;
