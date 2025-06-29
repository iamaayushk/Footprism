import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';


    const AuthContext = createContext();

    const AuthProvider=({children})=>{

        const [user, setUser] = useState(null);
        const FetchUser= async()=>{
        try{
            const res= await axios.get('http://localhost:3000/user/me',{
            withCredentials:true,
            })
            setUser(res.data.user);
        
        }
        catch(err){
            setUser(null)
            console.log("error fethcing user", err);
            
        }
    };
    useEffect(() => {
      FetchUser();
    }, [])
    
  return (
    <AuthContext.Provider value={{user,setUser}}>{children}</AuthContext.Provider>
  )
}


export {AuthContext, AuthProvider};