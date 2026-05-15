import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="w-full h-16 bg-gray-800 text-white font-bold text-3xl flex items-center justify-center shadow-md">
      {title}
    </div>
  );
};

export default Header;