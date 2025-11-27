import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import Login from './Login'
import { AppContext } from '../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const{user, setshowlogin} = useContext(AppContext)
    const navigate= useNavigate()
    function clickhandler(){
        if (user){
            navigate('/result')
        }
        else
            setshowlogin(true)
    }
  return (
    <motion.div initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
    <div className='flex rounded-full items-center justify-center text-center mt-20 '>
        <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.8}}
        className='text-stone-500 inline-flex text-center gap-1.5 bg-white rounded-full border px-6 py-1 hover:scale-110 transition-all duration-700' >
            <p className='cursor-default'>Best text to image generator</p>
            <img className='w-4' src={assets.star_icon} alt="" />
        </motion.div>
     </div>
     <h1 className=' pl-5 w-155 text-4xl justify-center text-center max-w-300px sm:text-7xl sm:max-w-590px mx-auto mt-10'>Turn Text to <span className='text-blue-400'>Image</span>, in seconds.</h1>
     <p className='py-8 pl-32 mx-auto w-150 justify-center text-xl items-center '>Your imagination. Our AI. Unlimited images.</p>
     <div className='ml-130 flex cursor-pointer justify-center items-center text-center rounded-full border w-60 px-8 py-3 text-white bg-black'>
        <button onClick={clickhandler} className='text-sm cursor-pointer'>Generate Images</button>
        <img className='w-5' src={assets.star_group} alt="" />
     </div>
     <div className='flex justify-center gap-3.5 pt-15 ml-2'>
        {
            Array(6).fill('').map((item,index)=>((
                <img className='w-18 rounded hover:scale-115 transition-all duration-300 cursor-pointer' 
                src={index%2==0 ?assets.sample_img_1 : assets.sample_img_2} key={index}/>
            )))
        }
     </div>
     <p className='items-center justify-center text-center text-gray-700 mt-3'>Generated images from Imagify</p>
     </motion.div>

  )
}

export default Header
