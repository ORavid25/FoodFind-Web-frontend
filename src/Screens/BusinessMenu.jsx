import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Layout from "../Components/Layout";
import ItemsDisplay from "../Components/ItemsDisplay"
import FormContainer from "../Components/FormContainer";
import Loader from "../Components/Loader"
import { HiPlusSm } from "react-icons/hi";
import {
  GetBusinessItemsByBusinessID,
} from "../api/BusinessItemController";
import { retrieveLocalStorageData } from "../utility/localStorage";

/////////////////////////////////////////////////!!!!!!!!!

const BusinessMenu = () => {
  const [addItem, setAddItem] = useState(false);
  const [itemData, setItemData] = useState({});
  const [businessItems, setBusinessItems] = useState([]);
  const [businessToppings, setBusinessToppings] = useState([]);

  const upliftData = async (data) => {
    await setItemData(data);
  };

  //GET ALL ITEMS && TOPPING OF BUSINESS 
  const GetAllItemsAndToppings = async () => {
    const storage = await retrieveLocalStorageData("user");
    const businessID = storage.businessID;
    const res = await GetBusinessItemsByBusinessID(businessID);
    const items = res["items"];//SEPARATE ITEMS
    const toppings = res["toppings"];//SEPERATE TOPPINGS
    await setBusinessItems(items)
    await setBusinessToppings(toppings)
  }

  const handleCloseAddItem=() => {
    setAddItem(!addItem);
  }

  useEffect(() => {
    GetAllItemsAndToppings();
  }, []);


  return (
    <Layout>
      <Navbar />
      <div className="container ml-64">
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
                dataItemID={upliftData}
                GetAllItemsAndToppings={GetAllItemsAndToppings}
                businessItems={businessItems}
                handleCloseAddItem={handleCloseAddItem}
              />
            </div>
          ) : (
            ""
          )}
         
          {businessItems === null || businessToppings === null ? <Loader /> :
            <ItemsDisplay
              businessItems={businessItems}
              businessToppings={businessToppings}
              setBusinessItems={setBusinessItems}
              GetAllItemsAndToppings={GetAllItemsAndToppings}
            />
          }
        </div>
     
      </div>
    </Layout>
  );
};

export default BusinessMenu;
