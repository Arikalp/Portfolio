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
            title="Intervo - Agentic AI Interview Platform"
            details="It generates resume-tailored interview questions, conducts realistic voice+video interview sessions, evaluates answers in real time, and now features a full RAG (Retrieval-Augmented Generation) pipeline that makes the AI interviewer remember your resume and past answers."
            tech={["Next.js","RAG" ,"Fastembed","Emotion detection", "Llama 3.3 70B", "Wishper", "Clerk", "MongoDB"]}
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
            details="A typing game that uses LLM to generate sentences based on the user's typing speed and accuracy. It also provides real-time feedback and suggestions to improve typing skills."
            tech={[
              "Tailwind CSS",
              "Next.js",
              "Express.js",
              "MongoDB",
              "Llama 3.3 70B",
            ]}
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
            video="../assets/Project/eduagent.mp4"
            liveLink="The AI co-pilot built for live classrooms"
            title="EduAgent - An AI Co-Pilot for Live Classrooms"
            details="EduAgent turns a teacher's spoken lecture into structured learning — transcribing speech in real time, generating quiz questions on the fly, and producing AI-assisted session notes automatically. All while the class is still in session." 
            tech={["Next.js", "Llama 3.3 70B","WebRTC", "LiveKit", "Framer-motion", "Firebase"]}
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
            tech={["React.js", "Firebase", "LLM Integraion" , "Tailwind CSS", "Framer-motion"]}
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
