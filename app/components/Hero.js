import React from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/ui/gradient-text";

const Hero = ({ onNavigate }) => {
  return (
    <>
      <div className="hero flex flex-col justify-center py-5 items-start h-[80vh] sm:h-[85vh] md:h-[90vh] text-white px-4 sm:px-8 md:px-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <GradientText
              colors={["#619abd", "#79ecab", "#ffffff"]}
              animationSpeed={8}
              showBorder={false}
              enableBlur={false}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            >
              Welcome to my Portfolio
            </GradientText>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 text-gray-300"
        >
          I am a Full Stack Developer
        </motion.p>
        <div className="button-container relative mt-6 sm:mt-8 md:mt-10">
          <button
            className="gradient-btn text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4"
            onClick={() => onNavigate("contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
