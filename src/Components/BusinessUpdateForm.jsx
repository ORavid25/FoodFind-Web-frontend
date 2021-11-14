import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { FoodFindContext } from "../context";
import Loader from "../Components/Loader";

const BusinessUpdateForm = () => {
  const { user } =React.useContext(FoodFindContext);

  const [businessDetails,setBusinessDetails] = React.useState({
    businessLicense:"",
    businessName:"",
    businessAddress:"",
    businessPhone:"",
    businessDescription:"",
    businessStatus:""
  })

  const handleBusinessStatus =(e)=>{
    if(e.target.value==="notActive"){
      setBusinessDetails({...businessDetails,businessStatus:false})
    }else{
      setBusinessDetails({...businessDetails,businessStatus:true})
    }
  }

  const handleUpdateDetails =async () => {
    if(businessDetails.businessLicense==="")await setBusinessDetails({...businessDetails,businessLicense:user.businessLicense})
    if(businessDetails.businessName==="")await setBusinessDetails({...businessDetails,businessName:user.businessName})
    if(businessDetails.businessAddress==="")await setBusinessDetails({...businessDetails,businessAddress:user.businessAddress})
    if(businessDetails.businessPhone==="")await setBusinessDetails({...businessDetails,businessPhone:user.businessPhone})
    if(businessDetails.businessDescription==="")await setBusinessDetails({...businessDetails,businessDescription:user.businessDescription})
    if(businessDetails.businessStatus==="")await setBusinessDetails({...businessDetails,businessStatus:user.businessStatus})
    console.log("BusinessUserAfterUpdate=",businessDetails);
  }

  
  console.log("bu",user);
  console.log("BusinessDetails=",businessDetails);
  return (
    
    <div className="container w-11/12 bg-gray-200 shadow-lg rounded-xl p-5  ring-4 ring-opacity-90 ring-green-200 ">
     <div>
      <div dir="rtl" className=" px-8 mt-6">
        <h1 className="mb-1 text-2xl font-medium leading-6">עדכון דף עסקי</h1>
        <h2 className="font-medium mt-5 text-xl text-gray-600">
          כאן ניתן לשנות את הפרטים העסקיים ואת סטטוס הפעילות
        </h2>
      </div>
      {user===null|| user===undefined?<Loader/>:
     
      <div dir="rtl" className="flex flex-col mt-11  p-5">
        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-28 text-xl font-medium">מספר עסק</h1>
          <input className="w-80 p-2" type="text" defaultValue={user.businessLicense} onChange={(e)=>{setBusinessDetails({...businessDetails,businessLicense:e.target.value})}} />
        </div>
        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-28 text-xl font-medium">שם העסק</h1>
          <input className="w-80 p-2" type="text" defaultValue={user.businessName} onChange={(e)=>{setBusinessDetails({...businessDetails,businessName:e.target.value})}} />
        </div>

        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-28 text-xl font-medium">כתובת עסק</h1>
          <input className="w-80 p-2" type="text" defaultValue={user.businessAddress} onChange={(e)=>{setBusinessDetails({...businessDetails,businessAddress:e.target.value})}}/>
        </div>
        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-28 text-xl font-medium">טלפון</h1>
          <input className="w-80 p-2" type="text" defaultValue={user.businessPhone} onChange={(e)=>{setBusinessDetails({...businessDetails,businessPhone:e.target.value})}}/>
        </div>
        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-28 text-xl font-medium">תיאור העסק</h1>
          <input className="w-80 p-2" type="text" defaultValue={user.businessDescription} onChange={(e)=>{setBusinessDetails({...businessDetails,businessDescription:e.target.value})}}/>
        </div>
        <div className="flex justify-around items-center mb-4 ">
          <h1 className="w-28 text-xl font-medium">סטטוס עסק</h1>
          <h2 className="w-28 absolute ml-48 text-lg text-gray-600">פעיל/לא פעיל</h2>
          <select 
          className="flex justify-between items-center w-80 p-2 text-xl font-medium px-4 py-2 rounded"
          onChange={handleBusinessStatus}
          >
            <option value="active"> פעיל </option>
            <option value="notActive">לא פעיל</option>
          </select>
        </div>


        <div className="flex justify-center items-center mt-4 h-20">
          <button className="bg-green-500 w-44 text-xl text-white font-medium py-2 ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300"
          onClick={handleUpdateDetails}
          >
            עדכון פרטים
          </button>

        </div>
        <div className="flex justify-around items-center mb-5 mt-5 ">
          <h1 className="w-34 text-xl font-medium">סיסמה קודמת</h1>
          <input className="w-80 p-2" type="text" />
        </div>
        <div className="flex justify-around items-center mb-5 ">
          <h1 className="w-34 text-xl font-medium">סיסמה חדשה</h1>
          <input className="w-80 p-2" type="text" />
        </div>
        <div className="flex justify-center items-center h-20">
          <button className="bg-green-500 w-44 text-xl text-white font-medium py-2 ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 ">
           עדכון סיסמה
          </button>

        </div>
      </div>
}
</div>
    </div>
  );
};

export default BusinessUpdateForm;
