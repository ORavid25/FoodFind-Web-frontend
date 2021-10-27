import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Layout from "../Components/Layout";
import ItemsDisplay from "../Components/ItemsDisplay"
import FormContainer from "../Components/FormContainer";
import { HiPlusSm } from "react-icons/hi";
import { AddTopping } from "../Components/AddTopping";
import {
  GetBusinessItemsByBusinessID,
  GetBusinessItemNameById,
} from "../api/BusinessItemController";
import { retrieveLocalStorageData } from "../utility/localStorage";

/////////////////////////////////////////////////!!!!!!!!!

const BusinessMenu = () => {
  const [addItem, setAddItem] = useState(false);
  const [toppingItem, setToppingItem] = useState(false);
  const [ifOpenTopping, setIfOpenTopping] = useState(false);
  const [addButtonClicked, setAddButtonClicked] = useState(false);
  const [toppingAgreed, setToppingAgreed] = useState(false);
  const [itemData, setItemData] = useState({});

  const handleOpenToppingMenu = (data) => {
    console.log("data=", data);
    setIfOpenTopping(data);
  };

  const upliftData = async (data) => {
    await setItemData(data);
  };

  useEffect(() => {
    (async () => {
      const storage = await retrieveLocalStorageData("user");
      const businessID = storage.businessID;
      const res = await GetBusinessItemsByBusinessID(businessID);
      console.log(res);
      const res2 = await GetBusinessItemNameById(res[0].itemID);
      console.log(res2);
    })();
  }, []);

  console.log("addButtonClicked=", addButtonClicked);
  return (
    <Layout>
      <Navbar />
      <div className="ml-44 bg-blue-400">
        <div className="flex h-screen flex-col">
          <div dir="rtl" className="w-full flex justify-around items-center">
            <button
              className="p-3 m-5 bg-green-500 w-52 text-2xl text-white font-medium py-4  ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300"
              onClick={() => {
                setAddButtonClicked(!addButtonClicked);
              }}
            >
              הוסף מוצר חדש
            </button>
            <button className="p-3 m-5 bg-green-500 w-52 text-2xl text-white font-medium py-4  ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 ">
              לעדכון מוצרים
            </button>
          </div>

          <div className="bg-green-400 flex h-10 w-11/12 mx-16 justify-end items-center rounded-t-xl">
            <div className="flex m-5 justify-end items-center">
              <h1 className="ml-5 text-2xl">הוספת מוצר חדש</h1>
              <button
                className="flex justify-center items-center w-12 h-12 "
                onClick={() => {
                  setAddItem(!addItem);
                }}
              >
                <HiPlusSm />
              </button>
            </div>

          </div>

          {/* {[...Array(itemsCount)].map((_,i) => <AddItem key={i}/> )} */}

          
          

          {addItem ? (
            <div className="">
              <FormContainer
                open={handleOpenToppingMenu}
                dataItemID={upliftData}
              />
              {ifOpenTopping ? (
                <div className="bg-green-400 flex h-10 w-11/12 mx-16 justify-end items-center">
                  <div className="flex m-5 flex-wrap items-center">
                    <h1 className="ml-5 text-xl">הוספת תוספת חדשה</h1>
                    <button
                      className="flex justify-center items-center w-12 h-12 "
                      onClick={() => {
                        setToppingItem(!toppingItem);
                      }}
                    >
                      <HiPlusSm />
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}

              {toppingItem ? <AddTopping data={itemData} /> : ""}
            </div>
          ) : (
            ""
          )}

          {toppingAgreed === true ? (
            <div className="bg-red-400 flex h-10 w-full justify-end items-center">
              <div className="flex m-5 flex-wrap items-center">
                <h1 className="ml-5 text-2xl">הוספת תוספת חדשה</h1>
                <button
                  className="flex justify-center items-center w-12 h-12 "
                  onClick={() => {
                    setToppingItem(!toppingItem);
                  }}
                >
                  <HiPlusSm />
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

         
            <ItemsDisplay/>
         
          
        </div>
      </div>
    </Layout>
  );
};

export default BusinessMenu;
