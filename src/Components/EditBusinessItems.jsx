import React,{useState, useEffect} from "react";
import {UpdateItemOfBusiness} from "../api/BusinessItemController";

const EditBusinessItems = ({ItemForEdit}) => {

    const [itemPrice,setItemPrice] = useState(0);
    const [itemComment,setItemComment] = useState("")

    useEffect(() => {
        setItemPrice(ItemForEdit.itemPrice)
        setItemComment(ItemForEdit.comment)
     
    }, [])


    const handleUpdateBusinessItem = async() => {
      debugger;
        if(itemPrice !== ItemForEdit.itemPrice || itemComment !== ItemForEdit.comment) {
            const res = await UpdateItemOfBusiness(ItemForEdit.businessID,ItemForEdit.itemID,itemPrice,itemComment);
            console.log("updateBusinessItem res = ",res);
        }


    }


  return (
    <div className="flex flex-col justify-around w-11/12 p-5 h-20 rounded-t-xl mt-32 ">
      <div className="rounded-t-xl bg-gray-300 p-5 shadow-xl">
        <h1 className="text-lg font-medium ">פירוט המוצרים והתוספות</h1>
        <h2 className="text-md font-normal text-gray-500">
          כאן ניתן לבצע שינויים במוצר ובתוספות המוצר
        </h2>
      </div>
      <div className=" flex justify-center items-center p-5 bg-gray-300">
        <h1 className="text-xl font-semibold">{ItemForEdit.itemName}</h1>
      </div>
      <div className="flex h-64 justify-evenly items-center flex-row p-5 font-semibold text-lg rounded-b-xl bg-gray-300 ">
          <h1>מחיר מוצר</h1>
        <input type="number" defaultValue={ItemForEdit.itemPrice} onChange={
            (e) => {
              setItemPrice(e.target.value)
            }
        } className="h-8 w-40 rounded-lg"/>
        <h1>תיאור מוצר</h1>
        <textarea defaultValue={ItemForEdit.comment} className="h-16 w-56" onChange={
            (e) => {
              setItemComment(e.target.value)
            }}/>
        <button  type="button" className="p-2 m-5 bg-green-500 w-52 text-2xl text-white font-medium  ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 " 
            onClick={handleUpdateBusinessItem}
        >
          עדכון
      </button>
      </div>

     
    </div>
  );
};

export default EditBusinessItems;
