// import React from 'react'

// const Navbar = () => {
//   return (
//     <header className='bg-base-300 border-b border-base-content/10'>
//         <div>Navbarvjhbnk</div>

//     </header>
    
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Menu, Plus, PlusIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <div className="text-2xl font-bold text-primary">
            🍋 NoteFess
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex gap-6 items-center text-base font-medium text-base-content">
            
            <Link to="/create" className="btn btn-primary">
            <PlusIcon className='size-5'/>
            <span>New Note</span>
            </Link>
            
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden text-base-content"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-base-content font-medium">
          
          
          <Link to="/create" className="btn btn-primary">
            <PlusIcon className='size-5'/>
            <span>New Note</span>
        </Link>
          
        </div>
      )}
    </header>
  );
};

export default Navbar;
