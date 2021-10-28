import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Modal from "../Components/Modal";
import EditBusinessItems from "../Components/EditBusinessItems"


const ItemsDisplay = ({ businessItems }) => {
  const [itemPress, setItemPress] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemForEdit,setItemForEdit] =useState({});

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
    console.log("modalOpen", modalIsOpen);
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
    console.log("data=", data);
    return (
      <button className=" bg-gray-300 w-full h-20 " onClick={async() => {
        openModal()
        await setItemForEdit(data)

      }}>
        <div className="">
          <div className="flex flex-row justify-between items-center  p-5 ">
            <h1 className="text-xl font-semibold">{data !== null && data.itemName}</h1>
            <div className="flex justify-center items-center">
              <AiFillDelete size={40} color="red" />
            </div>
          </div>
        </div>
 
      </button>
    );
  };

  return (
    <div dir="rtl" className="w-full h-5/6 rounded-xl   px-5 py-5">
        

      <div className="flex flex-col justify-around p-5 bg-gray-200 h-20 rounded-t-xl">
        <h1 className="text-lg font-medium my-2">רשימת המוצרים</h1>
        <h2 className="text-md font-normal text-gray-500">
          כאן תוכלו לראות את רשימת המוצרים שלכם
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-20 gap-y-16 h-5/6 p-5 rounded-b-lg justify-items-center bg-gray-200  overflow-y-scroll designedScroll">
        {businessItems !== null && businessItems.map((item) => {
          return (
            <div className="bg-gray-300 w-full h-20">
              <Item id={item.itemID} data={item} />
            </div>
          );
        })}
       
        <Modal showModal={modalIsOpen} setShowModal={setModalIsOpen}>
        <EditBusinessItems ItemForEdit={itemForEdit}/>
        </Modal>

        
      </div>
    </div>
  );
};

export default ItemsDisplay;
