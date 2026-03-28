import React, { useMemo, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const experiences = [
  {
    title: "Full-stack Developer",
    company: "Mymomdad.com",
    type: "Internship",
    duration: "Feb 2026 - Present",
    location: "Remote",
    description: "Working on MERN stack applications and scalable systems",
  },
  {
    title: "Web Developer",
    company: "GDGC BBDITM",
    type: "Part-time",
    duration: "Oct 2025 - Present",
    location: "Lucknow, India",
    description:
      "As part of the Google Developer Club, I help students build full-stack applications and strengthen practical web development skills.",
  },
  {
    title: "Web Dev Mentor",
    company: "Binary Brains",
    type: "Part-time",
    duration: "Oct 2025 - Present",
    description: "Mentoring students in web development",
  },
  {
    title: "Full Stack Developer",
    company: "Cyberelevant",
    type: "Internship",
    duration: "Jul 2025 - Oct 2025",
    location: "Remote",
    description:
      "Worked on full stack web development projects using modern technologies",
  },
];

const monthIndex = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

const durationToDate = (token, isEnd = false) => {
  if (!token) return new Date(0);

  const normalized = token.trim().toLowerCase();
  if (normalized === "present" || normalized === "current") {
    return isEnd ? new Date(8640000000000000) : new Date();
  }

  const match = normalized.match(/([a-z]{3,})\s+(\d{4})/);
  if (!match) return new Date(0);

  const month = monthIndex[match[1].slice(0, 3)] ?? 0;
  const year = Number(match[2]);
  return new Date(year, month, 1);
};

const getRange = (duration) => {
  const [startRaw, endRaw] = duration.split(/\s*-\s*/);
  const start = durationToDate(startRaw, false);
  const end = durationToDate(endRaw || startRaw, true);
  return { start, end };
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const dotPulseVariants = {
  idle: {
    scale: 1,
    opacity: 0.7,
  },
  pulse: {
    scale: [1, 1.55, 1],
    opacity: [0.65, 0, 0.65],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const ExperienceTimeline = () => {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 20%"],
  });

  const lineFill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });

  const sortedExperiences = useMemo(() => {
    return [...experiences].sort((a, b) => {
      const aRange = getRange(a.duration);
      const bRange = getRange(b.duration);

      const endDiff = bRange.end.getTime() - aRange.end.getTime();
      if (endDiff !== 0) return endDiff;

      return bRange.start.getTime() - aRange.start.getTime();
    });
  }, []);

  return (
    <section className="mt-10 sm:mt-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-7 sm:mb-10 text-white tracking-tight">Experience</h2>

      <motion.div
        ref={timelineRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        className="relative mx-auto max-w-5xl"
      >
        <div className="pointer-events-none absolute inset-y-3 left-1/2 w-[2px] -translate-x-1/2 md:left-5 md:translate-x-0 bg-gradient-to-b from-cyan-200/80 via-cyan-300/40 to-transparent" />
        <div className="pointer-events-none absolute inset-y-3 left-1/2 w-[10px] -translate-x-1/2 md:left-5 md:translate-x-[-4px] blur-md bg-gradient-to-b from-cyan-300/40 via-cyan-400/20 to-transparent" />
        <motion.div
          style={{ scaleY: lineFill, transformOrigin: "top" }}
          className="pointer-events-none absolute inset-y-3 left-1/2 w-[2px] -translate-x-1/2 md:left-5 md:translate-x-0 bg-gradient-to-b from-cyan-100 via-cyan-300 to-cyan-500/10 shadow-[0_0_22px_rgba(34,211,238,0.95)]"
        />

        <div className="space-y-6 sm:space-y-8">
          {sortedExperiences.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.title}-${index}`}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="relative grid grid-cols-1 md:grid-cols-[2.5rem_1fr] gap-4 md:gap-7"
            >
              <div className="hidden md:flex items-start justify-center pt-6">
                <span className="relative block h-3.5 w-3.5 rounded-full bg-cyan-200 shadow-[0_0_0_5px_rgba(34,211,238,0.16),0_0_20px_rgba(34,211,238,0.95)]">
                  <motion.span
                    variants={dotPulseVariants}
                    initial="idle"
                    animate="pulse"
                    className="absolute inset-0 rounded-full bg-cyan-300/55"
                  />
                  <span className="absolute -inset-2 rounded-full bg-cyan-300/35 blur-sm" />
                </span>
              </div>

              <span className="md:hidden absolute left-1/2 top-3 -translate-x-1/2 block h-3.5 w-3.5 rounded-full bg-cyan-200 shadow-[0_0_0_5px_rgba(34,211,238,0.16),0_0_18px_rgba(34,211,238,0.95)]">
                <motion.span
                  variants={dotPulseVariants}
                  initial="idle"
                  animate="pulse"
                  className="absolute inset-0 rounded-full bg-cyan-300/55"
                />
                <span className="absolute -inset-2 rounded-full bg-cyan-300/35 blur-sm" />
              </span>

              <div className="mx-auto md:mx-0 mt-7 md:mt-0 w-full rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-6 sm:p-7 shadow-[0_0_0_1px_rgba(34,211,238,0.10),0_14px_34px_rgba(2,8,23,0.62)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/45 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.28),0_0_30px_rgba(34,211,238,0.16),0_18px_38px_rgba(2,8,23,0.8)]">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{item.title}</h3>
                  <span className="text-xs sm:text-sm px-2.5 py-1 rounded-full border border-cyan-300/30 text-cyan-200 bg-cyan-300/10">
                    {item.type}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-cyan-100/95 font-medium leading-relaxed">
                  {item.company}
                  {item.location ? <span className="text-slate-400"> • {item.location}</span> : null}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 mt-2">{item.duration}</p>

                <p className="text-sm sm:text-base text-slate-300/95 leading-7 mt-4.5">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceTimeline;
