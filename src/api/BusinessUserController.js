import {BusinessUsersController} from '../utility/urls';



export const LoginWithEmailAndPass = async (email,password) => {
    const req = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({businessEmail:email,password:password}),
    };
    try{
        const res = await fetch(BusinessUsersController.LoginWithEmailAndPass,req);
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
