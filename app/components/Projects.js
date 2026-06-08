import React from "react";
import { motion } from "framer-motion";
import Projectemp from "./Projectemp";

const Projects = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15,
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
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="projects flex flex-col justify-center py-[5vh] sm:py-[6vh] md:py-[7vh] items-start text-white px-4 sm:px-8 md:px-20"
      >
        <motion.h1
          initial={{ opacity: 0, x: -100, rotateY: -45 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="projects text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100, rotateY: 45 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="project-del text-gray-500 mt-2 text-sm sm:text-base"
        >
          Here are some of the projects I&apos;ve worked on:
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-20 md:gap-30 lg:gap-45 justify-items-center px-4 sm:px-6 md:px-20"
      >

          <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            rotateY: -5,
            transition: { duration: 0.3 },
          }}
          className="w-full max-w-md lg:max-w-none"
        >
          <Projectemp
            video="https://ik.imagekit.io/arikalp/INTERVO.mp4"
            liveLink="https://intervoo.vercel.app/"
            title="Intervo - A Agentic Interviewer"
            details="Intervo is an AI-powered interview preparation platform that helps users practice and improve their interview skills with personalized feedback and real-time simulations."
            tech={[
              "Next.js",
              "GROQ API",
              "Wishper",
              "Clerk",
              "MongoDB",
            ]}
          />
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            rotateY: 5,
            transition: { duration: 0.3 },
          }}
          className="w-full max-w-md lg:max-w-none"
        >
          <Projectemp
            video="https://ik.imagekit.io/arikalp/Smart-Tutor.mp4"
            liveLink="https://smartutor.vercel.app/"
            title="SmartTutor - Uses LLM to Teach Students"
            details=" An AI-powered tutor that leverages advanced LLM technology to provide personalized learning experiences, helping students grasp complex concepts with ease and efficiency."
            tech={["React.js", "Firebase", "LLM Integraion"]}
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            rotateY: -5,
            transition: { duration: 0.3 },
          }}
          className="w-full max-w-md lg:max-w-none"
        >
          <Projectemp
            video="https://ik.imagekit.io/arikalp/SaachiRaah.mp4"
            liveLink="https://sacchiraah.vercel.app/"
            title="SacchiRaah - A NGO Website"
            details="SacchiRaah is a non-profit organization website built to raise awareness and support for social causes, featuring a clean design and user-friendly interface."
            tech={["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB"]}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            rotateY: 5,
            transition: { duration: 0.3 },
          }}
          className="w-full max-w-md lg:max-w-none"
        >
          <Projectemp
            video="https://ik.imagekit.io/arikalp/TYPESTO_FULL.mp4"
            liveLink="https://typesto-full.vercel.app/"
            title="Typesto - A LLM based Typing game"
            details="Typesto is a typing game that helps users improve their typing skills in a fun and engaging way with the help of LLM."
            tech={["Tailwind CSS", "Next.js", "Express.js", "MongoDB", "LLM"]}
          />
        </motion.div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="flex justify-center items-center py-8 sm:py-10"
      >
        <motion.button
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          whileHover={{
            scale: 1.05,
            rotateX: 5,
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="gradient-btn text-white py-2 sm:py-3 px-4 sm:px-6 rounded hover:bg-blue-600 transition text-sm sm:text-base"
          onClick={() => onNavigate && onNavigate("projects")}
        >
          View More Projects
        </motion.button>
      </motion.div>
    </>
  );
};

export default Projects;
