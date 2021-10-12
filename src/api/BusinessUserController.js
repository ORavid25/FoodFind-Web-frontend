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


// export const LoginWithEmailAndPass =  (details) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const res = await fetch('http://proj14.ruppin-tech.co.il/api/LoginWithEmailAndPass', {
//                 method: 'POST',
//                 headers: {
//                     "content-type": "application/json",
//                     "accept": "application/json",
//                 },
//                 body: JSON.stringify(
//                     details.businessEmail,
//                     details.password,
//                 )
//             })
//             console.log('http://proj14.ruppin-tech.co.il/api/LoginWithEmailAndPass', res);
//             const data = await res.json();
//             console.log('data=', data)
//             resolve(data)
//         }
//         catch (error) {
//             reject(error)
//         }
//     })
// };