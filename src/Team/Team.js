import React from 'react'
import image1 from '../assets/t1.jpg'
import image2 from '../assets/t2.jpg'
import image3 from '../assets/t3.jpg'
import { FaTwitter,FaFacebookF,FaLinkedinIn } from "react-icons/fa";




const Team = () => {
  return (
    <>

            
      <div className='w-full py-16' id='team'>
      <h1 className='text-center md:text-3xl text-2xl text-black font-semibold underline underline-offset-[20px] decoration-[#df4914]'>MEET OUR TEAM</h1>
      <p className='text-center w-3/4 mx-auto text-gray-500 py-10'>Mauris vestibulum dignissim justo pretium. Praesent feugiat metus pellentesque, finibus massa quis, viverra lacus. Ut nisi ante, dignissim sit amet justo pretium.</p>
      <div className='w-full px-4'>
      <div className='max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8'>

      {/* Card 1 */}
          <div className='w-full my-4 p-4 relative group'>
          <div className='relative'>
          <img src={image1} className='w-full' />
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='flex space-x-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
              <a href='#' className='md:px-3 md:py-2 px-2 py-1 border'>
                <FaTwitter className='w-5 h-5 hover:text-blue-400 text-white' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 border'>
                <FaFacebookF className='w-5 h-5 text-white hover:text-blue-500' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 border'>
                <FaLinkedinIn className='w-5 h-5 text-white hover:text-blue-600' />
              </a>
            </div>
          </div>
        </div>

        <div className='border-double border-4 mt-4 border-gray-300'>
          <h1 className='mt-4 text-center text-xl font-semibold tracking-wider text-gray-700'>WILLIAMSON</h1>
          <p className='text-center p-2 text-[#df4914]'>Managing Director</p>
        </div>
      </div>





      {/* Card 2 */}
          <div className='w-full my-4 p-4 relative group'>
        <div className='relative'>
          <img src={image2} className='w-full' />
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='flex space-x-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
              <a href='#' className='md:px-3 md:py-2 px-2 py-1 border'>
                <FaTwitter className='w-5 h-5 hover:text-blue-400 text-white' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 border'>
                <FaFacebookF className='w-5 h-5 text-white hover:text-blue-500' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 border'>
                <FaLinkedinIn className='w-5 h-5 text-white hover:text-blue-600' />
              </a>
            </div>
          </div>
        </div>

        <div className='border-double border-4 mt-4 border-gray-300'>
          <h1 className='mt-4 text-center text-xl font-semibold tracking-wider text-gray-700'>LINDA CARL</h1>
          <p className='text-center p-2 text-[#df4914]'>Technician</p>
        </div>
      </div>






      {/* Card 3 */}
        <div className='w-full my-4 p-4 relative group'>
        <div className='relative'>
          <img src={image3} className='w-full' />
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className='flex space-x-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
              <a href='#' className='md:px-3 md:py-2 px-2 py-1 border'>
                <FaTwitter className='w-5 h-5 hover:text-blue-400 text-white' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 border'>
                <FaFacebookF className='w-5 h-5 text-white hover:text-blue-500' />
              </a>

              <a href='#' className='md:px-3 md:py-2 px-2 py-1 border'>
                <FaLinkedinIn className='w-5 h-5 text-white hover:text-blue-600' />
              </a>
            </div>
          </div>
        </div>

        <div className='border-double border-4 mt-4 border-gray-300'>
          <h1 className='mt-4 text-center text-xl font-semibold tracking-wider text-gray-700'>HARINGTON</h1>
          <p className='text-center p-2 text-[#df4914]'>General Manager</p>
        </div>
      </div>

        </div>
       </div>
      </div>


      
    </>
  )
}

export default Team
