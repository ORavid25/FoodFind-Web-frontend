import {UsersController} from '../utility/urls';


export const GetAllClientUsers = async () => {
    const req = {
        method: "GET",
     
    };
    try{
        const res = await fetch(UsersController.GetAllUsers,req);
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