import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

const About = () => {
  return (
    <div className="min-h-screen py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <motion.img
                src="/assets/Profile_Photo.jpg"
                alt="Sankalp Saini"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover object-top border-4 border-white/20 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
          
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 hero text-gray-300"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-blue-400 font-medium"
            >
              Full Stack Developer
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 sm:space-y-6 text-gray-300"
        >
          <p className="text-base sm:text-lg leading-relaxed hero">
            Hello! I&apos;m Sankalp, a passionate Full Stack Developer with a keen interest in creating
            innovative and user-friendly web applications. My journey in web development has equipped
            me with a strong foundation in both frontend and backend technologies.
          </p>

          <p className="text-base sm:text-lg leading-relaxed hero">
            I specialize in modern web technologies including React, Node.js, and various other cutting-edge tools that help me build robust and scalable applications. Alongside my web development expertise, I have strong proficiency in Data Structures and Algorithms (DSA), which enhances my ability to write efficient, optimized code and tackle complex problems effectively. My approach combines technical depth with creative problem-solving to deliver exceptional digital experiences.
          </p>

          <div className="mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 hero">Education</h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[rgba(255,255,255,0.03)] p-4 sm:p-6 rounded-lg border border-gray-700 backdrop-blur-sm"
            >
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2">Bachelor of Technology</h3>
              <p className="text-gray-400 text-sm sm:text-base">Computer Science Engineering</p>
              <p className="text-gray-500 text-sm sm:text-base">2023 - 2027</p>
            </motion.div>
          </div>

          <div className="mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 hero">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[rgba(255,255,255,0.03)] p-4 sm:p-6 rounded-lg border border-gray-700 backdrop-blur-sm"
              >
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2">Frontend Development</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[rgba(255,255,255,0.03)] p-4 sm:p-6 rounded-lg border border-gray-700 backdrop-blur-sm"
              >
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2">Backend Development</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Building robust server-side applications with Node.js, Express, and various databases.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 hero">Certifications & Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-lg p-3 sm:p-4 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex flex-col h-full">
                    <span className="text-xs text-blue-400 mb-1 font-medium">{cert.category}</span>
                    <h3 className="text-sm sm:text-base font-medium text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {cert.name}
                    </h3>
                    <div className="mt-auto flex items-center text-xs text-gray-400 group-hover:text-blue-400 transition-colors">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Certificate
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 hero">Personal Interests</h2>
            <p className="text-base sm:text-lg leading-relaxed hero">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
              projects, or learning about the latest trends in web development. I believe in continuous
              learning and staying updated with the ever-evolving tech landscape.
            </p>
          </div>
        </motion.div>
        <div className='flex justify-center items-center mt-6 sm:mt-8'>
           <button className="flex">
          <a href="/assets/Sankalp_Saini_Resume.pdf" download className="inline-block bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-blue-600 transition gradient-btn text-sm sm:text-base">
            Download Resume
          </a>
        </button>
        </div>
       
      </motion.div>
    </div>
  );
};

export default About;
