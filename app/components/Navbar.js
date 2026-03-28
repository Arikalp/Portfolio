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
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-xl border-b border-white/10 text-white px-4 sm:px-6 md:px-20 h-auto py-4 sm:py-5 flex items-center transform transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='flex justify-between items-center w-full'>
        {/* Logo */}
        <motion.div 
          onClick={() => handleNavigation('home')} 
          className='cursor-pointer flex items-center gap-2 h-auto transition-transform duration-300 hover:scale-105'
          whileHover={{ scale: 1.05 }}
        >
          <Image 
            src='/assets/Sankalp.png' 
            alt='logo' 
            width={80} 
            height={80} 
            className='w-16 sm:w-20 md:w-24 h-auto' 
          />
        </motion.div>
        
        {/* Desktop Menu */}
        <ul className='hidden md:flex flex-row space-x-8 lg:space-x-12'>
          <motion.li
            whileHover={{ scale: 1.1, color: '#06b6d4' }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm lg:text-base font-medium transition-colors duration-300 ${currentSection === 'home' ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-300'}`}
            onClick={() => handleNavigation('home')}
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#06b6d4' }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm lg:text-base font-medium transition-colors duration-300 ${currentSection === 'about' ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-300'}`}
            onClick={() => handleNavigation('about')}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#06b6d4' }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm lg:text-base font-medium transition-colors duration-300 ${currentSection === 'projects' ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-300'}`}
            onClick={() => handleNavigation('projects')}
          >
            Projects
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#06b6d4' }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm lg:text-base font-medium transition-colors duration-300 ${currentSection === 'contact' ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-300'}`}
            onClick={() => handleNavigation('contact')}
          >
            Contact
          </motion.li>
        </ul>
        
        {/* Theme Switcher */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleThemeSwitch}
          className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 hover:border-cyan-400/60 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
          animate={{ rotate: rotationCount }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <FaBolt className="text-lg" />
        </motion.button>
        
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 focus:outline-none touch-manipulation"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-cyan-400 my-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full glass-card rounded-none py-6 px-4 md:hidden z-50 border-t"
        >
          <ul className="flex flex-col items-center space-y-4">
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer text-lg font-medium py-3 px-6 rounded-lg transition-all duration-200 ${currentSection === 'home' ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-400/30' : 'text-gray-300 hover:bg-white/10'}`}
              onClick={() => handleNavigation('home')}
            >
              Home
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer text-lg font-medium py-3 px-6 rounded-lg transition-all duration-200 ${currentSection === 'about' ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-400/30' : 'text-gray-300 hover:bg-white/10'}`}
              onClick={() => handleNavigation('about')}
            >
              About
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer text-lg font-medium py-3 px-6 rounded-lg transition-all duration-200 ${currentSection === 'projects' ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-400/30' : 'text-gray-300 hover:bg-white/10'}`}
              onClick={() => handleNavigation('projects')}
            >
              Projects
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer text-lg font-medium py-3 px-6 rounded-lg transition-all duration-200 ${currentSection === 'contact' ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-400/30' : 'text-gray-300 hover:bg-white/10'}`}
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