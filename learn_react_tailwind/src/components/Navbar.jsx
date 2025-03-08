import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <>
            <div className='flex justify-between items-center h-24 max-w-[1240] mx-auto px-4 text-white'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React Tailwind Vite</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4 '>Home</li>
                    <li className='p-4 '>Company</li>
                    <li className='p-4 '>resources</li>
                    <li className='p-4 '>About</li>
                    <li className='p-4 '>Contact</li>
                </ul>
                {/* open close menu button icons */}
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20} />}
                </div>
            </div>
            {/* mobile menu */}
            <div className={!nav ? 'ease-in-out duration-500 bg-[#000300] fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full text-white': 'fixed left-[-100%]'}>
                <h1 className='pl-4 pt-6 w-full text-3xl font-bold text-[#00df9a]'>React Tailwind Vite</h1>
                <ul className='pt-24 uppercase '>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 '>Contact</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar