import React, { useState } from "react";
import { HiPlusSm } from "react-icons/hi";

const FormContainer = (props) => {
  const [addItem, setAddItem] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  const [inputs, setInputs] = useState({
    itemName:"",
    businessID:"",
    itemPrice:"",
    comment:"",
  })

console.log(inputs);
  return (
    <div className="w-full max-h-96 rounded-xl  bg-pink-500">
      <div>
        <div
          dir="rtl"
          className=" items-center justify-evenly h-36  bg-yellow-500"
        >
          <h1 className="text-xl p-5">הכנס את הפרטים הנדרשים</h1>
          <input className="m-5 px-3 py-0.5 rounded-sm text-center" placeholder="שם מוצר" onChange={(val) => {
            setInputs({...inputs,itemName: val})
          }}/>
          <input className="m-5 px-3 py-0.5 rounded-sm text-center" placeholder="מחיר מוצר" onChange={(val) => {
            setInputs({...inputs,itemPrice: val})
          }}/>
          <input className="m-5 px-3 py-0.5 rounded-sm text-center" placeholder="תיאור מוצר" onChange={(val) => {
            setInputs({...inputs,comment: val})
          }}/>
          <button className="bg-green-500 px-6 rounded-lg text-lg" onClick={async ()=>{
           await setIsClicked(!isClicked);
           await props.open(isClicked);
          }}>אשר</button>
      
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
