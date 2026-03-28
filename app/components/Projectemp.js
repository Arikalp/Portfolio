import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Global cache to store loaded video URLs and animated components
const videoCache = new Set();
const animationCache = new Set();

const Projectemp = ({ video, liveLink, title, details, tech }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(videoCache.has(video));
  const [hasAnimated, setHasAnimated] = useState(animationCache.has(video));
  const [isMobile, setIsMobile] = useState(false);
  const playPromiseRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        animationCache.add(video);
        setHasAnimated(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [video, hasAnimated]);

  useEffect(() => {
    if (videoRef.current) {
      if (!isLoaded) {
        const handleLoadedData = () => {
          videoCache.add(video);
          setIsLoaded(true);
        };
        
        videoRef.current.addEventListener('loadeddata', handleLoadedData);
        
        return () => {
          if (videoRef.current) {
            videoRef.current.removeEventListener('loadeddata', handleLoadedData);
          }
        };
      } else {
        // If video is cached, load it immediately
        videoRef.current.load();
      }
    }
  }, [video, isLoaded]);

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
      className="relative w-full max-w-sm sm:max-w-md md:max-w-xl min-h-[500px] sm:min-h-[530px] md:min-h-[560px] rounded-3xl overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={hasAnimated ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
      whileHover={isMobile ? {} : {
        y: -12,
        rotateY: 5,
        rotateX: 3,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
    >
      {/* Glassmorphic Background with Ultra Blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl" />
      
      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent pointer-events-none"
        animate={isHovered ? {
          borderColor: [
            'rgba(34, 211, 238, 0)',
            'rgba(34, 211, 238, 0.3)',
            'rgba(168, 85, 247, 0.3)',
            'rgba(34, 211, 238, 0)',
          ],
          boxShadow: [
            '0 0 0px rgba(34, 211, 238, 0)',
            '0 0 20px rgba(34, 211, 238, 0.3)',
            '0 0 30px rgba(168, 85, 247, 0.3)',
            '0 0 0px rgba(34, 211, 238, 0)',
          ]
        } : {
          borderColor: 'rgba(34, 211, 238, 0.2)',
          boxShadow: '0 0 0px rgba(34, 211, 238, 0)',
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
      />

      {/* Enhanced Glow Shadow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        animate={isHovered ? {
          boxShadow: [
            '0 0 40px rgba(34, 211, 238, 0.1)',
            '0 0 60px rgba(34, 211, 238, 0.25), 0 0 30px rgba(168, 85, 247, 0.15)',
            '0 0 40px rgba(34, 211, 238, 0.1)',
          ]
        } : {
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full p-6 sm:p-7 md:p-8 flex flex-col justify-between">
        {/* Image Section - Prominent */}
        <motion.div
          className="w-full mb-5 sm:mb-6 md:mb-7 rounded-2xl overflow-hidden relative group/image"
          animate={isMobile ? {} : {
            scale: isHovered ? 1.06 : 1,
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Image Background Glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={isHovered ? {
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.4), inset 0 0 30px rgba(168, 85, 247, 0.1)'
            } : {
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.1)'
            }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: 'none' }}
          />
          
          <motion.video
            ref={videoRef}
            className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-2xl border border-cyan-400/30 relative z-10"
            muted
            loop
            preload={isLoaded ? "none" : (isMobile ? "none" : "metadata")}
            playsInline
            animate={isMobile ? {} : {
              scale: isHovered ? 1.05 : 1,
            }}
            transition={isMobile ? {} : { duration: 0.3, ease: "easeOut" }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent pointer-events-none opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Title */}
        <motion.h2 
          className="text-xl sm:text-2xl font-bold mb-3 text-center bg-gradient-to-r from-cyan-300 via-purple-300 to-blue-300 bg-clip-text text-transparent leading-tight"
          initial={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
          whileHover={isMobile ? {} : { scale: 1.03 }}
        >
          {title}
        </motion.h2>
        
        {/* Description */}
        <motion.p 
          className="text-gray-300 mb-5 sm:mb-6 text-center text-sm sm:text-base leading-relaxed flex-grow"
          initial={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
        >
          {details}
        </motion.p>
        
        {/* Tech Stack Badges - Pill Design */}
        <motion.div 
          className="flex flex-wrap gap-2 mb-6 sm:mb-7 md:mb-8 justify-center"
          initial={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
        >
          {tech.map((t, i) => (
            <motion.span 
              key={i} 
              className="relative inline-flex items-center backdrop-blur-xl rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-200 border border-cyan-400/40 overflow-hidden group/badge"
              initial={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={hasAnimated ? { duration: 0 } : { duration: 0.3, delay: 0.5 + i * 0.1 }}
            >
              {/* Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full opacity-60 group-hover/badge:opacity-100 transition-opacity duration-300"
              />
              
              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={isHovered ? {
                  boxShadow: '0 0 15px rgba(34, 211, 238, 0.4), inset 0 0 15px rgba(34, 211, 238, 0.1)'
                } : {
                  boxShadow: 'none'
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Text */}
              <span className="relative z-10">{t}</span>
            </motion.span>
          ))}
        </motion.div>

        {/* Live View Button with Glow */}
        <motion.a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full inline-flex items-center justify-center gap-2 gradient-btn text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold overflow-hidden group/btn"
          initial={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
          whileHover={isMobile ? {} : { 
            scale: 1.06,
            transition: { duration: 0.2 }
          }}
          whileTap={isMobile ? {} : { scale: 0.96 }}
        >
          {/* Button Glow */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            animate={isHovered ? {
              boxShadow: [
                '0 0 15px rgba(34, 211, 238, 0)',
                '0 0 30px rgba(34, 211, 238, 0.4)',
                '0 0 15px rgba(34, 211, 238, 0)',
              ]
            } : {
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)'
            }}
            transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
            style={{ pointerEvents: 'none' }}
          />

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20"
            animate={isHovered ? { x: ['−100%', '100%'] } : {}}
            transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
          />

          {/* Text */}
          <span className="relative z-10 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Live
          </span>
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Projectemp