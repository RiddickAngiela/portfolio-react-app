import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
         <div>
            <img src='https://i.pinimg.com/564x/32/ed/02/32ed02075ead22916480706bdb5e08ff.jpg' alt='Logo' style={{ width: '100px' }}/>
         </div> 

         {/* menu */}
         <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* Hamberger   */}
        <div className='hidden'>
            <FaBars />
        </div>

        {/* Mobile Menu */}
        <ul className='hidden'>
            <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='hidden'>

        </div>
    </div>
  )
}

export default Navbar