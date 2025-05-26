import React from 'react'
import { motion } from 'framer-motion'

const techs = [
  "HTML", "CSS", "JS", "TAILWIND", "NODE", "REACT", "NEXT",
  "EXPRESS", "MONGODB", "PYTHON","FIREBASE","REACTNATIVE", "JAVA", "MYSQL", "GIT"
]

const Skills = () => {
  return (
    <>

      <motion.h1
        initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
       className='skills text-4xl px-20 font-bold'>Skills</motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
       className='tech-stack px-20 text-gray-500 mt-2'>These are the technologies I have worked with:</motion.p>

      <div className='overflow-hidden w-full py-15 flex justify-center items-center'>
        <motion.div
          className='flex gap-12 w-fit py-6'
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
              className="w-40 object-contain rounded-md transition-transform duration-300"
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
