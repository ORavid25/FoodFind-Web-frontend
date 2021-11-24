import React, { useState, useEffect } from "react";
import { InsertItemOfBusinessUser } from "../api/BusinessItemController";
import { retrieveLocalStorageData } from "../utility/localStorage";
import { BusinessItemController } from "../utility/urls";

const FormContainer = (props) => {
  const [base64, SetBase64] = useState("");
  const [imageRes, SetImageRes] = useState(undefined);

  const [inputs, setInputs] = useState({
    itemName: "",
    itemPrice: "",
    comment: "",
  });

  const [id, setID] = useState("");

  const ConvertToBase64 = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      SetBase64(reader.result.split(";base64,")[1]);
    };
    reader.readAsDataURL(file);
    console.log("file=", file);
  };

  //Gets a random name for image save.
  //מחזיר סטרינג רנדומלי לשמירה של שם התמונות
  const getRandomNameForSave = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const UploadImage = async () => {
    let randomName = await getRandomNameForSave(50);

    let req = {
      name: id + "_" + "item_"+randomName,
      folder: `businessItems`,
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
    console.log("data=", data);
    console.log("data.path=", data.path);
    SetImageRes(data.path);
  };

  useEffect(() => {
    (async () => {
      const userData = await retrieveLocalStorageData("user");
      // console.log(userData);
      const id = userData.businessID;
      setID(id);
    })();
  }, []);

  return (
    <div className="max-h-full w-11/12 mx-16 rounded-xl  b-white">
      <div
        dir="rtl"
        className=" items-center justify-evenly h-full  bg-gray-200"
      >
        <h1 className="text-xl px-5 pt-3">הכנס את הפרטים הנדרשים</h1>
        <div className="items-center p-2">
          <input
            className="m-5 px-3 py-0.5 rounded-sm text-center"
            placeholder="שם מוצר"
            onChange={(e) => {
              setInputs({ ...inputs, itemName: e.target.value });
            }}
          />
          <input
            className="m-5 px-3 py-0.5 rounded-sm text-center"
            placeholder="מחיר מוצר"
            onChange={(e) => {
              setInputs({ ...inputs, itemPrice: e.target.value });
            }}
          />
          <input
            className="m-5 px-3 py-0.5 rounded-sm text-center"
            placeholder="תיאור מוצר"
            onChange={(e) => {
              setInputs({ ...inputs, comment: e.target.value });
            }}
          />
          <div className="bg-gray-300 flex justify-around items-center p-5 rounded-lg">
            <h1 className="mx-5 text-lg leading-6 font-medium">
              העלאת תמונה למוצר
            </h1>
            <input
              type="file"
              className="w-60"
              onChange={(event) => {
                ConvertToBase64(event);
              }}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="px-5 py-2 m-5 bg-green-500 text-md text-white font-medium ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 "
            onClick={async () => {
              if (inputs.itemName !== "" && inputs.itemPrice !== "") {
                UploadImage();

                const res = await InsertItemOfBusinessUser(
                  inputs.itemName,
                  id,
                  inputs.itemPrice,
                  inputs.comment,
                  imageRes
                );
                // console.log("result =",res);
                //  await setIsClicked(!isClicked);
                //  await props.open(isClicked);
                await props.dataItemID(res);
                await props.GetAllItemsAndToppings();
              } else {
                alert(
                  "נא למלא את הפרטים, מלבד תיאור מוצר שאינו חובה אך מומלץ!"
                );
              }
            }}
          >
            אשר
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
