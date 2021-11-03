import React, { useState } from "react";
import { insertTopping } from "../api/BusinessItemController";

export const AddTopping = ({
  data,
  renderDataToppings,
  setAddToppingClicked,
  ifUpdate,
}) => {
  const [inputs, setInputs] = useState({
    topName: "",
    topPrice: "",
  });

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
      setAddToppingClicked(false);
      await renderDataToppings();
    }
  };

  console.log(data.businessID);
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
            onChange={(val) => {
              setInputs({ ...inputs, topPrice: val.target.value });
            }}
          />
          {ifUpdate ? (
            <button className="px-5 py-2 m-5 bg-green-500 text-md text-white font-medium ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 ">
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
