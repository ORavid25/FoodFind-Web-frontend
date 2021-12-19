import React, { useState, useEffect, useContext } from "react";
import {
  UpdateItemOfBusiness,
  UpdateToppingToActive,
  UpdateToppingToUnActive,
  GetBusinessItemsByBusinessID,
} from "../api/BusinessItemController";
import { GrFormClose } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { AddTopping } from "./AddTopping";
import Modal from "./Modal";
import { FoodFindContext } from "../context";
import { BusinessItemController } from "../utility/urls";

const EditBusinessItems = ({ ItemForEdit, itemToppings, setItemsToppings }) => {
  const { user } = useContext(FoodFindContext);
  const [itemPrice, setItemPrice] = useState(0);
  const [itemComment, setItemComment] = useState("");
  const [addToppingClicked, setAddToppingClicked] = useState(false);
  const [currentToppingForUpdate, setCurrentToppingForUpdate] = useState(false);
  const [updateTopping, setUpdateTopping] = useState(false);
  const [base64, SetBase64] = useState("");
  const [imageRes, SetImageRes] = useState(undefined);

  useEffect(() => {
    setItemPrice(ItemForEdit.itemPrice);
    setItemComment(ItemForEdit.comment);
    getNameForUploadImg();
  }, []);

  //get img name for update image in the server
  const getNameForUploadImg = async () => {
    let splitURL = ItemForEdit.itemImg.split('/');
    let res = splitURL["5"].replace(".jpg", "")
    return res;
  }

  const ConvertToBase64 = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      SetBase64(reader.result.split(";base64,")[1]);
    };
    reader.readAsDataURL(file);
  };

  // upload a new image for item with the same name in the server
  const UploadImage = async () => {
    if(base64===""){
      alert('לא נבחרה תמונה למוצר')
      return;
    }
    let imageName = await getNameForUploadImg();

    let req = {
      name: imageName,
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
    if(result!==null && result !== undefined){
      alert('עדכון תמונת מוצר בוצעה בהצלחה')
      let data = await result.json();
      SetImageRes(data.path);
    }else{
      alert('שגיאה במהלך ההעלאת תמונת מוצר')
    }

    
  };

  //get the corrent list of toppings for render it on screen
  const renderDataToppings = async () => {
    if (itemToppings) {
      const res = await GetBusinessItemsByBusinessID(user.businessID);
      const toppings = res["toppings"];
      const filtered = toppings.filter(
        (item) => item.itemID === ItemForEdit.itemID
      );
      console.log("filtered", filtered);
      setItemsToppings(filtered);
    }
  };

  //handle the click button for updating item
  const handleUpdateBusinessItem = async () => {
    if (
      itemPrice !== ItemForEdit.itemPrice ||
      itemComment !== ItemForEdit.comment
    ) {
      const res = await UpdateItemOfBusiness(
        ItemForEdit.businessID,
        ItemForEdit.itemID,
        itemPrice,
        itemComment
      );
    }
  };

  //function to update active topping for item to unactive
  const HandleToppings = ({ item }) => {
    return (
      <div className="flex flex-row justify-center items-center p-2">
        <div className={`text-xl font-semibold rounded-lg w-40  py-2 flex justify-around items-center
            ${item.isActive ? 'bg-yellow-200' : 'bg-red-200'}`}>
          <button
            onClick={async () => {
              if (item.isActive) {
                const res = await UpdateToppingToUnActive(
                  item.businessID,
                  item.itemID,
                  item.toppingID
                );
                renderDataToppings();
              }
              else {
                const res = await UpdateToppingToActive(
                  item.businessID,
                  item.itemID,
                  item.toppingID
                );
                renderDataToppings();
              }
            }}
          >
            {item.isActive?<GrFormClose size={25}/>: <AiOutlinePlus size={25} />}
          </button>
          <button
            onClick={async () => {
              await setUpdateTopping(!updateTopping);
              await setCurrentToppingForUpdate(item);
            }}
          >
            {item.toppingName}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-around w-11/12 p-5 h-max rounded-t-xl ">
      <div className="rounded-t-xl bg-gray-200 p-2">
        <h1 className="text-lg font-medium ">פירוט המוצרים והתוספות</h1>
        <h2 className="text-md font-normal text-gray-500">
          כאן ניתן לבצע שינויים במוצר ובתוספות המוצר
        </h2>
      </div>
      <div className=" flex justify-around items-center p-2 bg-gray-200">
        <h1 className="text-xl font-semibold">{ItemForEdit.itemName}</h1>
      </div>
      <div className="flex max-h-40 justify-evenly flex-row p-2 font-semibold text-lg rounded-b-xl bg-gray-200 ">
        <div className="p-5" >
          <h1>מחיר מוצר</h1>
          <input
            type="number"
            defaultValue={ItemForEdit.itemPrice}
            onChange={(e) => {
              setItemPrice(e.target.value);
            }}
            className="h-8 w-40 rounded-sm"
          />
        </div>

        <div className=" p-5" >
          <h1>תיאור מוצר</h1>
          <textarea
            defaultValue={ItemForEdit.comment}
            className="h-16 w-56 rounded-md"
            onChange={(e) => {
              setItemComment(e.target.value);
            }}
          />
        </div>
        <button
          type="button"
          className="p-2 mt-12 bg-green-500 w-36 h-16 text-xl text-white font-medium  ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 "
          onClick={handleUpdateBusinessItem}
        >
          עדכון
        </button>
      </div>

      <div className="flex justify-evenly items-center p-2 m-2 ">
        <h1 className="w-40 text-lg font-medium font-semibold">עדכון תמונת מוצר</h1>
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
          עדכון תמונת מוצר
        </button>
      </div>

      <div className="mt-10 max-h-96">
        <div>
          <h1 className="font-semibold text-lg mx-5">
            התוספות של המוצר {ItemForEdit.itemName}
          </h1>
          <h2 className="text-md font-normal text-gray-500 mx-5">
            כאן ניתן לראות את כל התוספות
          </h2>
        </div>
        <button
          type="button"
          className="p-2 m-5 bg-green-500 w-44 text-xl text-white font-small ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300"
          onClick={() => {
            setAddToppingClicked(!addToppingClicked);
          }}
        >
          להוספת תוספת
        </button>
        {/* Open Add Toppings */}
        {addToppingClicked && (
          <AddTopping
            data={ItemForEdit}
            renderDataToppings={renderDataToppings}
            setAddToppingClicked={setAddToppingClicked}
          />
        )}
        {itemToppings.length === 0 ? (
          <div className="w-full h-54 text-xl font-semibold flex justify-center item-center mt-">
            אין תוספות למוצר זה
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-x-20 gap-y-5 max-h-60 p-5 rounded-b-lg justify-items-center bg-gray-200  overflow-y-scroll overflow-x-hidden designedScroll">
            {itemToppings ? (
              itemToppings.map((item) => {
                return <HandleToppings key={item.toppingID} item={item} />;
              })
            ) : (
              <div></div>
            )}
          </div>
        )}
        {/* modal to check if is for update or for edit by parameter */}
        <Modal showModal={updateTopping} setShowModal={setUpdateTopping}>
          <AddTopping
            data={currentToppingForUpdate}
            ifUpdate={true}
            renderDataToppings={renderDataToppings}
            setUpdateTopping={setUpdateTopping}
          />
        </Modal>
      </div>
    </div>
  );
};

export default EditBusinessItems;
