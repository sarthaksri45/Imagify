import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'
const BuyCredit = () => {
  const{user,backend,token,loadcredit,setshowlogin}=useContext(AppContext)
  const initpay= async(order)=>{
    
       const options= {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'credits payment',
        description: 'credits payment',
        order_id: order.id,
        receipt: order.receipt,
        
        handler: async (res)=>{
          console.log(res);
          
          try {
            const {data}= await axios.post(backend +'/api/user/verifyrazor',
            {res
          //  razorpay_payment_id: res.razorpay_payment_id,
          //  razorpay_order_id: res.razorpay_order_id,
          //  razorpay_signature: res.razorpay_signature
            } ,{headers:{token}})
            if(data.success){
            loadcredit()
            navigate('/')
            toast.success("Credits added")
            }
          } catch (error) {
            toast.error(error.message)
          }
        }
        }
      const rzp= new window.Razorpay(options)
       rzp.open()
       }
       
  
  const navigate=useNavigate()
  const pay= async(planid)=>{
      try {
            if(!user){
              setshowlogin(true)
            }
          const{data}= await axios.post(backend+'/api/user/payrazor',{planid},{headers:{token}})
          console.log({data});
          if(data.success){
            initpay(data.order)
          }
          else toast.error(data.message)
      console.log(`fine till pay ${token}`);
      } catch (error) {
        toast.error(error.message)        
      }
  }

  return (
    <div className='justify-center items-center text-center mt-20'>
      <div>
          <button className='border px-8 py-2 rounded-full bg-white'>OUR PLANS</button>
          <p className='mt-10 text-4xl font-medium ml-2'>Choose the plan</p>
      </div>
      <div className='flex flex-wrap gap-2 mt-15'>{
            plans.map((item,index)=>(
              <div key={index} className='bg-white p-15 rounded-lg shadow-md order w-80 m-auto cursor-default hover:scale-105 transition-all duration-300 text-start'>
                <img src={assets.logo_icon} alt="" />
                <h1 className='text-2xl font-light text-gray-600 mt-2'>{item.id}</h1>
                <p className='text-sm text-gray-500 '>{item.desc}</p>
                <p className='mt-6'><span className='text-4xl text-gray-600'>₹{item.price}</span> <span className='text-sm text-gray-500'>/{item.credits}credits</span></p>
                <button onClick={()=>pay(item.id)} className='mt-10 w-50  border px-5 bg-black text-white rounded-2xl py-3 cursor-pointer'>{user? "Purchase" : "Get Started"}</button>
                </div>
            ))}
     </div>
    </div>
  )
}

export default BuyCredit
