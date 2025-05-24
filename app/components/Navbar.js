import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <>
      <div className='sticky top-0 z-50 flex justify-between items-center bg-[rgba(0,0,0,0.3)] backdrop-blur-md text-white px-20'>
        <img onClick={() => handleNavigation('home')} src='/assets/Sankalp.png' alt='logo' className='w-50 h-25 inline-block' />
        <ul className='flex space-x-20'>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer ${activeSection === 'home' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer  ${activeSection === 'about' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer ${activeSection === 'projects' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('projects')}
          >
            Projects
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer ${activeSection === 'contact' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('contact')}
          >
            Contact
          </motion.li>
        </ul>
      </div>
      
    </>
  )
}

export default Navbar