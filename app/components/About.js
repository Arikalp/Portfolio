import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code2, Briefcase, Zap } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground'
import ExperienceTimeline from './ExperienceTimeline';

const About = () => {
  const stats = [
    { icon: Code2, label: 'Projects', value: '20+', color: 'from-cyan-400 to-blue-500' },
    { icon: Briefcase, label: 'Experience', value: '2+ Yrs', color: 'from-purple-400 to-pink-500' },
    { icon: Zap, label: 'DSA Problems', value: '500+', color: 'from-amber-400 to-orange-500' }
  ]

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20 relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10 mb-16 sm:mb-20 md:mb-24"
      >
        {/* Section Header */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20"
          variants={itemVariants}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
        </motion.div>

        {/* Main Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20 md:mb-24">
          {/* Left: Profile Image */}
          <motion.div
            className="lg:col-span-2 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-xs">
              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-75"
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(34, 211, 238, 0.2)',
                    '0 0 60px rgba(34, 211, 238, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
                    '0 0 40px rgba(34, 211, 238, 0.2)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Glassmorphic Border Container */}
              <motion.div
                className="relative rounded-3xl p-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/Profile_Photo.jpg"
                    alt="Sankalp Saini"
                    width={400}
                    height={400}
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 280px, 240px"
                    className="w-full h-auto object-cover"
                    priority
                  />
                  
                  {/* Overlay Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Animated Rotating Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent pointer-events-none"
                animate={{
                  borderColor: [
                    'rgba(34, 211, 238, 0.5)',
                    'rgba(168, 85, 247, 0.5)',
                    'rgba(59, 130, 246, 0.5)',
                    'rgba(34, 211, 238, 0.5)',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right: Content Section */}
          <motion.div
            className="lg:col-span-3 flex flex-col justify-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Intro Text */}
            <motion.div
              className="mb-8 sm:mb-10"
              variants={itemVariants}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Sankalp Saini
              </h2>
              <p className="text-lg sm:text-xl text-cyan-300/90 font-semibold mb-4">
                Full Stack Developer
              </p>
              <p className="text-gray-200/95 text-base sm:text-lg leading-relaxed">
                A passionate developer crafting innovative web solutions with modern technologies. 
                I specialize in building scalable applications, solving complex problems, and staying 
                ahead of tech trends.
              </p>
            </motion.div>

            {/* Stat Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={idx}
                    className="relative group"
                    variants={itemVariants}
                  >
                    {/* Glassmorphic Card */}
                    <div className="relative rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-4 sm:p-5 overflow-hidden">
                      {/* Animated Border Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-transparent pointer-events-none"
                        animate={{
                          borderColor: [
                            'rgba(255,255,255, 0)',
                            stat.color.includes('cyan') ? 'rgba(34, 211, 238, 0.4)' : 
                            stat.color.includes('purple') ? 'rgba(168, 85, 247, 0.4)' :
                            'rgba(251, 146, 60, 0.4)',
                            'rgba(255,255,255, 0)',
                          ],
                          boxShadow: [
                            '0 0 0px rgba(255,255,255,0)',
                            stat.color.includes('cyan') ? '0 0 20px rgba(34, 211, 238, 0.3)' :
                            stat.color.includes('purple') ? '0 0 20px rgba(168, 85, 247, 0.3)' :
                            '0 0 20px rgba(251, 146, 60, 0.3)',
                            '0 0 0px rgba(255,255,255,0)',
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        <motion.div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                        </motion.div>
                        <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                          {stat.value}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-300/90 font-medium">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Text */}
            <motion.p
              className="text-gray-400 text-base leading-relaxed"
              variants={itemVariants}
            >
              I combine technical expertise with creative problem-solving to deliver exceptional digital experiences. 
              Let's build something amazing together!
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Detailed Content Section */}
      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Education */}
        <motion.div
          className="mb-12 sm:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <motion.div
            className="relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 sm:p-8 overflow-hidden group"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                boxShadow: '0 0 30px rgba(34, 211, 238, 0.2)'
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                Bachelor of Technology
              </h3>
              <p className="text-cyan-300/80 text-base sm:text-lg font-medium mb-2">
                Computer Science Engineering
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                2023 - 2027
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="mb-12 sm:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <ExperienceTimeline />
        </motion.div>

        {/* What I Do */}
        <motion.div
          className="mb-12 sm:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            What I Do
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Frontend Development",
                desc: "Creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.",
                color: "from-cyan-400 to-blue-500"
              },
              {
                title: "Backend Development",
                desc: "Building robust server-side applications with Node.js, Express, Spring Boot, and various databases.",
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "LLM Training, Finetuning & Security",
                desc: "Working on LLM training and finetuning workflows, with a strong focus on model safety and prompt security.",
                color: "from-amber-400 to-orange-500"
              },
              {
                title: "System Design",
                desc: "Designing scalable and maintainable system architectures, APIs, and data flows for high-performance applications.",
                color: "from-green-400 to-emerald-500"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 sm:p-7 overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
                  animate={{
                    borderColor: item.color.includes('cyan') ? 'rgba(34, 211, 238, 0.2)' :
                                item.color.includes('purple') ? 'rgba(168, 85, 247, 0.2)' :
                                item.color.includes('amber') ? 'rgba(251, 146, 60, 0.2)' :
                                'rgba(52, 211, 153, 0.2)'
                  }}
                />

                <div className="relative z-10">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} mb-4`} />
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mb-12 sm:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "AWS Cloud Practitioner", file: "/assets/Certificates/AWS/AWS Certificate.pdf", category: "Cloud" },
              { name: "AWS EC2 Certification", file: "/assets/Certificates/AWS/AWS EC2.pdf", category: "Cloud" },
              { name: "AWS VPC Certification", file: "/assets/Certificates/AWS/AWS VPC.pdf", category: "Cloud" },
              { name: "AI Hackathon Winner", file: "/assets/Certificates/AI Hackathon certificate. .pdf", category: "AI/ML" },
              { name: "AI Workshop", file: "/assets/Certificates/AI workshop.pdf", category: "AI/ML" },
              { name: "Gen AI Certification", file: "/assets/Certificates/Gen AI.pdf", category: "AI/ML" },
              { name: "DSA Certification", file: "/assets/Certificates/DSA certificate.pdf", category: "Programming" },
              { name: "JavaScript Certification", file: "/assets/Certificates/Javascript_certificate.pdf", category: "Programming" },
              { name: "MongoDB Certification", file: "/assets/Certificates/MongoDB.pdf", category: "Database" },
              { name: "Data Engineering", file: "/assets/Certificates/Data Engineering_ Real-time Data_Processing for AIML.pdf", category: "Data" },
              { name: "Internship Certificate", file: "/assets/Certificates/Cyberelevant_Internship_Completion_Certificate_Sankalp_Saini_Secured.pdf", category: "Security" }
            ].map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 p-4 sm:p-5 group overflow-hidden cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hover Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent pointer-events-none"
                  animate={{
                    borderColor: 'rgba(34, 211, 238, 0.2)',
                  }}
                  whileHover={{
                    borderColor: 'rgba(34, 211, 238, 0.5)',
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
                  }}
                />

                <div className="relative z-10">
                  <span className="text-xs text-blue-400 font-medium">{cert.category}</span>
                  <h3 className="text-sm sm:text-base font-semibold text-white mt-2 group-hover:text-blue-300 transition-colors">
                    {cert.name}
                  </h3>
                  <div className="mt-3 flex items-center text-xs text-gray-400 group-hover:text-blue-400 transition-colors">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Certificate
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Personal Interests */}
        <motion.div
          className="mb-12 sm:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Personal Interests
          </h2>
          <motion.div
            className="relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 sm:p-8"
            whileHover={{ y: -5 }}
          >
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
              projects, or learning about the latest trends in web development. I believe in continuous
              learning and staying updated with the ever-evolving tech landscape. I&apos;m passionate about building
              innovative solutions and collaborating with talented developers to create impactful projects.
            </p>
          </motion.div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          className="flex justify-center mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <motion.a
            href="/assets/Sankalp_Saini_Resume.pdf"
            download
            className="relative group overflow-hidden gradient-btn text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
