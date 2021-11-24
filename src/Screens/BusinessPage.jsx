import React,{useContext,useEffect} from "react";
import { FoodFindContext } from "../context";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import BusinessUpdateForm from "../Components/BusinessUpdateForm";




const BusinessPage = () => {

  const { user } = useContext(FoodFindContext);


  const userDetails = (user) => {
    console.log("userDetails = ",user);
  } 


  useEffect(() => {
    userDetails(user);
  })

  return (
    <Layout>
      <Navbar />
      <div className="flex ml-56 p-5 justify-center h-full w-full items-center">

        {user && user.businessStatus === false ?
         <div className="bg-gray-200 flex flex-col justify-around items-center w-full h-4/6 p-5 rounded-lg ring-4 ring-green-400">
           <div className="flex justify-center items-center flex-col">
           <h1 className="text-3xl leading-6 my-8 font-bold">.קיבלנו את הפרטים שלך, אנא המתן לאישור העסק</h1>
           <h1 className="text-2xl my-2 leading-6">ברגע שנאשר את הפרטים תוכל לעדכן לפרטים חדשים</h1>
           <h1 className="text-2xl leading-6">!בינתיים אתה מוזמן להוסיף מוצרים חדשים לעסק שלך</h1>
           </div>
           <div className="flex justify-center bg-gray-100 p-5 ring-4 ring-green-300 flex-col items-center text-2xl rounded-lg">
             <h1>:לכל בעיה ולהחזרת עסק לפעילות ניתן לפנות אלינו במייל</h1>
             <h1 className="font-bold ">foodfindil@gmail.com</h1>
           </div>
         </div>
         :
        <BusinessUpdateForm />
        
        }
      </div>
    </Layout>
  );
};

export default BusinessPage;
