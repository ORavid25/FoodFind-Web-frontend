import React, { useState } from "react";
import { insertTopping , UpdateToppingPrice } from "../api/BusinessItemController";
import Loader from "./Loader";

export const AddTopping = ({
  data,
  renderDataToppings,
  setAddToppingClicked,
  ifUpdate,
  setUpdateTopping
}) => {
  const [inputs, setInputs] = useState({
    topName: "",
    topPrice: "",
  }
  );

  const handleAddClick = async () => {
    if (inputs.topName !== null && inputs.topPrice !== null) {
      await insertTopping(
        inputs.topName,
        data.businessID,
        data.itemID,
        inputs.topPrice,
        true
      );
      alert("נוספה תוספת בהצלחה");
      renderDataToppings();
      console.log("handleclick");
      setAddToppingClicked(false);
    }
  };


  const handleUpdateClick = async () => {
    debugger
    if(inputs.topPrice === ""){
     alert("לא ניתן לעדכן מחיר מבלי להזין מחיר חדש")
     return;
    }
    const res= await UpdateToppingPrice(data.businessID, data.itemID,data.toppingID,inputs.topPrice)
      await renderDataToppings();
      await setUpdateTopping(false)
  }

  return (
    <div className="w-11/12 mx-16 max-h-96 bg-gray-200">
      <div>
        <div dir="rtl" className=" items-center justify-evenly h-28">
          <h1 className="text-xl px-5 pt-3">הכנס את הפרטים הנדרשים</h1>
          <input
            className="m-5 px-3 py-0.5 rounded-sm text-center"
            placeholder="שם תוספת"
            value={data.toppingName}
            onChange={(val) => {
              setInputs({ ...inputs, topName: val.target.value });
            }}
          />
          <input
            className="m-5 px-3 py-0.5 rounded-sm text-center"
            placeholder="מחיר תוספת"
            defaultValue={data.toppingPrice}
            onChange={(val) => {
              setInputs({ ...inputs, topPrice: val.target.value });
            }}
          />
          {ifUpdate ? (
            <button 
            className="px-5 py-2 m-5 bg-green-500 text-md text-white font-medium ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 "
            onClick={handleUpdateClick}

            >
              עדכון
            </button>
          ) : (
            <button
              className="px-5 py-2 m-5 bg-green-500 text-md text-white font-medium ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 "
              onClick={handleAddClick}
            >
              אשר
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
