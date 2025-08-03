import React from 'react'
import { motion } from 'framer-motion'

const techs = [
  "HTML", "CSS", "JS", "TAILWIND", "NODE", "REACT", "NEXT",
  "EXPRESS", "MONGODB", "PYTHON","FIREBASE","REACTNATIVE", "JAVA", "MYSQL", "GIT"
]

const Skills = () => {
  return (
    <>
      <div className="py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className='skills text-2xl sm:text-3xl md:text-4xl font-bold text-white'>Skills</motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className='tech-stack text-gray-500 mt-2 text-sm sm:text-base'>These are the technologies I have worked with:</motion.p>
      </div>

      <div className='overflow-hidden w-full py-8 sm:py-12 md:py-15 flex justify-center items-center'>
        <motion.div
          className='flex gap-6 sm:gap-8 md:gap-12 w-fit py-4 sm:py-6'
          animate={{ x: ['0%', '-204.2%'] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {[...techs, ...techs].map((tech, i) => (
            <motion.img
              key={`${tech}-${i}`}
              src={`/assets/${tech}.png`}
              alt={`Logo of ${tech}`}
              className="w-24 sm:w-32 md:w-40 object-contain rounded-md transition-transform duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Skills
