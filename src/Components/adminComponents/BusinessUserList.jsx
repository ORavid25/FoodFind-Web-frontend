import React,{useState,useEffect} from "react";

const BusinessUserList = () => {



  return (
    <div className="container bg-gray-200 w-4/12 h-5/6 flex flex-col items-center rounded-lg">
      {/* כותרת */}
      <div className="w-full p-5 flex items-center justify-center text-2xl rounded-t-lg bg-red-500">
        <h1>משתמשים בעלי עסק</h1>
      </div>
      <div className="flex w-full flex-col items-center p-3">
        <div className="flex flex-row-reverse w-full text-xl p-3 justify-between ml-2">
          <h1>קוד משתמש</h1>
          <h1>שם משתמש</h1>
          <h1>איימיל</h1>
          <h1>תאריך יצירה</h1>
        </div>
        <div className="bg-gray-50 w-full flex justify-between my-2 flex-row-reverse p-5 text-lg leading-6 rounded-lg ring-4 ring-green-500 hover:bg-pink-400">
          {/* {list.map((user)=>{
              return (
                <div>
                <h1>{user.businessID}</h1>
                <h1>{user.businessName}</h1>
                <h1>{user.businessEmail}</h1>
                <h1>{user.businessCreatedDate}</h1>
                </div>
              )
          })} */}
          
 
        </div>
      </div>
    </div>
  );
};

export default BusinessUserList;
