import React from 'react'

const Newsletter = () => {
    return (
        <div className='text-white w-full py-16 px-4 '>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl text-[#00df9a] py-2'>Want tips & tricks to optimize your flow</h1>
                    <p>Sign up to our newsletter stay up to data.</p>
                </div>
                <div>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='my-2 p-3 w-full bg-white rounded-md text-black' type="text" placeholder='Enter your Email' />
                        <button className='w-[200px] my-2 text-white bg-[#00df9a] font-bold rounded-md ml-4 px-4 py-3'>Notify me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span>.</p>
                </div>

            </div>
        </div>
    )
}

export default Newsletter