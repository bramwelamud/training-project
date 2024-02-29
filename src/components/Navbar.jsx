import React from 'react'
import { navLinks } from '../constants'
import { useState } from 'react'


const navbar = () => {

  const [active, setActive] = useState("home");

  return (
    <div  className='w-full py-6  flex justify-between items-center navbar'>
         <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
     

           
      
    </div>
  )
}

export default navbar
