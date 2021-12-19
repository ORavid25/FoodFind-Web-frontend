import React, {  useState } from "react";
import { DeleteItemOfBusiness, GetBusinessItemsByBusinessID } from "../api/BusinessItemController";
import { AiFillDelete } from "react-icons/ai";
import Modal from "../Components/Modal";
import EditBusinessItems from "../Components/EditBusinessItems";

const ItemsDisplay = ({ businessItems, setBusinessItems, businessToppings}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dialogModal, setDialogModal] = useState(false);
  const [itemForEdit, setItemForEdit] = useState({});
  const [itemToppings, setItemsToppings] = useState([]);



  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const renderDel = async () => {

    if (businessItems.length !== 0) {
      const res = await GetBusinessItemsByBusinessID(businessItems['0'].businessID);
      const items = res['items'];
      console.log("GetBusinessItemsByBusinessID", items);
      await setBusinessItems(items);
    }
  };



  const handleDeleteItem = async () => {
    if (itemForEdit !== null) {
      const res = await DeleteItemOfBusiness(itemForEdit.businessID, itemForEdit.itemID);
      if (res === 1) {
        renderDel();
        setDialogModal(!dialogModal);
      }
    }
  }

  const Item = ({ data }) => {

    return (
      <div className="flex justify-around item-center flex-row">
        <button
          className=" bg-gray-300 w-full h-20 "
          onClick={async () => {
            openModal();
            await setItemForEdit(data);
            // console.log("busToppingFromItemDisplay", businessToppings);
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

        <div className="flex flex-row justify-between items-center  p-5 ">
          <div className="flex justify-center items-center">
            <button
              onClick={async () => {
                setDialogModal(!dialogModal);
                await setItemForEdit(data)
                await renderDel();
              }}
            >
              <AiFillDelete size={40} color="red" />
            </button>
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
        {businessItems !== null ? businessItems.map((item) => {
          return (
            <div className="bg-gray-300 w-full h-20">
              <Item key={item.itemID} data={item} />
            </div>
          );

        }) : <div></div>}

        <Modal showModal={modalIsOpen} setShowModal={setModalIsOpen}>
          <EditBusinessItems
            ItemForEdit={itemForEdit}
            itemToppings={itemToppings}
            setItemsToppings={setItemsToppings}
            
          />
        </Modal>
        <Modal showModal={dialogModal} setShowModal={setDialogModal}>
          <div className="max-w-9/12 h-48 px-5 py-5 ">
            <h1 className="text-2xl font-bold leading-6">
              האם ברצונך למחוק מוצר זה ?
            </h1>
            <h2 className="text-xl font-semibold leading-6">
              לידיעתך תוספות המוצר ימחקו בעת פעולה זו
            </h2>
            <div className="flex items-center justify-around mx-10 my-10">
              <button
                className="px-5 py-2 m-5 bg-red-500 text-md text-white font-medium ring-4 ring-red-400 rounded-lg hover:bg-red-400 transition-color duration-300 "
                onClick={() => {
                  setDialogModal(!dialogModal);
                }}
              >
                <h1>ביטול</h1>
              </button>
              <button className="px-5 py-2 m-5 bg-green-500 text-md text-white font-medium ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 " onClick={handleDeleteItem}>
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
