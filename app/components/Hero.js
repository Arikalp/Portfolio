import React from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/ui/gradient-text";
import VariableProximity from "@/components/VariableProximity";
import Image from "next/image";

const Hero = ({ onNavigate }) => {
  // Project cards data for floating cards
  const featuredProjects = [
    {
      id: 1,
      title: "SmartTutor",
      image: "/assets/Smart-Tutor.mp4",
      tag: "AI-Powered",
    },
    {
      id: 2,
      title: "SacchiRaah",
      image: "/assets/SaachiRaah.mp4",
      tag: "NGO Platform",
    },
  ];

  // Floating card animation variants
  const floatingCardVariants = (index) => ({
    hidden: { opacity: 0, y: 50, x: 50 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + index * 0.2,
        ease: "easeOut",
      },
    },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4 + index * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.3,
      },
    },
  });

  return (
    <>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blur circles */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-32 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="hero relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 py-8 text-white sm:gap-12 sm:px-8 sm:py-12 md:gap-16 md:px-20 md:py-16 lg:h-[90vh] lg:flex-row">
        
        {/* Left Column - Text Content */}
        <motion.div
          className="z-10 flex flex-1 flex-col justify-center space-y-6 sm:space-y-8 md:space-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter">
              <GradientText
                colors={["#06b6d4", "#a855f7", "#3b82f6"]}
                animationSpeed={8}
                showBorder={false}
                enableBlur={false}
                className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter glow-text drop-shadow-lg"
              >
                Build the Future
              </GradientText>
            </h1>
            <motion.p
              className="mt-3 text-lg text-gray-200/95 sm:mt-4 sm:text-xl md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Creating digital experiences through code and design
            </motion.p>
          </motion.div>

          {/* Subtitle with Variable Proximity */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-lg leading-relaxed text-cyan-200/95 sm:text-xl md:text-2xl">
              <VariableProximity
                text="I am a Full Stack Developer"
                radius={120}
                fromWeight={380}
                toWeight={760}
                color="#06b6d4"
                activeColor="#a855f7"
              />
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-sm leading-relaxed text-gray-300/90 sm:text-base">
              Specializing in React, Next.js, and modern web technologies. Turning ideas into beautiful, functional applications.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="gradient-btn font-body text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-semibold relative group overflow-hidden"
              onClick={() => onNavigate("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 -z-10"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg border-2 border-cyan-400/50 text-cyan-300 hover:border-cyan-300 transition-all duration-300 backdrop-blur-sm bg-cyan-500/5"
              onClick={() => onNavigate("projects")}
              whileHover={{ scale: 1.05, borderColor: 'rgba(34, 211, 238, 1)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column - Floating Cards */}
        <motion.div
          className="relative z-10 flex h-80 w-full flex-1 items-center justify-center sm:h-96 md:h-[500px] lg:h-full lg:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Floating Project Cards */}
          <div className="relative w-full h-full max-w-sm md:max-w-md lg:max-w-none">
            {/* Card 1 */}
            <motion.div
              className="absolute top-0 left-0 w-64 sm:w-72 md:w-80 glass-card rounded-2xl p-5 sm:p-6 shadow-2xl overflow-hidden"
              variants={floatingCardVariants(0)}
              initial="hidden"
              animate={["visible", "animate"]}
            >
              <div className="space-y-4">
                <div className="w-full h-40 sm:h-48 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      ST
                    </div>
                    <p className="text-xs text-gray-400 mt-2">AI Tutor</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">SmartTutor</h3>
                  <p className="text-sm text-gray-300">AI-powered learning platform</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    React
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                    Firebase
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 pointer-events-none" />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="absolute bottom-0 right-0 w-64 sm:w-72 md:w-80 glass-card rounded-2xl p-5 sm:p-6 shadow-2xl overflow-hidden"
              variants={floatingCardVariants(1)}
              initial="hidden"
              animate={["visible", "animate"]}
            >
              <div className="space-y-4">
                <div className="w-full h-40 sm:h-48 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      SR
                    </div>
                    <p className="text-xs text-gray-400 mt-2">NGO Platform</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">SacchiRaah</h3>
                  <p className="text-sm text-gray-300">Social impact platform</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    Next.js
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    MongoDB
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 pointer-events-none" />
            </motion.div>
          </div>

          {/* Floating Elements Accent */}
          <motion.div
            className="absolute top-1/2 right-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-400/10 blur-2xl pointer-events-none"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
