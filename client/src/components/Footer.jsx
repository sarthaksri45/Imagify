import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
    <div className='flex justify-between mt-50 py-2 '>
      <img className='w-35' src={assets.logo} alt="" />
      <span className='text-gray-600 text-3xl'>|</span>
      <p className='text-gray-600 mr-150 mt-2.5'>All right reserved. Copyright @imagify</p>
      <div className='flex  gap-2' >
     <button className='cursor-pointer hover:scale-115 transition-all duration-300 '> <img  src={assets.facebook_icon} alt="" /> </button>
      <button className='cursor-pointer hover:scale-115 transition-all duration-300'> <img src={assets.twitter_icon} alt="" /></button>
      <button className='cursor-pointer hover:scale-115 transition-all duration-300'><img src={assets.instagram_icon} alt="" /></button>
      </div>
    </div>  
    </>
  )
}

export default Footer
