import React, { useState } from 'react';
import { AiOutlineClose} from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import bgimage from '../assets/banner.jpg'


const Navbar = () => {
   const [mobileMenu, setMobileMenu] = useState(false);

  const triggerNavItem = (target) => {
    // Implement your logic here for handling navigation item clicks
    console.log(`Navigating to ${target}`);
  };

  const triggerMobileNavItem = (target) => {
    // Close the mobile menu after clicking an item
    setMobileMenu(false);
  
    // Scroll to the target section
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <>

         
     <div className="relative">
        {/* Navbar */}
        <div className="w-full z-50 lg:py-0 py-5 top-0 absolute bg-white sm:ps-0 ps-6 sm:pe-0 pe-6">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <a href="/">
                 <h1 className='w-full font-semibold cursor-pointer text-3xl text-black'><a href='#'>BEST INDUSTRY</a></h1>

              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">

              <li className='p-7 border-transparent relative group'>
             <a href='#home' className='text-[#df4914] font-semibold'>
                 Home
                 <span className='absolute bottom-0 left-0 w-full h-[5px] bg-[#df4914] transform scale-x-100 transition-transform origin-bottom-left'></span>
             </a>
         </li>
       
         <li className='p-7 border-transparent relative group'>
             <a href='#about' className='text-black font-semibold group-hover:text-[#df4914]'>
                 About
                 <span className='absolute bottom-0 left-0 w-full h-[5px] bg-[#df4914] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left'></span>
             </a>
         </li>

         <li className='p-7 border-transparent relative group'>
             <a href='#services' className='text-black font-semibold group-hover:text-[#df4914]'>
                 Services
                 <span className='absolute bottom-0 left-0 w-full h-[5px] bg-[#df4914] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left'></span>
             </a>
         </li>

         <li className='p-7 border-transparent relative group'>
             <a href='#projects' className='text-black font-semibold group-hover:text-[#df4914]'>
                 Projects
                 <span className='absolute bottom-0 left-0 w-full h-[5px] bg-[#df4914] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left'></span>
             </a>
         </li>

         <li className='p-7 border-transparent relative group'>
             <a href='#team' className='text-black font-semibold group-hover:text-[#df4914]'>
                 Team
                 <span className='absolute bottom-0 left-0 w-full h-[5px] bg-[#df4914] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left'></span>
             </a>
         </li>

         <li className='p-7 border-transparent relative group'>
             <a href='#contact' className='text-black font-semibold group-hover:text-[#df4914]'>
                 Contact
                 <span className='absolute bottom-0 left-0 w-full h-[5px] bg-[#df4914] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left'></span>
             </a>
         </li>
            </ul>
          </div>

              <div className="block lg:hidden">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? (
                  <IoMdMenu  className="text-3xl text-white bg-[#df4914]" />
                ) : (
                  <IoMdMenu  className="text-3xl text-white bg-[#df4914]" />
                )}
              </button>
            </div>
      </div>
      </div>
      </div>
   

      {/* Mobile Menu */}
       {mobileMenu && (
  <div className="lg:hidden fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
    <div className="absolute right-0 min-h-screen w-6/12 py-4 px-8 shadow md:w-1/3 bg-[#df4914] z-50">
      <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenu(false)}>
        <AiOutlineClose className="text-4xl text-white hover:text-gray-300" />
      </button>
      <ul className="mt-8 flex flex-col space-y-5">

        <MobileNavItem onClick={() => triggerMobileNavItem('#home')}> HOME</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#about')}> ABOUT</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#services')}> SERVICES</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#projects')}> PROJECTS</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#team')}> TEAM</MobileNavItem>

        <MobileNavItem onClick={() => triggerMobileNavItem('#contact')}> CONTACT</MobileNavItem>
      </ul>
    </div>
  </div>
)}


<div className={'bg-no-repeat bg-cover bg-center h-[750px] flex items-center'} 

style={{ backgroundImage: `url(${bgimage})`}} >

<div className='h-1/3 sm:mx-auto mt-20'>
  <div className="md:w-1/3 sm:w-2/5 lg:w-1/3 sm:py-12 py-5 absolute bg-[#f85b22b7]">
    <div className="w-full text-white">
      <h1 className="text-3xl px-5">Donec ac justo</h1>
      <p className="pt-5 px-5">
        Aenean sed maximus ipsum. Donec porttitor leo dictum sollicitudin pretium.
        Nullam a tellus ante. Quisque pulvinar libero nec dolor porta, eget tristique nulla
        pretium.
      </p>
    </div>
  </div>
</div>

</div>

    </>
  );
};


const NavItem = ({ children, onClick }) => {
  return (
    <li className="group pl-6">
      <span onClick={onClick} className="cursor-pointer pt-0.5 font-semibold uppercase text-black">
        {children}
      </span>
      
    </li>
  );
};

const MobileNavItem = ({ children, onClick }) => {
  return (
    <li className="py-2">
      <span onClick={onClick} className="cursor-pointer pt-0.5 font-semibold uppercase text-white">
        {children}
      </span>
          </li>
  );
};

export default Navbar;


















