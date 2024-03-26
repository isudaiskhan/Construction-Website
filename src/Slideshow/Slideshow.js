import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bgimage from '../assets/testimonialsbg.jpg';
import image1 from '../assets/c1.png';
import image2 from '../assets/c2.png';
import image3 from '../assets/c3.png';
import image4 from '../assets/c4.png';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: image1, title: 'Brian Fantana', text: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .' },
    { image: image2, title: 'Brick Tamland', text: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .' },
    { image: image3, title: 'Ron Burgundy', text: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .' },
    { image: image4, title: 'Arturo Mendez', text: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Automatic slideshow every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
 <div className="relative bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden" style={{ backgroundImage: `url(${bgimage})` }}>
 <h1 className="sm:text-4xl text-2xl overflow-hidden text-center mt-8 sm:mt-12 text-white">TESTIMONIALS</h1>
        <h1 className="mt-6 tracking-widest text-center text-white">WHAT OUR CLIENTS SAY</h1>
  <div className="max-w-screen mx-auto h-[500px] flex items-center justify-center relative mt-5">
  

    {slides.map((slide, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: index === currentSlide ? 1 : 0, x: index === currentSlide ? '0%' : '100%' }}
        transition={{ type: 'tween', duration: 0.5 }}
        className="absolute inset-0 text-white text-center"
      >
      
        <img src={slide.image} alt={slide.title} className='lg:w-52 sm:w-44 w-24 mx-auto mt-6' />
        <p className='mt-10 italic tracking-widest leading-relaxed sm:w-3/4 w-11/12 mx-auto'>{slide.text}</p>
        <h1 className="text-2xl mt-6 text-[#df4914] font-medium mx-auto">{slide.title}</h1>
      </motion.div>
    ))}
    <button className="prev absolute text-white text-2xl top-1/2 left-4 transform -translate-y-1/2" onClick={prevSlide}>
      &#10094;
    </button>
    <button className="next absolute top-1/2 text-white text-2xl right-4 transform -translate-y-1/2" onClick={nextSlide}>
      &#10095;
    </button>
  </div>
</div> 



  );
};

export default Slideshow;

