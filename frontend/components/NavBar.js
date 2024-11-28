import React from 'react';

const Navbar = () => {
  return (
    <div className="flex bg-green-200 justify-between p-4">
      <div className="flex space-x-4">
        <button className="bg-green-300 px-4 py-2">Home</button>
        <button className="bg-green-300 px-4 py-2">Manage Info</button>
      </div>
      <button className="bg-yellow-300 px-4 py-2">Account</button>
    </div>
  );
};

export default Navbar;