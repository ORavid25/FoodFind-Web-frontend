import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Layout from "../Components/Layout";
import FormContainer from "../Components/FormContainer";
import { HiPlusSm } from "react-icons/hi";
import { AddTopping } from "../Components/AddTopping";

/////////////////////////////////////////////////!!!!!!!!!

const BusinessMenu = () => {
  const [addItem, setAddItem] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  const [toppingItem, setToppingItem] = useState(false);
  const [ifOpenTopping, setIfOpenTopping] = useState(false);
  const [addButtonClicked, setAddButtonClicked] = useState(false);
  const [toppingAgreed, setToppingAgreed] = useState(false);

  const handleOpenToppingMenu = (data) => {
    console.log("data=", data);
    setIfOpenTopping(data);
  };




  console.log("addButtonClicked=",addButtonClicked);
  return (
    <Layout>
        <Navbar />
      <div className="ml-44">
        <div className="flex h-screen flex-col  bg-blue-400">
          <div dir="rtl" className="w-full flex justify-around items-center">
            <button
              className="p-3 m-2 bg-red-600 text-2xl rounded-xl"
              onClick={() => {
                setAddButtonClicked(!addButtonClicked);
                setItemsCount(itemsCount + 1);
              }}
            >
              הוסף מוצר חדש
            </button>
            <button className="p-3 m-2 bg-red-600  text-2xl rounded-xl">
              מחיקת מוצר
            </button>
          </div>

          <div className="bg-red-400 flex h-10 w-full justify-end items-center rounded-t-xl">
            <div className="flex m-5 justify-end items-center">
              <h1 className="ml-5 text-xl">הוספת מוצר חדש</h1>
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

          {/* לבדוק איך להעביר את הסטייט של הלחיצה */}

          {/* {[...Array(itemsCount)].map((_,i) => <AddItem key={i}/> )} */}

          {addItem ? (
            <div className="flex w-full h-auto bg-green-400 flex-col justify-end">
              <FormContainer open={handleOpenToppingMenu} />
              {ifOpenTopping ? (
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

              {toppingItem ? (
                <div className="bg-red-600 w-full h-full">
                  <AddTopping />
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}

          {toppingAgreed === true ? <div className="bg-red-400 flex h-10 w-full justify-end items-center">
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
                </div>: ""}
        </div>
      </div>
    </Layout>
  );
};

export default BusinessMenu;
