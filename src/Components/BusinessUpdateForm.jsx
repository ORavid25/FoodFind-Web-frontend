import React from "react";
import { HiChevronDown } from "react-icons/hi";

const businessUpdateForm = () => {
  return (
    <div className="w-8/12 bg-gray-200 rounded-xl p-5">
      {/* title div */}
      <div dir="rtl" className=" px-8 mt-6">
        <h1 className="mb-1 text-2xl font-medium leading-6">עדכון דף עסקי</h1>
        <h2 className="font-medium mt-5 text-xl text-gray-600">
          כאן ניתן לשנות את הפרטים העסקיים ואת סטטוס הפעילות
        </h2>
      </div>
      {/* inputs div */}
      <div dir="rtl" className="flex flex-col mt-24">
        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-28 text-xl font-medium">מספר עסק</h1>
          <input className="w-80 p-2" type="text" />
        </div>
        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-28 text-xl font-medium">שם העסק</h1>
          <input className="w-80 p-2" type="text" />
        </div>
        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-28 text-xl font-medium">סיסמא</h1>
          <input className="w-80 p-2" type="text" />
        </div>
        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-28 text-xl font-medium">אימות סיסמא</h1>
          <input className="w-80 p-2" type="text" />
        </div>
        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-28 text-xl font-medium">כתובת עסק</h1>
          <input className="w-80 p-2" type="text" />
        </div>
        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-28 text-xl font-medium">טלפון</h1>
          <input className="w-80 p-2" type="text" />
        </div>
        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-28 text-xl font-medium">תיאור העסק</h1>
          <input className="w-80 p-2" type="text" />
        </div>
        <div className="flex justify-around items-center mb-4 ">
          <h1 className="w-28 text-xl font-medium">סטטוס עסק</h1>
          <h2 className="w-28 absolute ml-48 text-lg text-gray-600">פעיל/לא פעיל</h2>
          <button className="flex justify-between items-center w-80 p-2 text-xl font-medium bg-blue-300 px-4 py-2 rounded">
            בחר
            <HiChevronDown />
          </button>
          {/* <div className="bg-gray-200 flex flex-col rounded mt-1 p2 text-sm hidden">
                    <a href="#">פעיל</a>
                    <a href="#">לא פעיל</a>
                  </div> */}
        </div>

        <div className="flex justify-center items-center mt-20">
          <button className="bg-green-500 w-40 text-xl text-white font-medium py-2 ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 ">
            עדכון פרטים
          </button>
        </div>
      </div>
    </div>
  );
};

export default businessUpdateForm;
