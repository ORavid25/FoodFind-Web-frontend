import React, { useState,useContext } from "react";
import FoodFindLogo from "../assats/foodfind.png"
import { FoodFindContext } from "../context";

const BusinessRegister = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [personID, setPersonID] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");

    const [businessUser,setBusinessUser] = useState({});

    // const {businessUser,setBusinessUser} = useContext(FoodFindContext);

    
    
    const saveUser = () => {
      setBusinessUser({
          firstName,
          lastName,
          businessName,
          personID,
          phone,
          address,
          password,
          description
      })
    }

    console.log(businessUser);





  return (
    <div className="flex bg-green-400 justify-center items-center w-screen h-screen">
      <div className="flex container flex-col  mx-5 my-5 w-4/5 h-5/6 rounded-xl shadow-lg bg-gray-200">
        {/* title div */}
        <div dir="rtl" className=" px-8 mt-6 ">
          <h1 className="mb-1 text-2xl font-medium leading-6">
            טופס הרשמה לעסק חדש
          </h1>
          <div className="flex justify-end items-center bg-red-800">
            <img src={FoodFindLogo} className="w-48 my-5 absolute animate-bounceSlow duration-500 " alt="" />
          </div>
          <h2 className="font-medium mt-5 text-xl text-gray-600">
            נא מלא את הטופס במלואו , לאחר מכן תועבר לפנאל הניהול
          </h2>
          
        </div>
        {/* inputs div */}
        <div dir="rtl" className="flex flex-col mt-11  p-5">
          <div className="flex justify-around items-center mb-5 ">
            <h1 className="w-28 text-xl font-medium">שם פרטי</h1>
            <input className="w-80 p-2" type="text" onChange={(val)=> {
                setFirstName(val)
            }} />
          </div>
          <div className="flex justify-around items-center mb-5 ">
            <h1 className="w-28 text-xl font-medium">שם משפחה</h1>
            <input className="w-80 p-2" type="text" onChange={(val)=> {
                setLastName(val)
            }} />
          </div>
          <div className="flex justify-around items-center mb-5 ">
            <h1 className="w-28 text-xl font-medium">שם העסק</h1>
            <input className="w-80 p-2" type="text" onChange={(val)=> {
                setBusinessName(val)
            }}/>
          </div>
          <div className="flex justify-around items-center mb-5 ">
            <h1 className="w-28 text-xl font-medium">תז / ח"פ</h1>
            <input className="w-80 p-2" type="text" onChange={(val)=> {
                setPersonID(val)
            }}/>
          </div>
          <div className="flex justify-around items-center mb-5 ">
            <h1 className="w-28 text-xl font-medium">טלפון</h1>
            <input className="w-80 p-2" type="text" onChange={(val)=> {
                setPhone(val)
            }}/>
          </div>
          <div className="flex justify-around items-center mb-5 ">
            <h1 className="w-28 text-xl font-medium">כתובת עסק</h1>
            <input className="w-80 p-2" type="text" onChange={(val)=> {
                setAddress(val)
            }} />
          </div>
          <div className="flex justify-around items-center mb-5 ">
            <h1 className="w-28 text-xl font-medium">סיסמא</h1>
            <input className="w-80 p-2" type="text" onChange={(val)=> {
                setPassword(val)
            }} />
          </div>

          <div className="flex justify-around items-center mb-5 ">
            <h1 className="w-28 text-xl font-medium">תיאור העסק</h1>
            <textarea className="w-80 p-2" type="text" onChange={(val)=> {
                setDescription(val)
            }} />
          </div>

          <div className="flex justify-center items-center mt-2  h-24">
            <button className="bg-green-500 w-52 text-2xl text-white font-medium py-4  ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 ">
              להרשמה
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegister;
