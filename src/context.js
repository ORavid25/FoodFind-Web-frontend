import React from "react";

const FoodFindContext = React.createContext({});

function FoodFindProvider({children}){
    const [user,setUser] = React.useState(null);
    // const [businessUser,setBusinessUser] = React.useState(null);
    const [orderData,setOrderData] = React.useState(null);
   

    const value = {user, setUser};
    return <FoodFindContext.Provider value={value}>{children}</FoodFindContext.Provider>
}

export {FoodFindProvider, FoodFindContext};