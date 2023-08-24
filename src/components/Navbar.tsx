import React from 'react';
import logo from "../assests/Images/tesla.png";
import { AiFillQuestionCircle } from 'react-icons/ai'; 
import { SiGoogleearth } from 'react-icons/si'; 
import { CgProfile } from 'react-icons/cg'; 
import tesla from "../assests/Images/tesla_model_x.jpg";
import tesla2 from "../assests/Images/tesla2.webp"
import tesla3 from "../assests/Images/tesla3.jpg"
import tesla4 from "../assests/Images/tesla4.jpg"
import tesla5 from "../assests/Images/tesla5.jpg"
function Navbar() {
  return (
    <>
    <div className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${tesla3})` }}>
      <div className='flex justify-between items-center py-2 text-white text-xl'>
        <div>
          <img src={logo} alt="Tesla Logo" className="w-24 h-18 ml-10" />
        </div>
        <ul className="flex space-x-6">
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
    <div
    className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${tesla2})` }}>
    </div>
    <div
    className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${tesla})` }}>
    </div>
    <div
    className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${tesla4})` }}>
    </div>
    <div
    className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${tesla5})` }}>
    </div>
    <div
    className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${tesla3})` }}>
    </div>
    <div
    className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${tesla5})` }}>
    </div>
    <div
    className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${tesla2})` }}>
    </div>
    </>
  );
}

export default Navbar;
