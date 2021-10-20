import React, {useState} from 'react'
import { HiPlusSm } from "react-icons/hi";

const AddItem = (props) => {
    const [addItem, setAddItem] = useState(false);

    return (
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
    )
}

export default AddItem
