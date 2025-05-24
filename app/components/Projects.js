import React from 'react'
import { motion } from 'framer-motion'
import Projectemp from './Projectemp'
import MoreProjects from './MoreProjects'

const Projects = ({ onNavigate }) => {
  return (
    <>
    <div className='projects flex flex-col justify-center py-[10vh] items-start text-white px-20 '>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='projects text-4xl font-bold'>My Projects</motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='project-del text-gray-500 mt-2'>Here are some of the projects I've worked on:</motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Projectemp
          video="/assets/OCHI.mp4"
          liveLink="https://ochi-live.vercel.app"
          title="OCHI - A Modern Web Experience"
          details="OCHI is a modern web experience designed to showcase clean design and interactive elements using advanced frontend techniques."
          tech={["React", "GSAP", "Framer Motion", "Tailwind CSS", "Locomotive Scroll"]}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Projectemp
          video="/assets/Postify.mp4"
          liveLink="https://ochi-live.vercel.app"
          title="Postify - A posting Platform"
          details="Postify is a posting platform that allows users to share and discover content in a clean and modern interface."
          tech={["EJS","Tailwind CSS", "Node.js", "Express", "MongoDB"]}
        />
      </motion.div>
    
    <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="basis-1/2 flex justify-center"
      >
        <Projectemp
          video="/assets/GLANCER.mp4"
          liveLink="https://ochi-live.vercel.app"
          title="Glancer - A Social Media Dashboard"
          details="Glancer is a social media dashboard that provides insights and analytics for your social media accounts."
          tech={["HTML", "GSAP", "CSS", "Tailwind CSS", "JavaScript" ,"API"]}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="basis-1/2 flex justify-center"
      >
        <Projectemp
          video="/assets/CHITCHAT.mp4"  
          liveLink="https://ochi-live.vercel.app"
          title="ChitChat - A Chat Application"
          details="ChitChat is a chat application that allows users to communicate in real-time with a sleek and modern interface."
          tech={["HTML", "CSS", "Tailwind CSS", "JavaScript", "Socket.IO"]}
        />
      </motion.div>
      

      

    </div>

    <div className='flex justify-center items-center py-10'>
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="gradient-btn text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        onClick={() => onNavigate && onNavigate('projects')}
      >
        View More Projects
      </motion.button>
    </div>
    </>
  )
}

export default Projects