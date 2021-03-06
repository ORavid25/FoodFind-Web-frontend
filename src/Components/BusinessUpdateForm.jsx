import React, { useState } from "react";
import { FoodFindContext } from "../context";
import {
  UpdateBusinessUser,
  GetBusinessUserById,
  UpdateBusinessUserPass,
} from "../api/BusinessUserController";
import Loader from "../Components/Loader";
import {
  storeLocalStorageData,
  retrieveLocalStorageData,
} from "../utility/localStorage";
import { BusinessItemController } from "../utility/urls";

const BusinessUpdateForm = () => {
  const { user, setUser } = React.useContext(FoodFindContext);
  const [businessLicense, setBusinessLicense] = React.useState("");
  const [businessName, setBusinessName] = React.useState("");
  const [businessAddress, setBusinessAddress] = React.useState("");
  const [businessPhone, setBusinessPhone] = React.useState("");
  const [businessDescription, setBusinessDescription] = React.useState("");
  const [businessStatus, setBusinessStatus] = React.useState(true);
  const [prevPass, setPrevPass] = React.useState("");
  const [newPass, setNewPass] = React.useState("");
  const [base64, SetBase64] = useState("");
  const [imageRes, SetImageRes] = useState(undefined);


  const renderBusinessDetails = async () => {
    const retrive = await retrieveLocalStorageData("user");
    const res = await GetBusinessUserById(user.businessID);
    if (res !== null) {
      setUser(res);
    }
  };

  const handleBusinessStatus = (e) => {
    if (e.target.value === "notActive") {
      setBusinessStatus(false);
    } else {
      setBusinessStatus(user.businessStatus);
    }
  };

  const handleCheckBusinessUser = () => {
    if (businessLicense === "" ) {
      setBusinessLicense(user.businessLicense);
    }
    if (businessName === "") {
      setBusinessName(user.businessName);
    }
    if (businessAddress === "") {
      setBusinessAddress(user.businessAddress);
    }
    if (businessPhone === "") {
      setBusinessPhone(user.businessPhone);
    }
    if (
      businessDescription === ""
    ) {
      setBusinessDescription(user.businessDescription);
    }
  };

  const callUpdateFunc = async () => {
    
    if (
      user.businessID !== null &&
      businessLicense !== "" &&
      businessName !== "" &&
      businessAddress !== "" &&
      businessPhone !== "" &&
      businessDescription !== ""
    ) {
      const res = await UpdateBusinessUser({
        businessID: user.businessID,
        businessLicense: businessLicense,
        businessName: businessName,
        businessAddress: businessAddress,
        businessPhone: businessPhone,
        businessDescription: businessDescription,
        businessStatus: businessStatus,
      });
      if (res === 1) {
        storeLocalStorageData("user", {
          businessAddress: businessAddress,
          businessCreatedDate: user.businessCreatedDate,
          businessDescription: businessDescription,
          businessEmail: user.businessEmail,
          businessID: user.businessID,
          businessLicense: businessLicense,
          businessLogo: user.businessLogo,
          businessName: businessName,
          businessPhone: businessPhone,
          businessStatus: businessStatus,
          menuImage: user.menuImage,
          userID: user.userID,
        });
        renderBusinessDetails();
        alert("?????????????? ???????????? ????????????!");
      }
    }

  }

  const handleUpdateDetails = async () => {
    handleCheckBusinessUser();
    callUpdateFunc();
  };

  const handleUpdatePass = async () => {
    if (prevPass.length > 7 && newPass.length > 7) {
      const res = await UpdateBusinessUserPass(prevPass, newPass);
      if (res === 1) {
        alert("?????????? ?????????????? ????????????!");
      } else {
        alert("?????????? ???? ??????????!");
      }
    } else alert("?????????? ???????? ????????");
  };

  const ConvertToBase64 = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      SetBase64(reader.result.split(";base64,")[1]);
    };
    reader.readAsDataURL(file);
  };

  const UploadImage = async () => {
    if(base64==="")
    {
      alert('???? ?????????? ??????????')
      return;
    }
    let req = {
      name: user.userID,
      folder: `businessUser`,
      base64: base64,
    };

    let result = await fetch(BusinessItemController.UploadItemImage, {
      method: "POST",
      body: JSON.stringify(req),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    
      let data = await result.json();
      SetImageRes(data.path);
      alert('???????? ?????? ?????????? ????????????!')
    
  };


  return (
    <div className="container w-11/12 bg-gray-200 shadow-lg rounded-xl p-2 ring-4 ring-opacity-90 ring-green-200 ">
      <div>
        <div dir="rtl" className=" px-8 mt-6">
          <h1 className="mb-1 text-2xl font-medium leading-6">?????????? ???? ????????</h1>
          <h2 className="font-medium mt-5 text-xl text-gray-600">
            ?????? ???????? ?????????? ???? ???????????? ?????????????? ?????? ?????????? ??????????????
          </h2>
        </div>
        {user === null || user === undefined ? (
          <Loader />
        ) : (
          <div dir="rtl" className="flex flex-col mt-11  p-5">
            <div className="flex justify-around items-center mb-5 ">
              <h1 className="w-28 text-xl font-medium">???????? ??????</h1>
              <input
                className="w-80 p-2"
                type="text"
                defaultValue={user.businessLicense}
                onChange={(e) => {
                  setBusinessLicense(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-around items-center mb-5 ">
              <h1 className="w-28 text-xl font-medium">???? ????????</h1>
              <input
                className="w-80 p-2"
                type="text"
                defaultValue={user.businessName}
                onChange={(e) => {
                  setBusinessName(e.target.value);
                }}
              />
            </div>

            <div className="flex justify-around items-center mb-5 ">
              <h1 className="w-28 text-xl font-medium">?????????? ??????</h1>
              <input
                className="w-80 p-2"
                type="text"
                defaultValue={user.businessAddress}
                onChange={(e) => {
                  setBusinessAddress(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-around items-center mb-5 ">
              <h1 className="w-28 text-xl font-medium">??????????</h1>
              <input
                className="w-80 p-2"
                type="text"
                defaultValue={user.businessPhone}
                onChange={(e) => {
                  setBusinessPhone(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-around items-center mb-5 ">
              <h1 className="w-28 text-xl font-medium">?????????? ????????</h1>
              <input
                className="w-80 p-2"
                type="text"
                defaultValue={user.businessDescription}
                onChange={(e) => {
                  setBusinessDescription(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-around items-center mb-4 ">
              <h1 className="w-28 text-xl font-medium">?????????? ??????</h1>
              <h2 className="w-28 absolute ml-48 text-lg text-gray-600">
                ????????/???? ????????
              </h2>
              <select
                className="flex justify-between items-center w-80 p-2 text-xl font-medium px-4 py-2 rounded"
                onChange={handleBusinessStatus}
              >
                <option value="choose"> ?????? </option>
                <option value="notActive">???? ????????</option>
              </select>
            </div>

           

            <div className="flex justify-center items-center mt-4 h-20">
              <button
                className="bg-green-500 w-44 text-xl text-white font-medium py-1 ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300"
                onClick={handleUpdateDetails}
              >
                ?????????? ??????????
              </button>
            </div>

            <div className="flex justify-evenly items-center p-2 m-2">
              <h1 className="w-28 text-xl font-medium">?????????? ???????? ??????</h1>
              <input
              type="file"
              className="w-60"
              onChange={(event) => {
                ConvertToBase64(event);
              }}
            />
            <button
                className="bg-green-500 w-40 text-md text-white font-medium ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300"
                onClick={UploadImage}
              >
               ?????????? ???????? ??????
              </button>
            </div>

            <div className="flex justify-around items-center mb-5 mt-5 ">
              <h1 className="w-34 text-xl font-medium">?????????? ??????????</h1>
              <input
                className="w-80 p-2"
                type="text"
                onChange={(e) => {
                  setPrevPass(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-around items-center mb-5 ">
              <h1 className="w-34 text-xl font-medium">?????????? ????????</h1>
              <input
                className="w-80 p-2"
                type="text"
                onChange={(e) => {
                  setNewPass(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center h-20">
              <button
                className="bg-green-500 w-44 text-xl text-white font-medium py-1 ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 "
                onClick={handleUpdatePass}
              >
                ?????????? ??????????
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessUpdateForm;
