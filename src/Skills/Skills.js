import React from 'react'
import bgImage from '../assets/skillsbg.jpg'
import CircularProgressBar from '../Skills/CircularProgressBar ';





const Skills = () => {
  return (
    <>

     <div className={'bg-no-repeat bg-cover bg-center h-96 bg-fixed flex items-center'} 
        style={{ backgroundImage: `url(${bgImage})`}} >

    <div className="text-white mx-auto">
      <div className="mx-auto">
        <h3 className="text-3xl font-semibold mb-14 text-center">OUR SKILLS</h3>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-10">
          <CircularProgressBar percent={25}  />
          <CircularProgressBar percent={70} />
          <CircularProgressBar percent={50} />
          <CircularProgressBar percent={15} />
        </div>
      </div>
    </div>

   </div>

    </>
  )
}

export default Skills
