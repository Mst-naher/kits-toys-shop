import React from 'react';
import logo from "/logo-3.png"
const Header = () => {
  return (
    <div>
      <img className='w-full lg:h-[300px] cursor-pointer' src={logo} alt="logo" />
    </div>
  );
};

export default Header;