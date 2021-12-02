import {BusinessUsersController} from '../utility/urls';


export const GetAllBusinessUsers = async () => {
    const req = {
        method: "GET",
     
    };
    try{
        const res = await fetch(BusinessUsersController.GetAllBusinessUsers,req);
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



export const GetBusinessUserById = async (businessID) => {
    const req = {
        method: "GET",
     
    };
    try{
        const res = await fetch(BusinessUsersController.GetBusinessUserById+ `${businessID}`,req);
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

export const LoginWithEmailAndPass = async (email,password) => {
    const req = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({Email:email,password:password}),
    };
    try{
        const res = await fetch(BusinessUsersController.LoginWithEmailAndPass,req);
        if(res.status!==201 && res.status!==200) return console.log(await res.json());
        const data = await res.json(); 
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

export const UpdateBusinessUser = async (businessUser) => {
    const req = {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(businessUser),
    };
    try{
        const res = await fetch(BusinessUsersController.UpdateBusinessUser,req);
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

export const UpdateBusinessUserPass = async (prevPass,newPass) => {
    const req = {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({prevPass,newPass}),
    };
    try{
        const res = await fetch(BusinessUsersController.UpdateBusinessUserPass,req);
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

export const UpdateBusinessToActive = async (id) => {
    const req = {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(id),
    };
    try{
        const res = await fetch(BusinessUsersController.UpdateBusinessToActive+id,req);
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



