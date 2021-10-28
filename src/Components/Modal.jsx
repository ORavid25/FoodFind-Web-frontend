import React from "react";
import { GrFormClose } from "react-icons/gr";
import EditBusinessItems from "../Components/EditBusinessItems";

const Modal = ({ showModal, setShowModal, children }) => {
  console.log("showModal=", showModal);
  return (
    <>
      {showModal ? (
        <div className="w-4/6 h-5/6 pt-10 shadow-xl bg-gray-200  flex flex-col  absolute rounded-xl p-2 animate-animateModal">
          <div className="flex absolute inset-x-3/4  mx-64">
            <button className="w-max mx-4 my-1 ">
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
