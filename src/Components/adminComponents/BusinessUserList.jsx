import React, { useState, useEffect } from "react";
import Loader from "../Loader";

const BusinessUserList = ({ businessUsersList }) => {
  return (
    <div className=" bg-gray-200 w-11/12 h-5/6 flex flex-col items-center rounded-lg mt-5 p-4 overflow-y-auto">
      {/* כותרת */}
      <div className="w-full p-5 flex items-center justify-center text-2xl rounded-lg bg-green-400">
        <h1>משתמשים בעלי עסק</h1>
      </div>
      <div className="flex w-full flex-col items-center p-3">
        <div className="flex flex-row-reverse w-full text-xl p-3 justify-between ml-2">
          <h1>קוד משתמש</h1>
          <h1>שם משתמש</h1>
          <h1>איימיל</h1>
          <h1>תאריך יצירה</h1>
        </div>

        {businessUsersList === null ? <Loader/> : businessUsersList.map((user) => {
          return (
            <div className="bg-gray-50 w-full flex justify-between my-2 flex-row-reverse p-5 text-lg leading-6 rounded-lg overflow-auto ring-4 ring-green-500 hover:bg-green-300">
              <h1>{user.businessID}</h1>
              <h1>{user.businessName}</h1>
              <h1>{user.businessEmail}</h1>
              <h1>{user.businessCreatedDate}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BusinessUserList;
