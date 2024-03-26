import React from 'react'
import image1 from '../assets/g1.jpg'
import image2 from '../assets/g2.jpg'
import image3 from '../assets/g3.jpg'
import image4 from '../assets/g4.jpg'
import image5 from '../assets/g5.jpg'
import image6 from '../assets/g6.jpg'
import image7 from '../assets/g7.jpg'
import image8 from '../assets/g8.jpg'




const Projects = () => {
  return (
    <>

<div className='w-full pt-24 py-10' id='projects'>

  <h1 className='text-center md:text-3xl text-2xl text-black font-semibold underline underline-offset-[20px] decoration-[#df4914]'>PROJECTS</h1>

  <p className='text-center w-3/4 mx-auto text-gray-500 py-10'>Mauris vestibulum dignissim justo pretium. Praesent feugiat metus pellentesque, finibus massa quis, viverra lacus. Ut nisi ante, dignissim sit amet justo pretium.</p>

  <div className='flex flex-wrap justify-center'>

    {/* image 1 */}
    <div className="relative w-96 sm:w-1/4 h-48 lg:h-64 overflow-hidden">
      <img src={image1} className="w-full h-full object-cover transition-transform ease-in-out duration-700 delay-150 hover:scale-110 hover:-translate-y-1"/>
    </div>

    {/* image 2 */}
    <div className="relative w-96 sm:w-1/4 h-48 lg:h-64 overflow-hidden">
      <img src={image2} className="w-full h-full object-cover transition-transform ease-in-out duration-700 delay-150 hover:scale-110 hover:-translate-y-1"/>
    </div>

    {/* image 3 */}
    <div className="relative w-96 sm:w-1/4 h-48 lg:h-64 overflow-hidden">
      <img src={image3} className="w-full h-full object-cover transition-transform ease-in-out duration-700 delay-150 hover:scale-110 hover:-translate-y-1"/>
    </div>

    {/* image 4 */}
    <div className="relative w-96 sm:w-1/4 h-48 lg:h-64 overflow-hidden">
      <img src={image4} className="w-full h-full object-cover transition-transform ease-in-out duration-700 delay-150 hover:scale-110 hover:-translate-y-1"/>
    </div>

    {/* image 5 */}
    <div className="relative w-96 sm:w-1/4 h-48 lg:h-64 overflow-hidden">
      <img src={image5} className="w-full h-full object-cover transition-transform ease-in-out duration-700 delay-150 hover:scale-110 hover:-translate-y-1"/>
    </div>

    {/* image 6 */}
    <div className="relative w-96 sm:w-1/4 h-48 lg:h-64 overflow-hidden">
      <img src={image6} className="w-full h-full object-cover transition-transform ease-in-out duration-700 delay-150 hover:scale-110 hover:-translate-y-1"/>
    </div>

    {/* image 7 */}
    <div className="relative w-96 sm:w-1/4 h-48 lg:h-64 overflow-hidden">
      <img src={image7} className="w-full h-full object-cover transition-transform ease-in-out duration-700 delay-150 hover:scale-110 hover:-translate-y-1"/>
    </div>

    {/* image 8 */}
    <div className="relative w-96 sm:w-1/4 h-48 lg:h-64 overflow-hidden">
      <img src={image8} className="w-full h-full object-cover transition-transform ease-in-out duration-700 delay-150 hover:scale-110 hover:-translate-y-1"/>
    </div>

  </div>

</div>


    </>
  )
}

export default Projects
