import React from "react";

const FoodFindContext = React.createContext({});

function FoodFindProvider({children}){
    const [user,setUser] = React.useState(null);
    const [orderDetail,setOrderDetail] = React.useState();
   

    const value = {user, setUser,orderDetail,setOrderDetail};
    return <FoodFindContext.Provider value={value}>{children}</FoodFindContext.Provider>
}

export {FoodFindProvider, FoodFindContext};