import React, { useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BusinessOrders from "../Components/BusinessOrders";
import Layout from "../Components/Layout";
import FormContainer from "../Components/FormContainer";
import { HiPlusSm } from "react-icons/hi";
import { AddTopping } from "../Components/AddTopping";

/////////////////////////////////////////////////!!!!!!!!!
const BusinessMenu = () => {
  const [addItem, setAddItem] = useState(false);
  const [toppingItem, setToppingItem] = useState(false);
  const [ifOpenTopping, setIfOpenTopping] = useState(false);


  const handleOpenToppingMenu = (data) => {
    console.log("data=",data);
    setIfOpenTopping(data);


  }

  console.log(ifOpenTopping);
  return (
    <Layout>
      <div className="flex w-min p-2 fixed ">
        <Navbar />
      </div>
      <div className="ml-44">
        <div className="flex h-screen flex-col  bg-blue-400">
          <div className="bg-red-400 flex h-10 w-full justify-end items-center">
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

          {addItem ? (
            <div className="flex w-full h-auto bg-green-400 flex-col justify-end">
              <FormContainer open={handleOpenToppingMenu} />
              {ifOpenTopping ? <div className="bg-red-400 flex h-10 w-full justify-end items-center">
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
              </div> : ""}
              

              {toppingItem ? (
                <div className="bg-red-600 w-full h-full">
                  <AddTopping/>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BusinessMenu;
