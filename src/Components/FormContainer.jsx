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
    <div className="max-h-96 w-11/12 mx-16 rounded-xl  b-white">
      <div>
        <div
          dir="rtl"
          className=" items-center justify-evenly h-28  bg-gray-200"
        >
          <h1 className="text-xl px-5 pt-3">הכנס את הפרטים הנדרשים</h1>
          <input className="m-5 px-3 py-0.5 rounded-sm text-center" placeholder="שם מוצר" onChange={(e) => {
            setInputs({...inputs,itemName: e.target.value})
          }}/>
          <input className="m-5 px-3 py-0.5 rounded-sm text-center" placeholder="מחיר מוצר" onChange={(e) => {
            setInputs({...inputs,itemPrice: e.target.value})
          }}/>
          <input className="m-5 px-3 py-0.5 rounded-sm text-center" placeholder="תיאור מוצר" onChange={(e) => {
            setInputs({...inputs,comment: e.target.value})
          }}/>
          <button className="px-5 py-2 m-5 bg-green-500 text-md text-white font-medium ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 " onClick={async ()=>{
            if(inputs.itemName!==""&&inputs.itemPrice!==""){
              const res= await InsertItemOfBusinessUser(inputs.itemName,id,inputs.itemPrice,inputs.comment)
              console.log("result =",res);
               await setIsClicked(!isClicked);
               await props.open(isClicked);
               await props.dataItemID(res);
            }else{
              alert('נא למלא את הפרטים, מלבד תיאור מוצר שאינו חובה אך מומלץ!')
            }
    
          }}>אשר</button>
      
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
