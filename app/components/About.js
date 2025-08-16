import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

const About = () => {
  return (
    <div className="min-h-screen py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 hero text-gray-300"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 sm:space-y-6 text-gray-300"
        >
          <p className="text-base sm:text-lg leading-relaxed hero">
            Hello! I&apos;m Sankalp, a passionate Full Stack Developer with a keen interest in creating
            innovative and user-friendly web applications. My journey in web development has equipped
            me with a strong foundation in both frontend and backend technologies.
          </p>

          <p className="text-base sm:text-lg leading-relaxed hero">
            I specialize in modern web technologies including React, Node.js, and various other cutting-edge tools that help me build robust and scalable applications. Alongside my web development expertise, I have strong proficiency in Data Structures and Algorithms (DSA), which enhances my ability to write efficient, optimized code and tackle complex problems effectively. My approach combines technical depth with creative problem-solving to deliver exceptional digital experiences.
          </p>

          <div className="mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 hero">Education</h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[rgba(255,255,255,0.03)] p-4 sm:p-6 rounded-lg border border-gray-700 backdrop-blur-sm"
            >
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2">Bachelor of Technology</h3>
              <p className="text-gray-400 text-sm sm:text-base">Computer Science Engineering</p>
              <p className="text-gray-500 text-sm sm:text-base">2023 - 2027</p>
            </motion.div>
          </div>

          <div className="mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 hero">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[rgba(255,255,255,0.03)] p-4 sm:p-6 rounded-lg border border-gray-700 backdrop-blur-sm"
              >
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2">Frontend Development</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[rgba(255,255,255,0.03)] p-4 sm:p-6 rounded-lg border border-gray-700 backdrop-blur-sm"
              >
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2">Backend Development</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Building robust server-side applications with Node.js, Express, and various databases.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 hero">Personal Interests</h2>
            <p className="text-base sm:text-lg leading-relaxed hero">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
              projects, or learning about the latest trends in web development. I believe in continuous
              learning and staying updated with the ever-evolving tech landscape.
            </p>
          </div>
        </motion.div>
        <div className='flex justify-center items-center mt-6 sm:mt-8'>
           <button className="flex">
          <a href="/assets/Sankalp_Saini_Resume_.pdf" download className="inline-block bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-blue-600 transition gradient-btn text-sm sm:text-base">
            Download Resume
          </a>
        </button>
        </div>
       
      </motion.div>
    </div>
  );
};

export default About;
