import React,{useState} from 'react';

export const AddTopping = () => {

  const [inputs, setInputs] = useState({
    topName:"",
    topPrice:"",
   
  })


  const handleClick = () => {
    
  }

  
    return (
        <div className="w-full max-h-96 rounded-xl  bg-pink-500">
        <div>
          <div
            dir="rtl"
            className=" items-center justify-evenly h-36  bg-yellow-500"
          >
            <h1 className="text-xl p-5">הכנס את הפרטים הנדרשים</h1>
            <input className="m-5 px-3 py-0.5 rounded-sm text-center" placeholder="שם תוספת" onChange={(val) => {
            setInputs({...inputs,topName: val})
          }}/>
            <input className="m-5 px-3 py-0.5 rounded-sm text-center" placeholder="מחיר תוספת" onChange={(val) => {
            setInputs({...inputs,topPrice: val})
          }} />
            <button className="bg-green-500 px-6 rounded-lg text-lg" onClick={() => {
              
            }} >אשר</button>
        
          </div>
        </div>
      </div>
    )
}
