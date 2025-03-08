import React from 'react'
import { ReactTyped } from 'react-typed'
const Hero = () => {
    return (
        <div className='text-white font-bold'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='md:text-3xl sm:text-xl  text-[#00df9a] p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6'>GROW WITH DATA</h1>
                <div className='flex justify-center items-center flex-nowrap'>
                    <p className='py-4 md:text-5xl sm:text-3xl text-xl'>Fast , Flexible financing for </p>
                    <ReactTyped
                        className='md:text-5xl sm:text-3xl text-xl md:pl-4 pl-2'
                        strings={[
                            "BTB",
                            "BTC",
                            "SAAS",
                        ]}
                        typeSpeed={40}
                        backSpeed={40}
                        loop />
                </div>
                <p className='md:text-2xl text-xl text-gray-500'>Monitor you data analytics to increase revenue for BTB , BTC , SAAS</p>
                <button className='mt-2 bg-[#00df9a] w-[200px] rounded-md  font-medium font-bold mx-auto px-6 py-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero