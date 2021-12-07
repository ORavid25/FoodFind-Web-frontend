//All URLS IS Here

const Base_URL = 'http://proj14.ruppin-tech.co.il/api';

//   USERS controller

export const GetAllUsers = `${Base_URL}/user/GetAllUsers`;
export const GetUserById = `${Base_URL}/user/GetUserById/`;
export const InsertNewUser = `${Base_URL}/user/InsertNewUser`;
export const GetUserByEmail = `${Base_URL}/user/GetUserByEmail/`;

export const UsersController = {
    GetAllUsers,
    GetUserById,
    InsertNewUser,
    GetUserByEmail,
};

export const GetAllBusinessUsers = `${Base_URL}/businessuser/GetAllBusinessUsers`;
export const GetBusinessUserById = `${Base_URL}/businessuser/GetBusinessUserById/`;
export const GetBusinessUserByEmail = `${Base_URL}/businessuser/GetBusinessUserByEmail/`;
export const InsertBusinessUser = `${Base_URL}/businessuser/InsertBusinessUser`;
export const LoginWithEmailAndPass = `${Base_URL}/businessuser/LoginWithEmailAndPass`;
export const UpdateBusinessUser = `${Base_URL}/businessuser/UpdateBusinessUser`;
export const UpdateBusinessUserPass = `${Base_URL}/businessuser/UpdateBusinessUserPass`;
export const UpdateBusinessToActive = `${Base_URL}/businessuser/UpdateBusinessToActive/`;


export const BusinessUsersController = {
    GetAllBusinessUsers,
    GetBusinessUserById,
    GetBusinessUserByEmail,
    InsertBusinessUser,
    LoginWithEmailAndPass,
    UpdateBusinessUser,
    UpdateBusinessUserPass,
    UpdateBusinessToActive,
 
};


export const GetAllBusinessItemsByBusinessId = `${Base_URL}/businessitems/GetAllBusinessItemsByBusinessId/`;
export const GetBusinessItemNameById = `${Base_URL}/businessitems/GetItemById/`

export const InsertItemOfBusinessUser = `${Base_URL}/businessitems/InsertItemOfBusinessUser`;
export const InsertToppingOfItem = `${Base_URL}/businessitems/InsertToppingOfItem`;

export const UpdateItemOfBusiness = `${Base_URL}/businessitems/UpdateItemOfBusiness`;
export const UpdateToppingToUnActive = `${Base_URL}/businesstoppingsitem/UpdateToppingToUnActive`;
export const UpdateToppingToActive = `${Base_URL}/businesstoppingsitem/UpdateToppingToActive`;

export const DeleteItemOfBusiness = `${Base_URL}/businessitems/DeleteItemOfBusinessById`;

export const UpdateToppingPrice = `${Base_URL}/businesstoppingsitem/UpdateToppingPrice`;
export const UploadItemImage = `${Base_URL}/image/uploadimage`;


export const BusinessItemController = {
    GetAllBusinessItemsByBusinessId,
    GetBusinessItemNameById,

    UploadItemImage,

    InsertItemOfBusinessUser,
    InsertToppingOfItem,

    UpdateItemOfBusiness,
    UpdateToppingToUnActive,
    UpdateToppingToActive,
    UpdateToppingPrice,

    DeleteItemOfBusiness,

}


export const GetAllOrdersByBusinessID = `${Base_URL}/orders/GetAllOrdersByBusinessID/`
export const UpdateOrderPaid = `${Base_URL}/orders/UpdateOrderPaid/`
export const UpdateOrderFinished = `${Base_URL}/orders/UpdateOrderFinished/`

export const OrdersController = {
    GetAllOrdersByBusinessID,
    UpdateOrderPaid,
    UpdateOrderFinished,
}


export const GetAllItemOfOrderByOrderID = `${Base_URL}/orderofitems/GetAllItemOfOrderByOrderID/`;
export const ItemOfOrdersController = {
    GetAllItemOfOrderByOrderID,
}