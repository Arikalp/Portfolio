import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Navbar = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // Close menu on navigation
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <nav className='sticky top-0 z-50 bg-[rgba(0,0,0,0.3)] backdrop-blur-md text-white px-4 md:px-20 h-[12vh] md:h-[15vh] flex items-center'>
      <div className='flex justify-between items-center w-full'>
        <div onClick={() => handleNavigation('home')} className='cursor-pointer flex items-center h-[18vh] md:h-[20vh]'>
          <Image src='/assets/Sankalp.png' alt='logo' width={60} height={60} className='inline-block h-full w-auto' />
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Desktop Menu */}
        <ul className='hidden md:flex flex-row space-x-10'>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm ${activeSection === 'home' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm ${activeSection === 'about' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm ${activeSection === 'projects' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('projects')}
          >
            Projects
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm ${activeSection === 'contact' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('contact')}
          >
            Contact
          </motion.li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[rgba(0,0,0,0.95)] backdrop-blur-md flex flex-col items-center space-y-6 py-8 md:hidden z-50">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-lg ${activeSection === 'home' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-lg ${activeSection === 'about' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-lg ${activeSection === 'projects' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('projects')}
          >
            Projects
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-lg ${activeSection === 'contact' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('contact')}
          >
            Contact
          </motion.li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar