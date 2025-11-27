import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const BuyCredit = () => {
  const{user}=useContext(AppContext)
  return (
    <div className='justify-center items-center text-center mt-20'>
      <div>
          <button className='border px-8 py-2 rounded-full bg-white'>OUR PLANS</button>
          <p className='mt-10 text-4xl font-medium ml-2'>Choose the plan</p>
      </div>
      <div className='flex flex-wrap gap-2 mt-15'>{
            plans.map((plans,index)=>(
              <div key={index} className='bg-white p-15 rounded-lg shadow-md order w-80 m-auto cursor-default hover:scale-105 transition-all duration-300 text-start'>
                <img src={assets.logo_icon} alt="" />
                <h1 className='text-2xl font-light text-gray-600 mt-2'>{plans.id}</h1>
                <p className='text-sm text-gray-500 '>{plans.desc}</p>
                <p className='mt-6'><span className='text-4xl text-gray-600'>₹{plans.price}</span> <span className='text-sm text-gray-500'>/{plans.credits}credits</span></p>
                <button className='mt-10 w-50  border px-5 bg-black text-white rounded-2xl py-3 cursor-pointer'>{user? "Purchase" : "Get Started"}</button>
                </div>
            ))}
     </div>
    </div>
  )
};

export default BuyCredit
