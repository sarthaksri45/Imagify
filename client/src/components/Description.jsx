import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
    <div className='justify-center items-center text-center bg-white py-3.5 px-3.5 rounded-3xl'>
       <div className='text-4xl'>Create AI images</div>
       <p className='text-sm text-gray-500 mt-2'>Turn your imagination into visuals</p>
    <div className='flex gap-15'>
        <img className='w-90 rounded-2xl mt-5 ml-20' src={assets.sample_img_1} alt="" />
        <div className=' mt-8'>
            <h2 className='font-bold text-4xl text-left'>Introducing the AI-powered Text to Image Generator</h2>
            <p className='text-gray-600 text-left mt-1.5 text-sm' >
                Introducing our powerful AI-driven Text to Image Generator, designed to transform your ideas into stunning visuals instantly. With just a simple prompt, the AI understands your description and produces high-quality images across various styles — from realistic photos to creative digital art.
            </p> 
                 
            <p className='text-gray-600 py-1.5 text-left text-sm'>
                Whether you're a designer, marketer, student, or creator, this tool helps you generate unique visuals effortlessly.Built with advanced deep-learning technology, it captures context, emotion, and detail with remarkable accuracy. The interface is simple, fast, and intuitive, allowing anyone to turn imagination into art within seconds. Perfect for brainstorming, content creation, concept design, or just exploring your creativity — this generator gives you unlimited possibilities powered entirely by your words.

            </p>
        </div>
    </div>
    </div>
  
    </motion.div>
  )
}

export default Description
