import React, { useEffect, useState } from "react";
import { DeleteItemOfBusiness } from "../api/BusinessItemController";
import { AiFillDelete } from "react-icons/ai";
import Modal from "../Components/Modal";
import EditBusinessItems from "../Components/EditBusinessItems";

const ItemsDisplay = ({ businessItems, businessToppings  }) => {
  const [itemPress, setItemPress] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dialogModal, setDialogModal] = useState(false);
  const [itemForEdit, setItemForEdit] = useState({});
  const [itemToppings, setItemsToppings] = useState([]);

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  // useEffect(() => {
  //   const res = businessItems.filter((item) => item.itemID == 12);
  //   console.log("filter", res);
  // }, [businessItems]);

  const Item = ({ data }) => {
    return (
      <div className="flex justify-around item-center flex-row">
        <button
          className=" bg-gray-300 w-full h-20 "
          onClick={async () => {
            openModal();
            await setItemForEdit(data);
            console.log("busToppingFromItemDisplay", businessToppings);
            const filteredToppings = businessToppings.filter(
              (item) => item.itemID === data.itemID
            );

            console.log("filteredToppings", filteredToppings);
            await setItemsToppings(filteredToppings);
          }}
        >
          <h1 className="text-xl font-semibold">
            {data !== null && data.itemName}
          </h1>
        </button>
        <div className="">
          <div className="flex flex-row justify-between items-center  p-5 ">
            <div className="flex justify-center items-center">
              <button
                onClick={() => {
                  setDialogModal(!dialogModal);
                  console.log("itemID = ", data.itemID);
                  console.log("businessID = ", data.businessID);
                }}
              >
                <AiFillDelete size={40} color="red" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div dir="rtl" className="w-full rounded-xl px-5 py-5">
      <div className="flex flex-col justify-around p-5 bg-gray-200 h-20 rounded-t-xl">
        <h1 className="text-lg font-medium my-2">רשימת המוצרים</h1>
        <h2 className="text-md font-normal text-gray-500">
          כאן תוכלו לראות את רשימת המוצרים שלכם
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-x-10 gap-y-8 max-h-100 p-5 rounded-b-lg justify-items-center bg-gray-200  overflow-y-scroll designedScroll">
        {businessItems !== null &&
          businessItems.map((item) => {
            return (
              <div className="bg-gray-300 w-full h-20">
                <Item key={item.itemID} id={item.itemID} data={item} />
              </div>
            );
          })}

        <Modal showModal={modalIsOpen} setShowModal={setModalIsOpen}>
          <EditBusinessItems
            ItemForEdit={itemForEdit}
            itemToppings={itemToppings}
          />
        </Modal>
        <Modal showModal={dialogModal} setShowModal={setDialogModal}>
          <div className="w-80 h-36 ">
            <h1 className="text-xl font-bold leading-6">
              האם ברצונך למחוק מוצר זה ?
            </h1>
            <h2 className="text-md font-semibold leading-6">
              לידיעתך תוספות המוצר ימחקו בעת פעולה זו
            </h2>
            <div className="flex items-center justify-around mx-10 my-10">
              <button
                className="bg-red-300"
                onClick={() => {
                  setDialogModal(!dialogModal);
                }}
              >
                <h1>ביטול</h1>
              </button>
              <button className="bg-green-500" onClick={async () => {
                const x = await DeleteItemOfBusiness(businessItems.businessID,businessItems.itemID);
                console.log(x);
              }}>
                <h1>אישור</h1>
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ItemsDisplay;
