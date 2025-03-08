import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare

} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='text-white max-w-[1240px] p-8  lg:grid-cols-3 grid gap-8  mx-auto'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.\</h1>
                <p className=' py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim iste exercitationem sint, reprehenderit ullam omnis perspiciatis voluptatibus expedita, doloremque laboriosam corrupti nesciunt obcaecati ipsam? Eligendi neque explicabo rerum excepturi!</p>
                <div className=' flex md:w-[75%] gap-4'>
                    <FaDribbbleSquare size={30} color='#00df9a' />
                    <FaFacebookSquare size={30} color='#00df9a' />
                    <FaGithubSquare size={30} color='#00df9a' />
                    <FaInstagram size={30} color='#00df9a' />
                    <FaTwitterSquare size={30} color='#00df9a' />
                </div>
            </div>

            <div className="lg:col-span-2 flex justify-between capitalize">
                <div>
                    <h6 className='font-medium text-gray-400'>company</h6>
                    <ul>
                        <li className='py-2 text-sm'>about</li>
                        <li className='py-2 text-sm'>blog</li>
                        <li className='py-2 text-sm'>jobs</li>
                        <li className='py-2 text-sm'>press</li>
                        <li className='py-2 text-sm'>career</li>

                    </ul>
                </div>


                <div>
                    <h6 className='font-medium text-gray-400'>legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>claim</li>
                        <li className='py-2 text-sm'>policy</li>
                        <li className='py-2 text-sm'>terms</li>

                    </ul>
                </div>


                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketting</li>
                        <li className='py-2 text-sm'>commerce</li>
                        <li className='py-2 text-sm'>Insights</li>

                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>support</h6>
                    <ul>
                        <li className='py-2 text-sm'>pricing</li>
                        <li className='py-2 text-sm'>documentation</li>
                        <li className='py-2 text-sm'>guides</li>
                        <li className='py-2 text-sm'>api status</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Footer