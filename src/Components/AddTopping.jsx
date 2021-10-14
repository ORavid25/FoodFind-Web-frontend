import React from 'react'

export const AddTopping = () => {
    return (
        <div className="w-full max-h-96 rounded-xl  bg-pink-500">
        <div>
          <div
            dir="rtl"
            className=" items-center justify-evenly h-36  bg-yellow-500"
          >
            <h1 className="text-xl p-5">הכנס את הפרטים הנדרשים</h1>
            <input className="m-5 text-center" placeholder="שם תוספת"></input>
            <input className="m-5 text-center" placeholder="מחיר תוספת"></input>
            <button className="bg-red-500 p-1" >press</button>
        
          </div>
        </div>
      </div>
    )
}
