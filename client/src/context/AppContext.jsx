import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export const AppContext = createContext()
const AppContextProvider=(props)=>{
 const[user,setuser]=useState(false);   
 const[showlogin,setshowlogin]=useState(false)
 const navigate=useNavigate()
 const [token,settoken]=useState(localStorage.getItem('token'))
 const[credit,setcredit]=useState(false)
 const genimage=async(prompt)=>{
      try {
          const{data}=await axios.post(backend+'/api/image/genimage',{prompt},{headers:{token}})
          if(data.success){
            loadcredit()
            return data.resultimage
          }
          else {
            toast.error(data.message)
            loadcredit()
            if(data.credit===0){
               navigate('/buycredit')
            }
          }
      } catch (error) {
         toast.error(error.message)
      }
 }
 const logout=()=>{
   localStorage.removeItem(token)
   settoken('')
   setuser(null)
   navigate('/')
 }
 const loadcredit= async()=>{
   try {
         const{data}=await axios.get(backend+'/api/user/credit',{headers:{token}})
         if(data.success){
            setcredit(data.credit) 
            setuser(data.user)
         }

   } catch (error) {
      console.log(error);
      toast.error(error.message)
   }
 }
 useEffect(()=>{
    if(token){
      loadcredit()
    }
 },[token])
 const backend=import.meta.env.VITE_BACKEND_URL
 const value={
    user,
    backend,
    setuser,
    showlogin,
    setshowlogin,token,settoken,credit,setcredit,loadcredit,logout,genimage
 } 
 
 
 return(
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
 )
}
export default AppContextProvider