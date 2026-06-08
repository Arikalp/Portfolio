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
    const videoElement = videoRef.current;

    if (videoElement) {
      if (!isLoaded) {
        const handleLoadedData = () => {
          videoCache.add(video);
          setIsLoaded(true);
        };
        
        videoElement.addEventListener('loadeddata', handleLoadedData);
        
        return () => {
          videoElement.removeEventListener('loadeddata', handleLoadedData);
        };
      } else {
        // If video is cached, load it immediately
        videoElement.load();
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
      className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm md:backdrop-blur-xl border-2 border-slate-600/70 rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-xl min-h-[480px] sm:min-h-[500px] md:min-h-[520px] p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center justify-between"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={isMobile ? {} : {
        y: -15,
        boxShadow: "0 25px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(97, 154, 189, 0.35)",
        borderColor: "rgba(97, 154, 189, 0.65)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={hasAnimated ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#619abd]/10 to-[#79ecab]/10 opacity-0 transition-opacity duration-500 hover:opacity-100" />
      
      <div className="flex flex-col items-center flex-grow w-full">
      <motion.video
        ref={videoRef}
        className="w-full h-32 sm:h-40 md:h-48 lg:h-60 object-cover rounded-md mb-3 sm:mb-4"
        src={video}
        muted
        loop
        preload={isLoaded ? "none" : (isMobile ? "none" : "metadata")}
        playsInline
        animate={isMobile ? {} : {
          scale: isHovered ? 1.15 : 1,
          rotateY: isHovered ? 8 : 0,
          z: isHovered ? 50 : 0
        }}
        transition={isMobile ? {} : { duration: 0.4, ease: "easeOut" }}
        style={isMobile ? {} : {
          transformStyle: "preserve-3d",
          zIndex: isHovered ? 10 : 1
        }}
      >
        Your browser does not support the video tag.
      </motion.video>

      
      <motion.h2 
        className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
        whileHover={isMobile ? {} : { scale: 1.05 }}
      >
        {title}
      </motion.h2>
      
      <motion.p 
        className="text-gray-300 mb-3 sm:mb-4 text-center text-sm sm:text-base leading-relaxed"
        initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
      >
        {details}
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 justify-center"
        initial={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
      >
        {tech.map((t, i) => (
          <motion.span 
            key={i} 
            className="bg-gradient-to-r from-[#619abd]/25 to-[#79ecab]/25 text-[#d8f7e8] px-3 py-1.5 rounded-full text-xs sm:text-sm border border-[#619abd]/40 backdrop-blur-sm font-medium"
            initial={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={hasAnimated ? { duration: 0 } : { duration: 0.3, delay: 0.5 + i * 0.1 }}
            whileHover={isMobile ? {} : { 
              scale: 1.1, 
              background: "linear-gradient(135deg, rgba(97, 154, 189, 0.45) 0%, rgba(121, 236, 171, 0.45) 100%)",
              borderColor: "rgba(121, 236, 171, 0.6)",
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
        className="relative inline-block bg-gradient-to-r from-[#619abd] via-[#79ecab] to-[#ffffff] text-slate-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold overflow-hidden group"
        initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
        whileHover={isMobile ? {} : { 
          scale: 1.05,
          boxShadow: "0 8px 25px rgba(121, 236, 171, 0.45)",
          transition: { duration: 0.2 }
        }}
        whileTap={isMobile ? {} : { scale: 0.95 }}
      >
        <span className="relative z-10">Live View</span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#79ecab] to-[#619abd] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.a>
    </motion.div>
  )
}

export default Projectemp