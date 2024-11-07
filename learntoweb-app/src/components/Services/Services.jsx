import React from 'react'
import { TbWorldWww } from "react-icons/tb";

const services = [
  {
    id: 1,
    title : 'web development'
  }
]

const Services = () => {
  return (
    <div className='container'>
      <div className="">
      <h1 className='text-4xl font-bold text-secondary py-10'>Service we provide</h1>
      </div>

      <div className="">
        <div className="w-[190px] h-[160px] bg-dark2 rounded-[10%] flex flex-col justify-center items-center gap-8">
        <TbWorldWww className='text-4xl'/>
        
      <div className="">
        
        { 
          services.map((item) => (
            item.title
          ))
        }
      
      </div>
        </div>

      </div>
      
    </div>
  )
}

export default Services
