import React, { useState,useEffect } from "react";
import { HiPlusSm } from "react-icons/hi";
import {InsertItemOfBusinessUser} from "../api/BusinessItemController"
import {retrieveLocalStorageData} from "../utility/localStorage";

const FormContainer = (props) => {
  const [addItem, setAddItem] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  const [inputs, setInputs] = useState({
    itemName:"",
    itemPrice:"",
    comment:"",
  })

  const [id,setID] = useState("")




  useEffect(() => {
    (async () => {
      const userData = await retrieveLocalStorageData("user");
      console.log(userData);
      const id = userData.businessID;
      setID(id)
      
    })();
  }, []);



console.log("inputs=",inputs);
  return (
    <div className="w-full max-h-96 rounded-xl  bg-pink-500">
      <div>
        <div
          dir="rtl"
          className=" items-center justify-evenly h-36  bg-yellow-500"
        >
          <h1 className="text-xl p-5">הכנס את הפרטים הנדרשים</h1>
          <input className="m-5 px-3 py-0.5 rounded-sm text-center" placeholder="שם מוצר" onChange={(e) => {
            setInputs({...inputs,itemName: e.target.value})
          }}/>
          <input className="m-5 px-3 py-0.5 rounded-sm text-center" placeholder="מחיר מוצר" onChange={(e) => {
            setInputs({...inputs,itemPrice: e.target.value})
          }}/>
          <input className="m-5 px-3 py-0.5 rounded-sm text-center" placeholder="תיאור מוצר" onChange={(e) => {
            setInputs({...inputs,comment: e.target.value})
          }}/>
          <button className="bg-green-500 px-6 rounded-lg text-lg" onClick={async ()=>{
          const res= await InsertItemOfBusinessUser(inputs.itemName,id,inputs.itemPrice,inputs.comment)
          console.log(res);
           await setIsClicked(!isClicked);
           await props.open(isClicked);
          }}>אשר</button>
      
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
