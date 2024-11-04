import React from 'react'
import { MdMenu } from "react-icons/md";


const Navmenu = [
  {
    id : 1,
    title : "Home",
    path : "/",
  },

  {
    id : 2,
    title : "Service",
    path : "#",
  },
  {
    id : 3,
    title : "About Us",
    path : "#",
  },

  {
    id : 4,
    title : "Our Team",
    link : "#",
  },
  {
    id : 5,
    title : "Contact Us",
    link : "#",
  }

]

const Navbar = () => {
  return (
    <nav className=''>
      <div className="container py-10 flex justify-between items-center">
        {/* bagian logo */}
        <div className="">
          <h1 className='font-bold text-2xl'>Learn To Web</h1>
        </div>

        {/* bagian menu  */}
        <div className="hidden md:block lg:flex">
          <ul className='flex gap-3'>
          {
            Navmenu.map((item) => (
              <li key={item.id}>
                <a href={item.path} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                  <div className="w-2 h-2 absolute bg-secondary mr-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden rounded-full">
              
                  </div>
                  {item.title}
                </a>
              </li>

            ))}
          </ul>
            <button className='primary-btn'>sign in</button>

        </div>

        {/* bagian mobile humberger menu */}
            <div className="lg:hidden">
            <MdMenu className='text-4xl'/>
            </div>

      </div>
     
    </nav>
  )
}

export default Navbar
