import React from 'react'
import {FiChevronRight,FiUser, FiMail, FiMessageSquare,} from 'react-icons/fi'
import { FaTwitter,FaFacebookF,FaDribbble,FaGoogle } from "react-icons/fa";


const Form = () => {
  return (
    <>

    <div className='w-full py-16' id='contact'>
    <h1 className='text-center md:text-3xl text-2xl text-black font-semibold underline underline-offset-[20px] decoration-[#df4914]'>GET IN TOUCH</h1>
      <p className='text-center w-3/4 mx-auto text-gray-500 py-10'>Mauris vestibulum dignissim justo pretium. Praesent feugiat metus pellentesque, finibus massa quis, viverra lacus. Ut nisi ante, dignissim sit amet justo pretium.</p>
  <div className='max-w-[1240px] mx-auto flex flex-col sm:flex-col md:flex-row'>

   {/* Form Section */}
    <form className='md:w-3/5 w-11/12 max-w-3xl mx-auto pt-10 space-y-4 mb-4 md:mb-0'>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className='md:w-1/2 relative'>
          <input type="text" id="input1" name="input1" placeholder='Name' className="w-full border rounded border-black px-4 py-3 text-black focus:outline-blue-700" />
          <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className='md:w-1/2 relative'>
          <input type="email" id="input2" name="input2" placeholder='Email' className="w-full border rounded border-black px-4 py-3 text-black focus:outline-blue-700" />
          <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className='w-full relative'>
        <textarea id="textarea" placeholder='Message' name="textarea" rows="6" className="p-2 px-4 py-3 w-full border border-black rounded-md focus:outline-blue-700" />
        <FiMessageSquare className="absolute right-3 bottom-3 text-gray-500" />
      </div>

      <div className="flex items-center justify-start">
        <button type="submit" className="hover:bg-[#35424a] font-semibold flex items-center text-white px-8 py-3 rounded bg-[#df4914] focus:outline-none focus:ring focus:border-blue-700">
          SEND
          <FiChevronRight className='ml-1 text-lg' />
        </button>
      </div>
    </form>




   {/* Company Name Section */}
    <div className='md:w-1/4 w-11/12 mx-auto my-3 mt-10 md:ml-[-10px]'>
      <h1 className='text-gray-700  font-semibold'>Company name</h1>
      <p className='mt-2 w-48 leading-8 text-gray-600'>15-RG, Lorem Ipsum, Main Road, quibusdam et aut</p>
      <p className='mt-2 text-gray-600'>Mobile: 0025-89674532</p>
      <p className='mt-2 text-gray-600'>Phone: 040-1654321-9</p>
      <h1 className='mt-4 font-semibold text-gray-700'>Email</h1>
      <p className='mt-2 text-gray-600'><a href='#'>info@example.com</a></p>
      <h1 className='text-gray-700 font-semibold mt-6'>We're on social networks</h1>

      <div className='flex'>
       <a href='#' className='px-3 py-2' >
         <FaFacebookF className='w-5 h-5 hover:text-blue-600' />
       </a>

       <a href='#' className='px-3 py-2' >
         <FaTwitter className='w-5 h-5 hover:text-blue-400' />
       </a>

       <a href='#' className='px-3 py-2' >
       <FaDribbble className='w-5 h-5  hover:text-red-500' />
        </a>

        <a href='#' className='px-3 py-2' >
       <FaGoogle className='w-5 h-5  hover:text-blue-700' />
        </a>

    </div>

      </div>
    </div>
  </div>



    </>
  )
}

export default Form
