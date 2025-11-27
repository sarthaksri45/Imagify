import React from 'react'
import { assets, stepsData } from '../assets/assets'
import { motion } from "motion/react"
const Steps = () => {
  return (
    <motion.div initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
     className=' flex flex-col justify-center items-center text-center my-32'>
      <h1 className='text-3xl font-semibold mb-2'>How it Works</h1>
      <p className='text-lg text-gray-600 mb-8'>Transform words into stunning Images</p>
      <div className='space-y-4 w-full text-sm max-w-3xl '> 
        {
            stepsData.map((item,index)=>(
                <div key={index} className='flex items-center gap-4 p-5 px-8 bg-white/70 border shadow-md hover:scale-105 transition-all duration-300 cursor-default ml-8 rounded-full'> 
                    <img src={item.icon} alt="" />
                    <h2 className='font-medium'>{item.title}</h2>
                    <p>{item.description}</p>
                 </div>
            ))
        }
      </div>
    </motion.div>
    
  )
}

export default Steps
