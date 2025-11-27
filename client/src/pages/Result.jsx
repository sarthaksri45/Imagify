import React, { use, useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const{genimage}=useContext(AppContext)
  const[image,setimage]=useState(assets.sample_img_1);
  const[isimageloaded,setisimageloaded]=useState(false)
  const[load,setload]= useState(false)
  const[input,setinput]=useState("")
  const onsubmithandler=async(e)=>{
     e.preventDefault()
     setload(true)
     if(input){
      const image=await genimage(input)
      if(image){
        setisimageloaded(true)
        setimage(image)
      }
     } 
     setload(false)
  }
  return (
    <form onSubmit={onsubmithandler}>
    <div className='flex flex-col min-h-[90vh] justify-center items-center'>
       <div className='flex relative justify-center items-center mt-20 mb-10'>
          <img className='w-110 ' src={image} alt="" />
          <span className={`absolute bottom-0 left-0 h-1  bg-blue-500 ${load?`w-full transition-all duration-[10s]` : 'w-0'}`}/>
       </div>
       
      <p className={!load? 'hidden':" "}>Loading....</p>
      
      { !isimageloaded &&
      <div className='flex  justify-center items-center text-center bg-gray-500 w-140  px-6   py-2  rounded-full'>
      <input onChange={e=>{setinput(e.target.value)}} value={input} type="text" placeholder='Describe what you want to Generate' className='w-150 bg-transparent outline-none text-sm text-white'/>
      <button  type='submit' className='bg-black rounded-3xl text-white px-10 py-3 cursor-pointer ' >Generate</button>
      </div>
}
      { isimageloaded&&
        <div className=' flex gap-4  flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
        <p onClick={()=>{setisimageloaded(false)}} className=' bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'> Generate Another</p>
        <a href={image} download className=' bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
      </div>}

    </div>
  </form>
  )
};

export default Result
