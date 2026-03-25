import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '../contexts/ThemeContext'
import { FaBolt } from 'react-icons/fa'

const Navbar = ({ onNavigate, currentSection = 'home' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rotationCount, setRotationCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { currentTheme, switchTheme } = useTheme();

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      // Ignore tiny movement to avoid jitter.
      if (Math.abs(delta) < 10) {
        return;
      }

      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (delta > 0) {
        setIsVisible(false);
        setMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleThemeSwitch = () => {
    setRotationCount(prev => prev + 120);
    switchTheme();
  };

  const handleNavigation = (section) => {
    setMenuOpen(false); // Close menu on navigation
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.3)] backdrop-blur-md text-white px-4 sm:px-6 md:px-20 h-[10vh] sm:h-[12vh] md:h-[15vh] flex items-center transform transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='flex justify-between items-center w-full'>
        {/* Logo */}
        <div 
          onClick={() => handleNavigation('home')} 
          className='cursor-pointer flex items-center gap-2 h-[8vh] sm:h-[10vh] md:h-[12vh]'
        >
          <Image 
            src='/assets/Sankalp.png' 
            alt='logo' 
            width={100} 
            height={100} 
            className='sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] h-auto' 
          />
        </div>
        
        {/* Desktop Menu */}
        <ul className='hidden md:flex flex-row space-x-8 lg:space-x-10'>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm lg:text-base ${currentSection === 'home' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm lg:text-base ${currentSection === 'about' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm lg:text-base ${currentSection === 'projects' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('projects')}
          >
            Projects
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm lg:text-base ${currentSection === 'contact' ? 'text-blue-400' : ''}`}
            onClick={() => handleNavigation('contact')}
          >
            Contact
          </motion.li>
        </ul>
        
        {/* Theme Switcher */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleThemeSwitch}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          animate={{ rotate: rotationCount }}
          transition={{ duration: 0.3 }}
        >
          <FaBolt className="text-xl text-cyan-400" />
        </motion.button>
        
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 focus:outline-none touch-manipulation"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-[rgba(0,0,0,0.95)] backdrop-blur-md md:hidden z-50"
        >
          <ul className="flex flex-col items-center space-y-4 py-6 px-4">
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer text-lg font-medium py-3 px-6 rounded-lg transition-colors duration-200 ${currentSection === 'home' ? 'text-blue-400 bg-blue-400/10' : 'hover:bg-white/10'}`}
              onClick={() => handleNavigation('home')}
            >
              Home
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer text-lg font-medium py-3 px-6 rounded-lg transition-colors duration-200 ${currentSection === 'about' ? 'text-blue-400 bg-blue-400/10' : 'hover:bg-white/10'}`}
              onClick={() => handleNavigation('about')}
            >
              About
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer text-lg font-medium py-3 px-6 rounded-lg transition-colors duration-200 ${currentSection === 'projects' ? 'text-blue-400 bg-blue-400/10' : 'hover:bg-white/10'}`}
              onClick={() => handleNavigation('projects')}
            >
              Projects
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer text-lg font-medium py-3 px-6 rounded-lg transition-colors duration-200 ${currentSection === 'contact' ? 'text-blue-400 bg-blue-400/10' : 'hover:bg-white/10'}`}
              onClick={() => handleNavigation('contact')}
            >
              Contact
            </motion.li>
          </ul>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar