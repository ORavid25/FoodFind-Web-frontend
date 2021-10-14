import {BusinessItemController} from '../utility/urls';

export const InsertItemOfBusinessUser = async (data) => {
    const req = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data),
    };
    try{
        const res = await fetch(BusinessItemController.InsertItemOfBusinessUser,req);
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
