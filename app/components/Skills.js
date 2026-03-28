import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Zap, Gitlab } from 'lucide-react'

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building beautiful, responsive user interfaces',
    icon: Code2,
    color: 'from-cyan-400 to-blue-500',
    glowColor: 'rgba(34, 211, 238, 0.3)',
    techs: ['HTML', 'CSS', 'JS', 'TAILWIND', 'REACT', 'NEXT']
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Creating robust server-side solutions',
    icon: Database,
    color: 'from-purple-400 to-pink-500',
    glowColor: 'rgba(168, 85, 247, 0.3)',
    techs: ['NODE', 'EXPRESS', 'MONGODB', 'JAVA', 'MYSQL', 'PYTHON']
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    description: 'Leveraging modern tools for development',
    icon: Zap,
    color: 'from-amber-400 to-orange-500',
    glowColor: 'rgba(251, 146, 60, 0.3)',
    techs: ['GIT', 'FIREBASE', 'REACTNATIVE']
  }
]

const Skills = () => {
  const [hoveredId, setHoveredId] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20">
      {/* Header */}
      <motion.div
        className="mb-12 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Skills & Technologies
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          Web3-ready full-stack development with modern tools and frameworks
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {skillCategories.map((category) => {
          const IconComponent = category.icon
          const isHovered = hoveredId === category.id

          return (
            <motion.div
              key={category.id}
              className="relative group"
              variants={cardVariants}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -12 }}
            >
              {/* Glassmorphic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl" />

              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent pointer-events-none"
                animate={isHovered ? {
                  borderColor: [
                    'rgba(34, 211, 238, 0)',
                    category.glowColor,
                    'rgba(168, 85, 247, 0.2)',
                    'rgba(34, 211, 238, 0)',
                  ],
                } : {
                  borderColor: 'rgba(34, 211, 238, 0.15)',
                }}
                transition={{ duration: 2.5, repeat: isHovered ? Infinity : 0 }}
              />

              {/* Enhanced Glow Shadow */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={isHovered ? {
                  boxShadow: [
                    '0 0 40px rgba(34, 211, 238, 0.1)',
                    `0 0 60px ${category.glowColor}, 0 0 30px rgba(168, 85, 247, 0.15)`,
                    '0 0 40px rgba(34, 211, 238, 0.1)',
                  ]
                } : {
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
                transition={{ duration: 2.5, repeat: isHovered ? Infinity : 0 }}
              />

              {/* Card Content */}
              <div className="relative z-10 p-7 sm:p-8 md:p-9 h-full flex flex-col">
                {/* Icon Section */}
                <motion.div
                  className="mb-6 flex items-center justify-center"
                  animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} relative`}
                    animate={isHovered ? {
                      boxShadow: [
                        `0 0 20px ${category.glowColor}`,
                        `0 0 40px ${category.glowColor}`,
                        `0 0 20px ${category.glowColor}`,
                      ]
                    } : {
                      boxShadow: `0 0 0px ${category.glowColor}`
                    }}
                    transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                  </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  className={`text-2xl sm:text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {category.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-gray-400 text-sm sm:text-base mb-6 flex-grow leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {category.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {category.techs.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="relative inline-flex items-center backdrop-blur-xl rounded-full px-3 py-2 text-xs font-semibold text-white border border-white/20 overflow-hidden group/tech"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.08 }}
                    >
                      {/* Background Gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-30 group-hover/tech:opacity-50 transition-opacity duration-300`}
                      />

                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={isHovered ? {
                          boxShadow: `0 0 12px ${category.glowColor}`
                        } : {
                          boxShadow: 'none'
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Text */}
                      <span className="relative z-10 group-hover/tech:scale-105 transition-transform duration-200">
                        {tech}
                      </span>
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Shine Effect on Hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                animate={isHovered ? { opacity: 0.5 } : { opacity: 0 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  animate={isHovered ? { x: ['-100%', '100%'] } : {}}
                  transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
                />
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Skills
