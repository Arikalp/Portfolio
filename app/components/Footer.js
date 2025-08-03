import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[rgba(0,0,0,0.3)] backdrop-blur-md text-white py-6 sm:py-8 mt-10 sm:mt-16 md:mt-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-20">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          {/* Social Media Icons */}
          <div className="flex space-x-6 sm:space-x-8">
            <motion.a
              href="https://github.com/Arikalp"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl sm:text-2xl hover:text-blue-400 transition-colors p-2"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/arikalp/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl sm:text-2xl hover:text-blue-400 transition-colors p-2"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com/Arikalp_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl sm:text-2xl hover:text-blue-400 transition-colors p-2"
            >
              <FaTwitter />
            </motion.a>
             <motion.a
              href="https://instagram.com/_arikalp_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl sm:text-2xl hover:text-blue-400 transition-colors p-2"
            >
              <FaInstagram />
            </motion.a>
          </div>

          {/* Developer Credit */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              Developed by <span className="text-white font-semibold">Sankalp</span>
            </p>
            <p className="text-xs text-gray-500 mt-1 sm:mt-2">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;