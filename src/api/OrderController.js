import {OrdersController,ItemOfOrdersController} from  '../utility/urls';
///////////GET Methods
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