import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Projectemp = ({ video, liveLink, title, details, tech }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const playPromiseRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      playPromiseRef.current = videoRef.current.play();
      if (playPromiseRef.current !== undefined) {
        playPromiseRef.current.catch(() => {
          // Auto-play was prevented
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      if (playPromiseRef.current !== undefined) {
        playPromiseRef.current.then(() => {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }).catch(() => {
          // Play was interrupted
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-xl min-h-[480px] sm:min-h-[500px] md:min-h-[520px] p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center justify-between"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -15,
        boxShadow: "0 25px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(59, 130, 246, 0.3)",
        borderColor: "rgba(59, 130, 246, 0.6)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 hover:opacity-100" />
      
      <div className="flex flex-col items-center flex-grow w-full">
      <motion.video
        ref={videoRef}
        className="w-full h-32 sm:h-40 md:h-48 lg:h-60 object-cover rounded-md mb-3 sm:mb-4"
        muted
        loop
        preload="auto"
        animate={{
          scale: isHovered ? 1.15 : 1,
          rotateY: isHovered ? 8 : 0,
          z: isHovered ? 50 : 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          transformStyle: "preserve-3d",
          zIndex: isHovered ? 10 : 1
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      
      <motion.h2 
        className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h2>
      
      <motion.p 
        className="text-gray-300 mb-3 sm:mb-4 text-center text-sm sm:text-base leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {details}
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {tech.map((t, i) => (
          <motion.span 
            key={i} 
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 px-3 py-1.5 rounded-full text-xs sm:text-sm border border-blue-400/30 backdrop-blur-sm font-medium"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
            whileHover={{ 
              scale: 1.1, 
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.4) 100%)",
              borderColor: "rgba(59, 130, 246, 0.6)",
              transition: { duration: 0.2 }
            }}
          >
            {t}
          </motion.span>
        ))}
      </motion.div>
      </div>
      
      <motion.a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold overflow-hidden group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 8px 25px rgba(59, 130, 246, 0.5)",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Live View</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.a>
    </motion.div>
  )
}

export default Projectemp