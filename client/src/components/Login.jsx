import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = () => {
    const[state,sestate]=useState('Login')
    const{setshowlogin,backend,settoken,setuser}=useContext(AppContext)
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const onsubmithandler=async(e)=>{
        e.preventDefault()
        try {
            if(state==='Login'){
              const{data}=await axios.post(backend+'/api/user/login',{email,password})


              if(data.success){
                  settoken(data.token)
                  setuser(data.user)
                  localStorage.setItem('token',data.token)
                  setshowlogin(false)
              }
              else {
                toast.error(data.message)
              }

            } else {
              const{data}= await axios.post(backend+'/api/user/register',{name,email,password})
                if(data.success){
                  settoken(data.token)
                  setuser(data.user)
                  localStorage.setItem('token',data.token)
                  setshowlogin(false)
              }
              else {
                toast.error(data.message)
              }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
useEffect(()=>{
       document.body.style.overflow= 'hidden';
       return()=>{
        document.body.style.overflow='unset';
       }
    },[])
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <motion.form onSubmit={onsubmithandler}
        initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}  
        className='border px-8 py-6 relative p-10 rounded-xl bg-white text-slate-500 '>
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
            {state=='Login'? <p className='text-sm mt-1'>Welcome back! Please sign in to continue</p>
            : <p className='text-sm mt-1 ml-4'>Create your account to get started.</p> }
            
            { state!=='Login' && <div className=' border px-6 py-0.2 flex items-center gap-2 rounded-full mt-5'>
                
                <img className='w-9.5 py-0' src={assets.profile_icon} alt="" />
                <input onChange={e=> setname(e.target.value)} value={name} type="text" placeholder='Full Name' required  className='outline-none text-sm'/>
                
            </div>
}
            <div className=' border px-6 py-2.5 flex items-center gap-2 rounded-full mt-4'>
                <img className='w-5 py-0 ml-2.5' src={assets.email_icon} alt="" />
                <input onChange={e=> setemail(e.target.value)} value={email} type="emailid" placeholder='Email Id' required  className='outline-none text-sm ml-2.5'/>
            </div>
            <div className=' border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img className='w-5 py-0 ml-2.5' src={assets.lock_icon} alt="" />
                <input onChange={e=> setpassword(e.target.value)} value={password} type="password" placeholder='Password' required  className='outline-none text-sm ml-2.5'/>
            </div>

            {state=='Login' && <p className='text-sm cursor-pointer text-blue-600 my-4'>Forgot Password?</p>}
            { 
            state=='Login'? <button className='bg-blue-600 text-white rounded-full w-full py-2 cursor-pointer mb-2'>Sign In</button> :
            <button className='bg-blue-600 text-white rounded-full w-full py-2 cursor-pointer mb-2 mt-4'>Create Account</button>
            }
           { state=='Login'? <p className=' text-center'>Don't have an account? <span onClick={()=>((sestate('Sign Up')))} className='text-blue-600 cursor-pointer'>Sign Up</span></p>:
            <p className='mt-3 text-center'>Already have an account? <span onClick={()=>((sestate('Login')))} className='text-blue-600 cursor-pointer'>Login</span></p>}
            <img onClick={()=>(setshowlogin(false))} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
        
        </motion.form>
      
    </div>
  )
}

export default Login
