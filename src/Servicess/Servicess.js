import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { FaInbox } from "react-icons/fa6";
import { GiStoneTower } from "react-icons/gi";




const Servicess = () => {
  return (
    <>
      
    <div className='w-full pt-24 py-10 px-4' id='services'>

    <h1 className='text-center md:text-3xl text-2xl text-black font-semibold underline underline-offset-[20px] decoration-[#df4914]'>SERVICES</h1>
    <p className='text-center w-3/4 mx-auto text-gray-500 py-10'>Mauris vestibulum dignissim justo pretium. Praesent feugiat metus pellentesque, finibus massa quis, viverra lacus. Ut nisi ante, dignissim sit amet justo pretium.</p>
    
    <div className='max-w-[1321px] w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
     {/* Card 1 */}
     <div className='md:col-span-1 md:flex md:flex-col md:items-center md:py-12 md:pt-16 text-center group'>
      <IoMdSettings className='w-14 h-14 mb-8 mx-auto md:mx-0 group-hover:text-[#df4914]' />
      <div className='w-full px-2 mx-auto text-gray-500'>
        <p>Mauris nisi ante, fringilla ac vehicula a, lacinia ut nulla. Sed eleifend sem a quam sagittis suscipit.Aenean sed maximus ipsum</p>
      </div>
    </div>




    {/* Card 2 */}
    <div className='md:col-span-1 md:flex md:flex-col md:items-center md:py-12 md:pt-16 text-center group pt-10'>
      <FaInbox className='w-14 h-14 mb-8 mx-auto md:mx-0 group-hover:text-[#df4914]'/>
      <div className='w-full px-2 mx-auto text-gray-500'>
        <p>Mauris nisi ante, fringilla ac vehicula a, lacinia ut nulla. Sed eleifend sem a quam sagittis suscipit.Aenean sed maximus ipsum</p>
      </div>
      
     </div>


  
    {/* Card 3 */}
    <div className='md:col-span-1 md:flex md:flex-col md:items-center md:py-12 md:pt-16 text-center group pt-10'>
      <GiStoneTower className='w-14 h-14 mb-8 mx-auto md:mx-0 group-hover:text-[#df4914]'/>
      <div className='w-full px-2 mx-auto text-gray-500'>
        <p>Mauris nisi ante, fringilla ac vehicula a, lacinia ut nulla. Sed eleifend sem a quam sagittis suscipit.Aenean sed maximus ipsum</p>
      </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Servicess
