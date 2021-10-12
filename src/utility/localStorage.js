
export const storeLocalStorageData =async (key,value) =>{
try{
    await window.localStorage.setItem(key,JSON.stringify(value));
}catch(error){
    console.log(error);
}
};

export const retrieveLocalStorageData = async (key) => {
    try {
      const value = await window.localStorage.getItem(key);
      
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.log("retrieveAsyncStorageData error", error);
      return null;
    }
  };
  
  export const removeLocalStorageData = async (key) => {
    try {
      await window.localStorage.removeItem(key);
    } catch (error) {
      console.log("storeAsyncStorageData error", error);
    }
  };
  
  export default { storeLocalStorageData, retrieveLocalStorageData,removeLocalStorageData };