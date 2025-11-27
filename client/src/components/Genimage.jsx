import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Genimage = () => {
  const{user,setshowlogin}=useContext(AppContext)
  const navigate = useNavigate()
  function clickhandler(){
 if (user){
            navigate('/result')
        }
        else
            setshowlogin(true)
  }
  return (
    <>
    <div className='flex justify-center items-center text-centre mt-30'>
      <h1 className='text-4xl font-bold'>See the magic. Try now</h1>
   </div>
      <div className='ml-125 flex justify-center items-center text-center mt-15 border w-60 rounded-3xl px-6 py-3 bg-black text-white hover:scale-110 transition-all duration-300'>
        <button onClick={clickhandler} className='text-xl cursor-pointer'>Generate Images</button>
        <img className='w-5' src={assets.star_group} alt="" />
    </div>
    </>
  )
}

export default Genimage
