import React, { useEffect, useState, useContext } from "react";
import { FoodFindContext } from "../context";
import { UpdateOrderPaid, UpdateOrderFinished,sendMail,sendPushNotification } from "../api/OrderController";
import Modal from "../Components/Modal";

const OrderDetails = ({renderAfterFinishedOrder}) => {
  
  const { orderDetail,setOrderDetail ,user} = useContext(FoodFindContext);
  const [finishedOrder, setFinishedOrder] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalPaid, setShowModalPaid] = useState(false);
  

// useEffect(() => {
//   setFinishedOrder(false);
// }, [finishedOrder])

  const updateOrderPaid = async () => {
    const res = await UpdateOrderPaid(orderDetail[1].orderID);
    renderAfterFinishedOrder();
    setShowModalPaid(showModalPaid=>!showModalPaid);
    setOrderDetail();
    console.log("res=", res);
    console.log("orderDetails", orderDetail);
  };

  const updateOrderFinished = async () => {
    const res = await UpdateOrderFinished(orderDetail[1].orderID);
    setFinishedOrder(finishedOrder => !finishedOrder);
    renderAfterFinishedOrder();
    setShowModal(showModal=> !showModal)
    let userEmail = orderDetail["1"].userEmail;
    let businessName= user.businessName;
    let userName = orderDetail["1"].userName;
    let orderID = orderDetail[1].orderID;
    let pushToken = orderDetail["1"].pushToken;
    let title = "FoodFind IL";
    let body = `היי ${userName}, הזמנתך מ${businessName} מוכנה , נא להגיע לאסוף. בתיאבון !
    `

    ///// להחזיר את המייל לעבוד
    /// send mail to user when order is finished.
    // if(userEmail&& businessName&& userName&& orderID){
    //  let res = await sendMail(userEmail, businessName, userName, orderID)
    //  console.log("sendEmail",res);
    // }

    const sendPush = await sendPushNotification(pushToken,title,body);
    console.log("sendPush",sendPush);
    
    // console.log("email",orderDetail["1"].userEmail)
    // console.log("businessName",user.businessName)
    // console.log("userName=",orderDetail["1"].userName)
    // console.log("orderID=",orderDetail[1].orderID)

    // sendPushNotification()
    setFinishedOrder(finishedOrder=> !finishedOrder)
    console.log("updateFinished=", res);
  };

  
  // const SendNotificationToUser = () => {
      
  // }

  useEffect(() => {
    console.log("orderDetailsFromOrderblat", orderDetail);
   
  }, [orderDetail]);

  return (
    <div className="flex container flex-col w-full h-full bg-gray-200 rounded-lg  ring-4 ring-opacity-90 ring-green-300 mr-5 ">
      <div dir="rtl" className="flex flex-col justify-between p-4 ">
        <h1 className="text-lg leading-6 font-medium text-gray-900">
          פירוט הזמנה
        </h1>
        <h2 className="mt-1 max-w-2xl text-sm text-gray-500">
          כאן ניתן לראות את פירוט ההזמנה שנבחרה
        </h2>
      </div>
      <div dir="rtl">
        <div className="mt-2">
          <div className="flex container flex-col  w-full h-full">
            <div dir="rtl" className="p-2">
              <div className="shadow-sm p-2 flex">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ml-2">
                  מספר הזמנה:
                </h1>
                <a>{orderDetail && orderDetail[1].orderID}</a>
              </div>
              <div className="shadow-sm p-2 flex">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ml-2">
                  תאריך הזמנה:
                </h1>
                <a>{orderDetail && orderDetail["1"].orderDate}</a>
              </div>

              <div className="shadow-sm p-2 flex">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ml-2">
                  שם לקוח:
                </h1>
                <a>{orderDetail && orderDetail["1"].userName}</a>
              </div>
              <div className="shadow-sm p-2 flex">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ml-2">
                  כתובת מייל:
                </h1>
                <a>{orderDetail && orderDetail["1"].userEmail}</a>
              </div>
              <div className="flex h-96 shadow-sm p-2  flex-col overflow-y-scroll">
                <h1 className="text-xl leading-6 font-medium text-gray-900 ">
                  פירוט ההזמנה:
                </h1>
                <div className="mt-2 flex flex-col mr-2 text-xl font-normal ">
                  {orderDetail &&
                    orderDetail["0"].map((order, index) => {
                      return (
                        <div className=" h-24 ring-2 rounded-md ring-green-300">
                          <div className="flex flex-row rounded-t-md px-2 bg-gray-300">
                            <h2>{order.itemName}</h2>
                            <span className="w-10" />
                            <h2>{order.itemAmount}X</h2>
                          </div>

                          <h2 className="text-gray-600 text-lg font-medium px-2 pt-2">
                            תוספות וערות למוצר : {order.comments}
                          </h2>

                          <h2 className="text-gray-600 text-lg font-bold px-2">
                            סה"כ מחיר למוצר : {order.itemTotalPrice}
                          </h2>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around p-3 mb-10">
        {orderDetail===undefined && <div></div> }
        {orderDetail!==undefined&&
        (!orderDetail["1"].orderStatus && !finishedOrder ? 
        <button
          className="bg-yellow-900 ring-4 ring-yellow-600 border-white text-white p-5 px-10 text-lg rounded-lg "
          onClick={() => {
            setShowModal(!showModal)
          }}
        >
          ההזמנה מוכנה
        </button>
        :
        <div className="flex p-5 items-center justify-center rounded-lg ">
              <h1 className="text-xl leading-6 font-medium text-gray-900">הודעה נשלחה ללקוח</h1>
        </div>
       
        )
        }

        <Modal showModal={showModal} setShowModal={setShowModal}>
          <div className="max-w-9/12 h-48 px-5 py-5 ">
            <h1 className="text-2xl font-bold leading-6">
              ? רק כדאי לוודא האם אתה בטוח שההזמנה מוכנה
            </h1>

            <div className="flex items-center justify-around mx-10 my-10">
              <button className="px-5 py-2 m-5 bg-red-500 text-md text-white font-medium ring-4 ring-red-400 rounded-lg hover:bg-red-400 transition-color duration-300 "
              onClick={() => {
                setShowModal(!showModal);
              }}
              >
                <h1>ביטול</h1>
              </button>
              <button className="px-5 py-2 m-5 bg-green-500 text-md text-white font-medium ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 "
              onClick={updateOrderFinished}
              >
                <h1>אישור</h1>
              </button>
            </div>
          </div>
        </Modal>

        {/* open modal for order paid */}

        <Modal showModal={showModalPaid} setShowModal={setShowModalPaid}>
          <div className="max-w-9/12 h-full px-5">
            <div className="flex items-center justify-center w-full h-24 flex-col">
            <h1 className="text-2xl font-bold leading-6 py-5 ">
              ? האם ברצונך לסיים את ההזמנה
            </h1>
            <h2 className="text-xl leading-6 ">
              בפעולה זו אתה מאשר שהלקוח שילם על ההזמנה, ההזמנה תעבור לדף הפקת דוחות
            </h2>
            </div>

            <div className="flex items-center justify-evenly mt-8">
              <button className="px-5 py-2 m-5 bg-red-500 text-md text-white font-medium ring-4 ring-red-400 rounded-lg hover:bg-red-400 transition-color duration-300 "
              onClick={() => {
                setShowModalPaid(!showModalPaid);
              }}
              >
                <h1>ביטול</h1>
              </button>
              <button className="px-5 py-2 m-5 bg-green-500 text-md text-white font-medium ring-4 ring-green-400 rounded-lg hover:bg-green-400 transition-color duration-300 "
              onClick={updateOrderPaid}
              >
                <h1>אישור</h1>
              </button>
            </div>
          </div>
        </Modal>
        {orderDetail===undefined?<div></div>:
        <button
          className="bg-green-600 ring-4 ring-green-300 hover:ring-green-900 text-white p-5 px-10 text-xl rounded-lg"
          onClick={() => {
            setShowModalPaid(!showModalPaid);
          }}
        >
          אישור תשלום
        </button>
        }
      </div>
    </div>
  );
};

export default OrderDetails;
