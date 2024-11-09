import React from 'react'
import Navbar from '../Navbar/Navbar'
import { IoIosArrowRoundForward } from "react-icons/io";
import hero from "../../assets/hero.png"
import { animate, delay, easeInOut, motion } from 'framer-motion'


export const Fadeup = (delay) => {
  return {
    initial : {
      opacity : 0,
      y : 50,
    },

    animate : {
      opacity : 1,
      y : 0,
      transition : {
        type : "spring",
        stiffness : 100,
        duration : 0.5,
        delay : delay,
        ease : "easeInOut"
      }
    }

  }
}

const Hero = () => {
  return (
    <section className='bg-light overflow-hidden relative'>
      <Navbar/>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">

    
        {/* text hero */}
        <div className="flex flex-col justify-center py-14 md:py-0  relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
          <motion.h1 
          variants={Fadeup(0.6)} 
          initial="initial"
          animate= "animate"
          className='text-3xl lg:text-5xl font-bold leading-snug'>Let's Learn to build a <span className='text-secondary'>website </span> 
          for your bussiness 
          </motion.h1>

          <motion.div
          variants={Fadeup(0.8)}
          initial="initial"
          animate= "animate"
           className="flex justify-center md:justify-start">
          <button className='primary-btn flex items-center gap-2 group'>
            Let's Join
            <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2
            group-hover:-rotate-45 duration-300' />
            </button>
          </motion.div>
          </div>

        </div>

        {/* hero image */}
        <div className="flex flex-col justify-center">
          
          <motion.img
          initial = {{ x: 50, opacity: 0 }}
          animate = {{ x: 0, opacity: 1 }}
          transition = {{duration: 0.6, delay: 0.4, ease: easeInOut}}
          src={hero} alt=""className='w-[400px] lg: w-[600px] drop-shadow'/>
        
        </div>

        
      </div>

      
    </section>
  )
}

export default Hero
