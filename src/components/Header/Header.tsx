import React, { useState, useEffect } from 'react';

function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${isHeaderFixed ? 'fixed top-0 pr-20 bg-gradient-to-r from-blue-900 to-black h-14 p-2 ' : 'bg-gradient-to-r from-blue-900 to-black h-14 p-2'}`}>
      <div className="header-content-container">
        <h1 className='ml-40 text-2xl text-white'> $7500 Federal Tax Credit
          <span className='text-white text-base ml-3'>
            Available For New Model 3 and Model Y. Reductions to tax credit likely after Dec 31.
          </span>
          <a href="see" className="text-white hover:text-gray-300 ml-6 text-base underline">
    See Details
  </a>
        </h1>
      </div>
    </div>
  );
}

export default Header;
