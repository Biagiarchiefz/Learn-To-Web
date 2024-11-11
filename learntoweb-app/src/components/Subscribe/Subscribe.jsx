import React from 'react'
import { FaBell } from "react-icons/fa";
import sub1 from "../../assets/subscribe1.png"
import sub2 from "../../assets/subscribe2.png"
import { motion } from "framer-motion"

const Subscribe = () => {
  return (
    <section className='bg-[#f4f4f4] py-14'>
      <div className="container grid grid-cols-3">

      <div className="flex justify-center items-center">
        <motion.img
            initial = {{ opacity: 0, x : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        src={sub1} alt="" className='w-[400px]' />
      </div>

      <motion.div
        initial = {{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true}}
        transition={{ duration: 0.5}}
      className="flex flex-col justify-center items-center gap-4">
        <h1 className='text-3xl font-bold w-[400px] text-center'> 500K+ Student are learning from us</h1>
        <p className='w-[500px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eius quasi magnamcta illum quod voluptatum nostrum aliquid.</p>

        <div className="">
          <button className='group hover:scale-110 hover:bg-secondary duration-300 flex items-center justify-center bg-primary px-9 py-2 rounded-md semi-bold text-white gap-2'>
            Subscribe Now
            <FaBell className='group-hover:animate-bounce  duration-300'/>
          </button>
        </div>

      </motion.div>

      <div className="flex items-center justify-center">
        <motion.img
            initial = {{ opacity: 0, x : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        src={sub2} alt="" className='w-[300px]' />
      </div>


      </div>
    </section>
  )
}

export default Subscribe
