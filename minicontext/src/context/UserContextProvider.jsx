import React, { Children } from "react";
import UserContext from "./UserContext";
const userContextProvider=({Children})=>{
 const [user,setUser]=React.userState(null)
 return(
 <userContext.Provider value={{user,setUser}}>
    {Children}
 </userContext.Provider> 
 )
}
export default userContextProvider; 