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
  const [toppingAgreed, setToppingAgreed] = useState(false);
  const [itemData, setItemData] = useState({});
  const [businessItems,setBusinessItems] = useState([]);
  const [businessToppings,setBusinessToppings] = useState([]);


  const handleOpenToppingMenu = (data) => {
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
      const items = res["items"];
      const toppings =res["toppings"];
      await setBusinessItems(items)
      await setBusinessToppings(toppings)
    })();
  }, []);


  return (
    <Layout>
      <Navbar />
      <div className="ml-44">
        <div className="flex h-screen flex-col">
          <div className="bg-green-400 flex h-10 w-11/12 mx-16 justify-end items-center rounded-t-xl mt-10 ">
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

         
            <ItemsDisplay businessItems={businessItems} businessToppings={businessToppings}/>
         
          
        </div>
      </div>
    </Layout>
  );
};

export default BusinessMenu;
