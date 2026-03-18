import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaHeart, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[rgba(0,0,0,0.3)] backdrop-blur-md text-white py-12 sm:py-16 mt-10 sm:mt-16 md:mt-20 border-t border-white/10">
      
      <div className="container mx-auto px-4 sm:px-6 md:px-20">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-[#619abd] via-[#79ecab] to-[#ffffff] bg-clip-text text-transparent">
              Sankalp Saini
            </h3>
            <p className="text-sm sm:text-base text-gray-400 flex items-center justify-center gap-2">
              <FaCode className="text-[#79ecab]" />
              Full Stack Developer
            </p>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6 sm:space-x-8"
          >
            <motion.a
              href="https://github.com/Arikalp"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#619abd]/50 hover:bg-[#619abd]/10 transition-all duration-300"
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/arikalp/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#619abd]/50 hover:bg-[#619abd]/10 transition-all duration-300"
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="https://twitter.com/Arikalp_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#79ecab]/50 hover:bg-[#79ecab]/10 transition-all duration-300"
            >
              <FaTwitter className="text-xl" />
            </motion.a>
            <motion.a
              href="https://instagram.com/_arikalp_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#79ecab]/50 hover:bg-[#79ecab]/10 transition-all duration-300"
            >
              <FaInstagram className="text-xl" />
            </motion.a>
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Developer Credit */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-2"
          >
            <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
              Made with <FaHeart className="text-red-400 animate-pulse" /> by Sankalp
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;