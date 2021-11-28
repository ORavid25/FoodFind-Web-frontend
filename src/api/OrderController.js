import {OrdersController} from  '../utility/urls';
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