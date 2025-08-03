import React from 'react'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'

const Hero = ({ onNavigate }) => {
    const router = useRouter();
    const h1Ref = useRef(null);

  function getRandomColor() {
  // Use a tighter, more harmonious hue range (e.g., 240–280: indigo to purple)
  const hue = 240 + Math.random() * 40; // 240 to 280

  const saturation = 65 + Math.random() * 10; // 65% to 75%
  const lightness = 50 + Math.random() * 10; // 50% to 60%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}



  useEffect(() => {
    const interval = setInterval(() => {
      const colorOne = getRandomColor();
      const colorTwo = getRandomColor();

      if (h1Ref.current) {
        h1Ref.current.style.setProperty('--color-one', colorOne);
        h1Ref.current.style.setProperty('--color-two', colorTwo);
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <div className='hero flex flex-col justify-center py-5 items-start h-[80vh] sm:h-[85vh] md:h-[90vh] text-white px-4 sm:px-8 md:px-20'>
            <motion.h1 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              ref={h1Ref}
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className='text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 text-gray-300'>I am a Full Stack Developer</motion.p>
            <div className="button-container relative mt-6 sm:mt-8 md:mt-10">
                <button 
                    className="gradient-btn text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    onClick={() => onNavigate('contact')}
                >
                    Contact Me
                </button>
            </div>
        </div>
        
    </>
  )
}

export default Hero