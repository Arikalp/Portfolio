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
      className="glass-card w-full max-w-sm sm:max-w-md md:max-w-xl min-h-[480px] sm:min-h-[500px] md:min-h-[520px] p-6 sm:p-7 md:p-8 flex flex-col items-center justify-between transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={isMobile ? {} : {
        y: -8,
        boxShadow: "0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(34, 211, 238, 0.2)",
        borderColor: "rgba(34, 211, 238, 0.4)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={hasAnimated ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center flex-grow w-full">
        <motion.video
          ref={videoRef}
          className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-xl mb-4 sm:mb-5 md:mb-6 shadow-lg border border-cyan-400/20"
          muted
          loop
          preload={isLoaded ? "none" : (isMobile ? "none" : "metadata")}
          playsInline
          animate={isMobile ? {} : {
            scale: isHovered ? 1.08 : 1,
            borderColor: isHovered ? 'rgba(34, 211, 238, 0.5)' : 'rgba(34, 211, 238, 0.2)',
          }}
          transition={isMobile ? {} : { duration: 0.3, ease: "easeOut" }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        <motion.h2 
          className="text-xl sm:text-2xl md:text-2xl font-bold mb-3 text-center bg-gradient-to-r from-cyan-300 via-purple-300 to-blue-300 bg-clip-text text-transparent"
          initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
          whileHover={isMobile ? {} : { scale: 1.02 }}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="text-gray-300 mb-4 sm:mb-5 text-center text-sm sm:text-base leading-relaxed"
          initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
        >
          {details}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-5 justify-center"
          initial={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
        >
          {tech.map((t, i) => (
            <motion.span 
              key={i} 
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-200 px-3 py-1.5 rounded-full text-xs sm:text-sm border border-cyan-400/30 backdrop-blur-sm font-medium"
              initial={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={hasAnimated ? { duration: 0 } : { duration: 0.3, delay: 0.5 + i * 0.1 }}
              whileHover={isMobile ? {} : { 
                scale: 1.05, 
                background: "linear-gradient(135deg, rgba(34, 211, 238, 0.35) 0%, rgba(168, 85, 247, 0.35) 100%)",
                borderColor: "rgba(34, 211, 238, 0.6)",
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
        className="gradient-btn text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold"
        initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
        whileHover={isMobile ? {} : { 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={isMobile ? {} : { scale: 0.95 }}
      >
        View Live
      </motion.a>
    </motion.div>
  )
}

export default Projectemp