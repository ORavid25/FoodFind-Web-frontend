import React from "react";
import { GrFormClose } from "react-icons/gr";


const Modal = ({ showModal, setShowModal, children }) => {
  console.log("showModal=", showModal);
  return (
    <>
      {showModal ? (
        <div className="max-w-full max-h-full pt-10 shadow-xl bg-gray-200  flex flex-col absolute rounded-xl p-2 animate-animateModal ">
          <div className="flex absolute inset-x-3/4 mx-52">
            <button className="w-max mx-5 -my-5 ">
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
