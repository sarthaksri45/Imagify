import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='text-4xl mt-30'>Customer Testimonials</h1>
      <p className='text-gray-500 mt-3'>What our users are saying</p>
      <div className='flex flex-wrap gap-6 mt-10'>
        {
            testimonialsData.map((testimonial,index)=>(
                <div key={index} className='bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-105 transition-all duration-300'>
                    <div className='border rounded-xl px-6 py-2 flex flex-col items-center'>
                        <img src={testimonial.image} alt="" className='rounded-full w-14'/>
                        <h2 className='text-gray-500'>{testimonial.name}</h2>
                        <p>{testimonial.role}</p>
                        <div className='flex mb-4 mt-3'>
                          { Array(testimonial.stars).fill().map((item,index)=>(
                            <img key={index} src={assets.rating_star} alt="" />
                          ))}
                        </div>
                       <p className='text-black'>{testimonial.text}</p>
                    </div>
                </div>
            ))

        }

      </div>
    </div>
  )
}

export default Testimonials
