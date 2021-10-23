import { BusinessItemController } from "../utility/urls";

export const InsertItemOfBusinessUser = async (
  itemName,
  businessID,
  itemPrice,
  comment
) => {
  const req = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
        itemName:itemName,
        businessID:businessID,
        itemPrice:itemPrice,
        comment:comment}),
  };
  try {
    const res = await fetch(
        `http://proj14.ruppin-tech.co.il/api/businessitems/InsertItemOfBusinessUser`,
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
