import React from 'react'
import bgImage from '../assets/about.webp'

const About = () => {
  return (
    <>

    <div className='w-full pt-14 py-5 px-4' id='about'>

    <h1 className='text-center md:text-3xl text-2xl text-black font-semibold underline underline-offset-[20px] decoration-[#df4914]'>ABOUT US</h1>
    <div className='w-3/4 mx-auto'>
    <p className='text-center text-gray-400 py-10'>Mauris vestibulum dignissim justo pretium. Praesent feugiat metus pellentesque, finibus massa quis, viverra lacus. Ut nisi ante, dignissim sit amet justo pretium.</p>
    </div>
    </div>

    <div className='flex flex-wrap'>
    <div
        className='bg-no-repeat bg-cover bg-center h-96 w-full lg:w-1/2'
        style={{ backgroundImage: `url(${bgImage})` }}></div>

    <div className='w-full lg:w-1/2 bg-[#df4914] p-5'>
        <h1 className='text-2xl text-white font-semibold'>Contrary to popular belief</h1>
        <p className='pt-8 text-white'>
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour,combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable.
        </p>
        <p className='pt-8 text-white'>
        Curabitur justo neque, pretium vel metus quis, laoreet porta velit. Nullam molestie
        ipsum nec diam tempor molestie. In suscipit est sed ligula fringilla elementum. Sed
        fringilla pellentesque eros, in luctus orci finibus at. Sed aliquam augue et fringilla
        porta. Donec ex nisi, finibus a eros a, egestas convallis ex.
        </p>

        <button className='border-2 text-white px-4 py-2 hover:border-black hover:text-black mt-6'>
        Read More
        </button>
    </div>
    </div>
      
    </>
  )
}

export default About