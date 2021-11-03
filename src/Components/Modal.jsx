import React from "react";
import { GrFormClose } from "react-icons/gr";


const Modal = ({ showModal, setShowModal, children }) => {
  return (
    <>
      {showModal ? (
        <div className="max-w-full max-h-full pt-3 shadow-xl bg-gray-200  flex flex-col absolute rounded-xl p-5 animate-animateModal ">
        
            <div className="flex justify-end">
            <button className="w-max mx-5">
              <GrFormClose
                size={40}
                onClick={() => {
                  setShowModal(!showModal);
                }}
              />
            </button>
              
            </div>
         
          <div className="flex justify-center items-center">{children}</div>
        </div>
      ) : null}
    </>
  );
};
export default Modal;
