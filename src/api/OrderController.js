import {OrdersController,ItemOfOrdersController} from  '../utility/urls';

///////////GET Methods
export const GetAllOrders = async () => {
  const req = {
    method: "GET",
  };
  try {
    const res = await fetch(
      OrdersController.GetAllOrders,
      req
    );
    if (res.status !== 201 && res.status !== 200) return "Conflict";
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const getAllOrdersByBusinessID = async (businessID) => {
    const req = {
      method: "GET",
    };
    try {
      const res = await fetch(
        OrdersController.GetAllOrdersByBusinessID + `${businessID}`,
        req
      );
      if (res.status !== 201 && res.status !== 200) return "Conflict";
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  export const getAllItemOfOrderByOrderID = async (orderID) => {
    const req = {
      method: "GET",
    };
    try {
      const res = await fetch(
        ItemOfOrdersController.GetAllItemOfOrderByOrderID+`${orderID}`,
        req
      );
      if (res.status !== 201 && res.status !== 200) return "Conflict";
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  export const GetTop3BusinessOrders = async () => {
    const req = {
      method: "GET",
    };
    try {
      const res = await fetch(
        OrdersController.getTop3BusinessOrders,
        req
      );
      if (res.status !== 201 && res.status !== 200) return "Conflict";
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  

  export const GetTop5AppUserOrders = async () => {
    const req = {
      method: "GET",
   
    };
    try {
      const res = await fetch(
        OrdersController.getTop5AppUserOrders,
        req
      );
      if (res.status !== 201 && res.status !== 200) return "Conflict";
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  

  export const GetFoodFindOrders = async () => {
    const req = {
      method: "GET",
   
    };
    try {
      const res = await fetch(
        OrdersController.getFoodFindOrders,
        req
      );
      if (res.status !== 201 && res.status !== 200) return "Conflict";
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };





////POST methods


export const reportByDate = async (businessID,dateFrom,dateTo) => {
  const req = {
      method: "POST",
      headers: {
          Accept: "application/json",
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({businessID:businessID, dateFrom:dateFrom,dateTo:dateTo})
  };
  try{
      const res = await fetch(OrdersController.getReportByDate,req);
      if(res.status!==201 && res.status!==200) return console.log(res);
      const data = await res.json(); 
      console.log(data);
      return data;
  }
  catch(error){
      console.log(error);
      return null;
  }
}





export const sendMail = async (email,businessName,userName,orderID) => {
  const req = {
      method: "POST",
      headers: {
          Accept: "application/json",
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({userEmail:email,businessName:businessName,userName:userName,orderID:orderID})
  };
  try{
      const res = await fetch(OrdersController.SendEmail,req);
      if(res.status!==201 && res.status!==200) return console.log(res.url);
      const data = await res.json(); 
      console.log(data);
      return data;
  }
  catch(error){
      console.log(error);
      return null;
  }
}

export const sendPushNotification = async (to,title,body) => {
  const req = {
      method: "POST",
      headers: {
          Accept: "application/json",
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({to:to,title:title,body:body})
  };
  try{
      const res = await fetch(OrdersController.sendPushNotification,req);
      if(res.status!==201 && res.status!==200) return console.log(res);
      const data = await res.json(); 
      console.log(data);
      return data;
  }
  catch(error){
      console.log(error);
      return null;
  }
}









///////////////////Update Methods
export const UpdateOrderPaid = async (orderID) => {
  const req = {
      method: "PUT",
      headers: {
          "Accept": "application/json",
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(orderID),
  };
  try{
      const res = await fetch(OrdersController.UpdateOrderPaid+`${orderID}`,req);
      if(res.status!==201 && res.status!==200) return "Conflict";
      const data = await res.json(); 
      console.log(data);
      return data;
  }
  catch(error){
      console.log(error);
      return null;
  }
}

export const UpdateOrderFinished = async (orderID) => {
  const req = {
      method: "PUT",
      headers: {
          "Accept": "application/json",
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(orderID),
  };
  try{
      const res = await fetch(OrdersController.UpdateOrderFinished+`${orderID}`,req);
      if(res.status!==201 && res.status!==200) return "Conflict";
      const data = await res.json(); 
      console.log(data);
      return data;
  }
  catch(error){
      console.log(error);
      return null;
  }
}