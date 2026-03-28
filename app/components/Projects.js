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
        className="projects mx-auto flex w-full max-w-7xl flex-col items-start justify-center px-4 py-16 text-white sm:px-8 sm:py-20 md:px-20 md:py-24"
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
          className="project-del mt-4 text-base text-gray-300/90 sm:text-lg"
        >
          Here are some of the projects I&apos;ve worked on:
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-10 px-4 py-8 sm:gap-12 sm:px-8 sm:py-12 md:gap-16 md:px-20 md:py-16 lg:grid-cols-2"
      >
        <motion.div
          variants={itemVariants}
          className="w-full"
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
          className="w-full"
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
          className="w-full"
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
          className="w-full"
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
