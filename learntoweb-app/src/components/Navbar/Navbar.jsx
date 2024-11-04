import React from 'react'


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
        <div className=" lg:block">
          <ul className='flex gap-3'>
          {
            Navmenu.map((item) => (
              <li key={item.id}>
                <a href={item.path}>
                  {item.title}
                </a>
              </li>

            ))}
          </ul>
        </div>

        {/* bagian mobile humberger menu */}

      </div>
     
    </nav>
  )
}

export default Navbar
