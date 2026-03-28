import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaHeart, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-t from-black/40 to-transparent py-12 text-white backdrop-blur-lg sm:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-96 bg-cyan-500/10 blur-3xl rounded-full" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-8 md:px-20">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sankalp Saini
            </h3>
            <p className="flex items-center justify-center gap-2 text-sm text-gray-300/90 sm:text-base">
              <FaCode className="text-cyan-400" />
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
              whileHover={{ scale: 1.2, y: -5, boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)' }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-400/30 hover:border-cyan-400/60 text-cyan-300 transition-all duration-300"
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/arikalp/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-400/30 hover:border-blue-400/60 text-blue-300 transition-all duration-300"
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="https://twitter.com/Arikalp_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/10 border border-purple-400/30 hover:border-purple-400/60 text-purple-300 transition-all duration-300"
            >
              <FaTwitter className="text-xl" />
            </motion.a>
            <motion.a
              href="https://instagram.com/_arikalp_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)' }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-400/30 hover:border-cyan-400/60 text-cyan-300 transition-all duration-300"
            >
              <FaInstagram className="text-xl" />
            </motion.a>
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

          {/* Developer Credit */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-2"
          >
            <p className="flex items-center justify-center gap-2 text-sm text-gray-300/90">
              Made with <FaHeart className="text-cyan-400 animate-pulse" /> by Sankalp
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} All rights reserved · Web3 Styled Portfolio
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;