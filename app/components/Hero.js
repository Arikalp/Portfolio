import React from 'react'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Cover } from "@/components/ui/cover"

const Hero = ({ onNavigate }) => {
    const router = useRouter();
    const h1Ref = useRef(null);

    const aceternityColors = [
    'rgb(18, 113, 255)',
    'rgb(221, 74, 255)', 
    'rgb(100, 220, 255)',
    'rgb(200, 50, 50)',
    'rgb(180, 180, 50)',
    'rgb(140, 100, 255)',
    'rgb(108, 0, 162)',
    'rgb(0, 17, 82)'
  ];

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const colorOne = aceternityColors[colorIndex % aceternityColors.length];
      const colorTwo = aceternityColors[(colorIndex + 1) % aceternityColors.length];

      if (h1Ref.current) {
        h1Ref.current.style.setProperty('--color-one', colorOne);
        h1Ref.current.style.setProperty('--color-two', colorTwo);
      }
      
      setColorIndex(prev => (prev + 1) % aceternityColors.length);
    }, 11000);

    return () => clearInterval(interval);
  }, [colorIndex]);

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
              Welcome to my Portfolio
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