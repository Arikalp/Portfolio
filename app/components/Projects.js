import React from 'react'
import { motion } from 'framer-motion'
import Projectemp from './Projectemp'
import MoreProjects from './MoreProjects'

const Projects = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <>
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='projects flex flex-col justify-center py-[5vh] sm:py-[6vh] md:py-[7vh] items-start text-white px-4 sm:px-8 md:px-20'>
        <motion.h1
          initial={{ opacity: 0, x: -100, rotateY: -45 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className='projects text-2xl sm:text-3xl md:text-4xl font-bold'>My Projects</motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100, rotateY: 45 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className='project-del text-gray-500 mt-2 text-sm sm:text-base'>Here are some of the projects I&apos;ve worked on:</motion.p>
    </motion.div>

    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-20 justify-items-center px-4 sm:px-6 md:px-20">
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          scale: 1.02, 
          rotateY: 5,
          transition: { duration: 0.3 }
        }}
        className="w-full max-w-md lg:max-w-none"
      >
        <Projectemp
          video="/assets/OCHI.mp4"
          liveLink="https://ochi-murex.vercel.app/"
          title="OCHI - A Modern Web Experience"
          details="OCHI is a modern web experience designed to showcase clean design and interactive elements using advanced frontend techniques."
          tech={["React", "Framer Motion", "Tailwind CSS", "Locomotive Scroll"]}
        />
      </motion.div>
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          scale: 1.02, 
          rotateY: -5,
          transition: { duration: 0.3 }
        }}
        className="w-full max-w-md lg:max-w-none"
      >
        <Projectemp
          video="/assets/POSTIFY.mp4"
          liveLink="https://postify-cefj.onrender.com"
          title="Postify - A posting Platform"
          details="Postify is a posting platform that allows users to share and discover content in a clean and modern interface."
          tech={["EJS","Tailwind CSS", "Node.js", "Express", "MongoDB"]}
        />
      </motion.div>
    
    <motion.div
        variants={itemVariants}
        whileHover={{ 
          scale: 1.02, 
          rotateY: 5,
          transition: { duration: 0.3 }
        }}
        className="w-full max-w-md lg:max-w-none"
      >
        <Projectemp
          video="/assets/GLANCER.mp4"
          liveLink="https://glancer-omega.vercel.app/"
          title="Glancer - A Social Media Dashboard"
          details="Glancer is a social media dashboard that provides insights and analytics for your social media accounts."
          tech={["HTML", "GSAP", "CSS", "Tailwind CSS", "JavaScript" ,"API"]}
        />
      </motion.div>
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          scale: 1.02, 
          rotateY: -5,
          transition: { duration: 0.3 }
        }}
        className="w-full max-w-md lg:max-w-none"
      >
        <Projectemp
          video="/assets/Chesso.mp4"  
          liveLink="https://chesso-ten.vercel.app/"
          title="Chesso - Chess Game"
          details="Chesso is an interactive chess game built with modern web technologies, featuring real-time gameplay and a clean interface."
          tech={["HTML","Tailwind CSS","JavaScript","Express.js","FireBase"]}
        />
      </motion.div>

    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className='flex justify-center items-center py-8 sm:py-10'>
      <motion.button
        initial={{ opacity: 0, y: 50, rotateX: -30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        whileHover={{ 
          scale: 1.05, 
          rotateX: 5,
          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className="gradient-btn text-white py-2 sm:py-3 px-4 sm:px-6 rounded hover:bg-blue-600 transition text-sm sm:text-base"
        onClick={() => onNavigate && onNavigate('projects')}
      >
        View More Projects
      </motion.button>
    </motion.div>
    </>
  )
}

export default Projects