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
        className="projects flex flex-col justify-center py-16 sm:py-20 md:py-24 items-start text-white px-4 sm:px-8 md:px-20"
      >
        <motion.h1
          initial={{ opacity: 0, x: -100, rotateY: -45 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="projects text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100, rotateY: 45 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="project-del text-gray-400 mt-4 text-base sm:text-lg"
        >
          Here are some of the projects I&apos;ve worked on:
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 justify-items-center px-4 sm:px-8 md:px-20 py-8 sm:py-12 md:py-16"
      >
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
            video="/assets/Smart-Tutor.mp4"
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
            video="/assets/SaachiRaah.mp4"
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
            video="/assets/TYPESTO_FULL.mp4"
            liveLink="https://typesto-full.vercel.app/"
            title="Typesto - A LLM based Typing game"
            details="Typesto is a typing game that helps users improve their typing skills in a fun and engaging way with the help of LLM."
            tech={["Tailwind CSS", "Next.js", "Express.js", "MongoDB", "LLM"]}
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
            video="/assets/Chesso.mp4"
            liveLink="https://chesso-lake.vercel.app/"
            title="Chesso - Chess Game"
            details="Chesso is an interactive chess game built with modern web technologies, featuring real-time gameplay and a clean interface."
            tech={[
              "HTML",
              "Tailwind CSS",
              "JavaScript",
              "Express.js",
              "FireBase",
            ]}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="flex justify-center items-center py-12 sm:py-16 md:py-20"
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
          className="gradient-btn text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold text-base sm:text-lg"
          onClick={() => onNavigate && onNavigate("projects")}
        >
          View More Projects
        </motion.button>
      </motion.div>
    </>
  );
};

export default Projects;
