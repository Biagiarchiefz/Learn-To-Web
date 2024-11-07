import React from 'react'
import Navbar from '../Navbar/Navbar'
import { IoIosArrowRoundForward } from "react-icons/io";
import hero from "../../assets/hero.png"

const Hero = () => {
  return (
    <section className='bg-light overflow-hidden relative'>
      <Navbar/>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">

    
        {/* text hero */}
        <div className="flex flex-col justify-center py-14 md:py-0  relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
          <h1 className='text-3xl lg:text-5xl font-bold leading-snug'>Let's Learn to build a <span className='text-secondary'>website </span> 
          for your bussiness 
          </h1>

          <div className="flex justify-center md:justify-start">
          <button className='primary-btn flex items-center gap-2 group'>
            Let's Join
            <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2
            group-hover:-rotate-45 duration-300' />
            </button>
          </div>
          </div>

        </div>

        {/* hero image */}
        <div className="flex flex-col justify-center">
          
          <img src={hero} alt="" />
        
        </div>

        
      </div>

      
    </section>
  )
}

export default Hero
