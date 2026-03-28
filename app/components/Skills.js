import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const techs = [
  "HTML", "CSS", "JS", "TAILWIND", "NODE", "REACT", "NEXT",
  "EXPRESS", "MONGODB", "PYTHON","FIREBASE","REACTNATIVE", "JAVA", "MYSQL", "GIT"
]

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldAnimateMarquee = !isMobile;
  const visibleTechs = shouldAnimateMarquee ? [...techs, ...techs] : techs;

  return (
    <>
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className='skills text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent'>
            Skills & Technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className='tech-stack text-gray-400 mt-4 text-base sm:text-lg'>
            Technologies I have worked with:
        </motion.p>
      </div>

      <div className='overflow-hidden w-full py-12 sm:py-16 md:py-20 flex justify-center items-center px-4 sm:px-8 md:px-20'>
        <motion.div
          className={`py-6 sm:py-8 ${shouldAnimateMarquee ? 'flex gap-8 sm:gap-10 md:gap-16 w-fit' : 'flex flex-wrap justify-center gap-6 sm:gap-8 w-full'}`}
          animate={shouldAnimateMarquee ? { x: ['0%', '-204.2%'] } : { x: 0 }}
          transition={shouldAnimateMarquee ? {
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          } : { duration: 0 }}
        >
          {visibleTechs.map((tech, i) => (
            <motion.div
              key={`${tech}-${i}`}
              className="glass-card p-4 sm:p-5 md:p-6 rounded-2xl"
              whileHover={shouldAnimateMarquee ? { scale: 1.1, y: -5 } : { scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={`/assets/${tech}.png`}
                alt={`Logo of ${tech}`}
                className="w-20 sm:w-24 md:w-32 object-contain"
              />
              <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-2 text-center font-medium">
                {tech}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Skills
