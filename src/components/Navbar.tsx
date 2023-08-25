import React from 'react';
import logo from "../assests/Images/teslalogo.jpg";
import { AiFillQuestionCircle } from 'react-icons/ai'; 
import { SiGoogleearth } from 'react-icons/si'; 
import { CgProfile } from 'react-icons/cg'; 
const teslavideos = require("../assests/video/tesla2.mp4");
const teslavideos1 = require("../assests/video/tesla.mp4");
const teslavideos2 = require("../assests/video/tesla1.mp4");

function Navbar() {
  return (
    <>
    <div className='min-h-screen relative'>
      <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted>
        <source src={teslavideos2} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='flex justify-between items-center py-2 text-white text-xl relative z-10 h-full'>
        <div className='flex items-center ml-10'>
          <img src={logo} alt="Tesla Logo" className="w-24 h-18" />
        </div>
        <ul className="flex justify-center items-center space-x-6">
          <li>Vehicles</li>
          <li>Energy</li>
          <li>Charging</li>
          <li>Discover</li>
          <li>Shop</li>
        </ul>
        <div className="flex space-x-4 mr-8">
          <AiFillQuestionCircle className="h-6 w-6" />
          <SiGoogleearth className="h-6 w-6" />
          <CgProfile className="h-6 w-6" />
        </div>
      </div>
    </div>
    <div className='min-h-screen relative'>
    <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted>
        <source src={teslavideos1} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className='min-h-screen relative'>
    <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted>
        <source src={teslavideos} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
}

export default Navbar;
