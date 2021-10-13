import React, {useState} from "react";
import { HiPlusSm } from "react-icons/hi";


const FormContainer = () => {

  const [addItem,setAddItem] = useState(false)


  return (
    <div className="m-14 container rounded-xl  bg-pink-500">
      <div>
        <div dir="rtl" className="flex items-center bg-yellow-500">
          <button className="flex justify-center items-center w-12 h-12 " onClick="">
            <HiPlusSm />
          </button>
          <h1>הוספת מוצר חדש</h1>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
