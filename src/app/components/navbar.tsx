import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-2">
      <div className="flex items-right">
        <p>My Dashboard</p>
      </div>
      <div className='flex items-right'>
        <button className="bg-Blue text-White-200 ml-4 px-4 py-2 rounded-md">View your store</button>
      </div>
    </nav>
  );
};

export default Navbar;
