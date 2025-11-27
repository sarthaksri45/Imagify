
import { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
import App from '../App'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
   const {user} = useContext(AppContext)
   const{setshowlogin,logout,credit}=useContext(AppContext)
  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'> <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40'/>
      </Link>

      <div>{
         user?
        <div className='flex items-center gap-5'>
            <Link to='/buycredit'>
            <button className='flex items-center gap-1 bg-blue-100 px-4 py-1.5 rounded-full hover:scale-105 transition-all duration-700'>
                <img className='w-5' src={assets.credit_star} alt="" />
                <p className='text-sm font-medium text-gray-600'>Credit left :{user.credit}</p>
            </button>
            </Link>
            <p className='text-gray-600 pl-4'>Hi, {user.name} </p>
            <div className='relative group -ml-3'>
                <img className='w-10 rounded-full drop-shadow-2xl -mt-1' src={assets.profile_icon} alt="" />
                <div className='absolute hidden group-hover:block rounded text-black top-0 right-0 z-10 pt-12'>
                   <ul className='list-none m-0 p-2 bg-white rounded-b-md border text-sm'>
                    <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10 hover:scale-100 transition-all duration-300'>Logout</li>
                   </ul>
                </div>
            </div>
        </div>
        :
        <div className='flex item-center gap-2 sm:gap-5'>
            <Link to='/buycredit'><p className='cursor-pointer'>Pricing</p> </Link>
            <button onClick={()=>(setshowlogin(true))} className='cursor-pointer bg-zinc-800 text-white rounded-full px-8 py-2 -mt-1.5 text-sm'>Login</button>
        </div>
      }
      </div>
   
    
    </div>
    )
}

export default Navbar
