import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ElectricBorder from './ElectricBorder';

const asciiRecord = `╔══════════════════════════════════════════════════════════════════╗
║                   🏅 COMPETITIVE RECORD                          ║
╠══════════════════════════════════════════════════════════════════╣
║  🥇 1st Place  │ TechSprint          │ GDG BBDITM               ║
║  🥈 2nd Place  │ CodeBlitz 2026      │                          ║
║  🥈 2nd Place  │ APL (Agentic        │ GDG Lucknow              ║
║                 │  Premier League)    │                          ║
║  🥉 3rd Place  │ Hacktoberfest       │ GDG BBDITM               ║
╚══════════════════════════════════════════════════════════════════╝`;

const hackathonWins = [
  {
    place: "1st Place",
    medal: "🥇",
    title: "TechSprint",
    organizer: "GDG BBDITM",
    date: "2026",
    description: "Championed the rapid-prototyping hackathon by developing a full-stack high-impact solution in under 24 hours. Judged on implementation speed, UI/UX, and technical execution.",
    tech: ["Next.js", "Express.js", "MongoDB", "Socket.io"],
    color: "from-amber-450/15 via-yellow-600/5 to-transparent",
    glow: "shadow-yellow-500/20 hover:border-yellow-500/50",
    badgeColor: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
    borderColor: "#eab308" // Gold
  },
  {
    place: "2nd Place",
    medal: "🥈",
    title: "CodeBlitz 2026",
    organizer: "Tech Community",
    date: "2026",
    description: "Secured runner-up position in an intense speed-coding and design hackathon. Solved algorithmic challenges and developed a functional MVP under strict constraints.",
    tech: ["React", "Tailwind CSS", "Firebase", "Web APIs"],
    color: "from-slate-400/15 via-slate-500/5 to-transparent",
    glow: "shadow-slate-400/20 hover:border-slate-400/50",
    badgeColor: "bg-slate-400/10 border-slate-400/30 text-slate-300",
    borderColor: "#94a3b8" // Silver
  },
  {
    place: "2nd Place",
    medal: "🥈",
    title: "APL (Agentic Premier League)",
    organizer: "GDG Lucknow",
    date: "2026",
    description: "Built advanced AI agent workflows featuring multi-agent collaboration, semantic search, and autonomous tool execution. Awarded for agent design and execution flow.",
    tech: ["Python", "FastAPI", "Groq API", "LangChain", "Vector DB"],
    color: "from-cyan-400/15 via-cyan-600/5 to-transparent",
    glow: "shadow-cyan-400/20 hover:border-cyan-400/50",
    badgeColor: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
    borderColor: "#22d3ee" // Cyan/Agentic
  },
  {
    place: "3rd Place",
    medal: "🥉",
    title: "Hacktoberfest",
    organizer: "GDG BBDITM",
    date: "2025",
    description: "Recognized for top open-source contributions and development collaboration during the GDG BBDITM sprint. Fixed critical repository issues and integrated new features.",
    tech: ["Git / GitHub", "JavaScript", "Markdown", "Open Source"],
    color: "from-amber-800/15 via-amber-900/5 to-transparent",
    glow: "shadow-amber-700/20 hover:border-amber-700/50",
    badgeColor: "bg-amber-700/10 border-amber-700/30 text-amber-500",
    borderColor: "#c2410c" // Bronze
  }
];

const Hackathons = ({ view = "section", onNavigate }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Terminal ASCII Display Component
  const TerminalView = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-3xl mx-auto mb-12 overflow-hidden bg-[#0d1117] border border-gray-800 rounded-lg shadow-2xl"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full opacity-85"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-85"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full opacity-85"></div>
        </div>
        <div className="text-xs font-mono text-gray-500 select-none">
          bash - competitor@sankalp:~ (competitive_record)
        </div>
        <div className="w-12"></div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 sm:p-6 overflow-x-auto font-mono text-[9px] xs:text-[11px] sm:text-xs md:text-sm text-cyan-400 bg-black/90 scrollbar-thin scrollbar-thumb-gray-800">
        <div className="flex items-center text-gray-500 mb-2">
          <span className="text-green-500 mr-2">competitor@sankalp:~$</span>
          <span>cat competitive_record.txt</span>
        </div>
        <pre className="leading-tight font-mono text-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-green-400 bg-clip-text whitespace-pre select-none drop-shadow-[0_0_8px_rgba(34,211,238,0.25)]">
          {asciiRecord}
        </pre>
        <div className="flex items-center mt-3 animate-pulse text-cyan-400 font-bold">
          <span className="text-green-500 mr-2 font-normal">competitor@sankalp:~$</span>
          <span className="w-2 h-4 bg-cyan-400 ml-1"></span>
        </div>
      </div>
    </motion.div>
  );

  if (view === "page") {
    return (
      <div className="min-h-screen px-4 py-8 sm:px-6 md:px-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-heading">
            Hackathons & Awards
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            A comprehensive record of my participation and victories in competitive design, coding, and AI development challenges.
          </p>
        </motion.div>

        {/* Terminal Section */}
        <TerminalView />

        {/* Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {hackathonWins.map((win, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={isMobile ? {} : {
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                transition: { duration: 0.3 }
              }}
              className="w-full h-full"
            >
              <ElectricBorder
                color={win.borderColor}
                speed={0.8}
                chaos={0.08}
                borderRadius={16}
                className="w-full h-full"
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-b ${win.color} bg-black/90 backdrop-blur-xl border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg h-full group min-h-[260px] sm:min-h-[285px]`}
                >
                  {/* Colored Glow Orb */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full filter blur-[50px] opacity-10 bg-gradient-to-br from-white to-transparent pointer-events-none group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${win.badgeColor} shadow-sm`}>
                        <span className="mr-1">{win.medal}</span>
                        {win.place}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">{win.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {win.title}
                    </h3>
                    
                    {/* Organizer */}
                    <p className="text-sm text-cyan-400 font-medium mb-4 flex items-center">
                      <svg className="w-4 h-4 mr-1.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {win.organizer}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-body">
                      {win.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {win.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="bg-white/5 text-gray-300 border border-white/10 px-2.5 py-1 rounded-md text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </motion.div>

        {/* Back Button */}
        <div className="flex justify-center mt-12 sm:mt-16 mb-8">
          <button 
            onClick={() => onNavigate && onNavigate('home')}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Otherwise, render as a homepage section
  return (
    <>
      <div className="pt-10 sm:pt-16 md:pt-20 pb-4 px-4 sm:px-8 md:px-20">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading"
        >
          Competitive Record
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 mt-2 text-sm sm:text-base font-body"
        >
          My hackathon standings and competition awards:
        </motion.p>
      </div>

      <div className="px-4 sm:px-8 md:px-20 py-4 max-w-6xl">
        {/* Terminal View as centerpiece */}
        <TerminalView />

        {/* Quick Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {hackathonWins.map((win, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="w-full h-full"
            >
              <ElectricBorder
                color={win.borderColor}
                speed={0.6}
                chaos={0.06}
                borderRadius={12}
                className="w-full h-full"
              >
                <div className="bg-[#0a0f16]/95 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col justify-between h-full min-h-[160px]">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold">{win.medal}</span>
                      <span className="text-[10px] text-gray-500 font-mono">{win.date}</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1 truncate">
                      {win.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium truncate mb-2">
                      {win.organizer}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {win.place} standing at the event.
                    </p>
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate && onNavigate('hackathons')}
            className="gradient-btn text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded hover:bg-[#4edea3] hover:text-slate-900 transition text-sm sm:text-base font-semibold cursor-pointer"
          >
            View Detailed Record Cards
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Hackathons;
