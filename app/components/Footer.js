import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[rgba(0,0,0,0.3)] backdrop-blur-md text-white py-8 mt-20">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Media Icons */}
          <div className="flex space-x-8">
            <motion.a
              href="https://github.com/Arikalp"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:text-blue-400 transition-colors"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/arikalp/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com/Arikalp_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:text-blue-400 transition-colors"
            >
              <FaTwitter />
            </motion.a>
             <motion.a
              href="https://instagram.com/_arikalp_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:text-blue-400 transition-colors"
            >
              <FaInstagram />
            </motion.a>
          </div>

          {/* Developer Credit */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Developed by <span className="text-white font-semibold">Sankalp</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;