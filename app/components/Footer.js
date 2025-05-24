import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[rgba(0,0,0,0.3)] backdrop-blur-md text-white py-8 mt-20">
      <div className="container mx-auto px-20">
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
              href="https://linkedin.com/in/sankalp-saini-1919742a3/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:text-blue-400 transition-colors"
            >
              <FaTwitter />
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