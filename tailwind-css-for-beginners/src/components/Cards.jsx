import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className='bg-white w-full py-[10rem] px-4 '>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">

        <div className="w-full flex flex-col items-center p-4 my-8 shadow-xl rounded-lg hover:scale-105 duration-300">
          <img className='w-20 mx-auto mt-[-3rem]' src={Single} alt="" />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-4xl font-bold'>$149</p>
          <div className='text-center font-medium w-full'>
            <p className='py-2 border-b border-gray-400 mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b border-gray-400 mx-8'>1 Granted User</p>
            <p className='py-2 border-b border-gray-400 mx-8'>Send up to 2 GB</p>
          </div>
          <button className="rounded bg-black font-bold p-2 mt-4 text-[#00df9a] hover:cursor-pointer">Start trail</button>
        </div>

        <div className="w-full bg-gray-50 flex flex-col items-center p-4 my-4 shadow-xl rounded-lg hover:scale-105 duration-300">
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="" />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-4xl font-bold'>$149</p>
          <div className='text-center font-medium w-full'>
            <p className='py-2 border-b border-gray-400 mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b border-gray-400 mx-8'>1 Granted User</p>
            <p className='py-2 border-b border-gray-400 mx-8'>Send up to 2 GB</p>
          </div>
          <button className="rounded bg-[#00df9a] font-bold p-2 mt-4 text-black hover:cursor-pointer">Start trail</button>
        </div>

        <div className="w-full flex flex-col items-center p-4 my-8 shadow-xl rounded-lg hover:scale-105 duration-300">
          <img className='w-20 mx-auto mt-[-3rem]' src={Triple} alt="" />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-4xl font-bold'>$149</p>
          <div className='text-center font-medium w-full'>
            <p className='py-2 border-b border-gray-400 mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b border-gray-400 mx-8'>1 Granted User</p>
            <p className='py-2 border-b border-gray-400 mx-8'>Send up to 2 GB</p>
          </div>
          <button className="rounded bg-black font-bold p-2 mt-4 text-[#00df9a] hover:cursor-pointer">Start trail</button>
        </div>

      </div>

    </div>
  )
}

export default Cards