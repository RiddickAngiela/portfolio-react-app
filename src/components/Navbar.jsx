import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
        const [nav,setNav] = useState(false)
        const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
         <div>
            <img src='https://i.pinimg.com/564x/32/ed/02/32ed02075ead22916480706bdb5e08ff.jpg' alt='Logo' style={{ width: '100px' }}/>
         </div> 

         {/* menu */}
         
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        
        {/* Hamberger   */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars />: <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full bg-[#0a192f] flex flex-col justify-center items-center '}>
            <li className='py-4 text-4xl'>Home</li>
                <li className='py-4 text-4xl'>About</li>
                <li className='py-4 text-4xl'>Skills</li>
                <li className='py-4 text-4xl'>Work</li>
                <li className='py-4 text-4xl'>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar