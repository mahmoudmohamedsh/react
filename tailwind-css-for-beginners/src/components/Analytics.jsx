import React from 'react'
import Laptop from '../assets/laptop.jpg'
const Analytics = () => {
    return (
        <div className='bg-white w-full py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4' />
                <div className='flex justify-center flex-col mx-4'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>Manage Data Analytics Centrally</h1>
                    <p className='py-2 font-bold'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor nisi quidem totam. Quibusdam, quae dolorem veniam exercitationem ad quaerat, reprehenderit id commodi sint magnam, culpa minus numquam quod voluptatibus.
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md  font-medium  mx-auto md:mx-0 px-6 py-3 '>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics