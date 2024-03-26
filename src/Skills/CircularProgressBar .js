import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

const CircularProgressBar  = ({ percent }) => {

    const customStyles = {
        path: {
          stroke: '#df4914', // Color of the progress bar
          strokeLinecap: 'round', // Rounded line ends
          transition: 'stroke-dashoffset 0.5s ease 0s', // Smooth transition animation
          strokeWidth: 5, // Adjust the strokeWidth to make it thinner
        },
        trail: {
          stroke: '#fff', // Color of the trail (background)
          strokeWidth: 5, // Adjust the strokeWidth to make it thinner
        },
        text: {
          fill: '#fff', // Color of the text
          fontSize: '12px', // Adjust the font size as needed
        },
      };

  return (
    <>

<div className="lg:w-44 md:w-32 w-24 mx-auto">
      <CircularProgressbar
        value={percent}
        text={`${percent}%`} 
         styles={customStyles}

       
      />
    </div>
      
    </>
  )
}

export default CircularProgressBar 
