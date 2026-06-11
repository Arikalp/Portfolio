"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const CODE_LINES = [
  { type: "keyword", content: "const ", name: "sankalp", params: "", bracket: " = {" },
  { type: "prop", content: "  name: ", value: '"Sankalp Saini",' },
  { type: "prop", content: "  role: ", value: '"Full Stack Developer",' },
  { type: "prop", content: "  education: ", value: '"B.Tech CSE (2023-2027)",' },
  { type: "empty" },
  { type: "comment", content: "  // Tech Arsenal" },
  { type: "prop", content: "  frontend: ", value: '["React", "Next.js", "Tailwind"],' },
  { type: "prop", content: "  backend: ", value: '["Node.js", "Express", "Spring Boot"],' },
  { type: "prop", content: "  databases: ", value: '["MongoDB", "MySQL", "Firebase"],' },
  { type: "prop", content: "  languages: ", value: '["JavaScript", "Python", "Java"],' },
  { type: "empty" },
  { type: "comment", content: "  // Certifications & Achievements" },
  { type: "prop", content: "  certs: ", value: '["AWS Cloud", "AI Hackathon Winner"],' },
  { type: "prop", content: "  focus: ", value: '"LLM Training & AI Security",' },
  { type: "indent", content: "};" },
  { type: "empty" },
  { type: "call", content: "console.", method: "log", params: '(sankalp.status);' },
  { type: "output", content: '> "Open to new opportunities & collaborations."' },
];

const TerminalWindow = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= CODE_LINES.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 120);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorBlink);
  }, []);

  const renderLine = (line, index) => {
    if (line.type === "empty") return <div key={index} className="hero-terminal__line hero-terminal__line--empty">&nbsp;</div>;

    if (line.type === "comment") {
      return (
        <div key={index} className="hero-terminal__line hero-terminal__line--comment">
          {line.content}
        </div>
      );
    }

    if (line.type === "keyword") {
      return (
        <div key={index} className="hero-terminal__line">
          <span className="hero-terminal__keyword">{line.content}</span>
          <span className="hero-terminal__fn-name">{line.name}</span>
          <span className="hero-terminal__params">{line.params}</span>
          <span className="hero-terminal__text">{line.bracket}</span>
        </div>
      );
    }

    if (line.type === "indent" && line.highlight) {
      return (
        <div key={index} className="hero-terminal__line">
          <span className="hero-terminal__keyword">{line.content}</span>
          <span className="hero-terminal__var">{line.highlight}</span>
          <span className="hero-terminal__text">{line.equals}</span>
          <span className="hero-terminal__fn-name">{line.call}</span>
          <span className="hero-terminal__params">{line.params}</span>
        </div>
      );
    }

    if (line.type === "indent") {
      return (
        <div key={index} className="hero-terminal__line">
          <span className="hero-terminal__text">{line.content}</span>
        </div>
      );
    }

    if (line.type === "prop") {
      return (
        <div key={index} className="hero-terminal__line">
          <span className="hero-terminal__prop">{line.content}</span>
          <span className="hero-terminal__string">{line.value}</span>
        </div>
      );
    }

    if (line.type === "call") {
      return (
        <div key={index} className="hero-terminal__line">
          <span className="hero-terminal__var">{line.content}</span>
          <span className="hero-terminal__fn-name">{line.method}</span>
          <span className="hero-terminal__params">{line.params}</span>
        </div>
      );
    }

    if (line.type === "output") {
      return (
        <div key={index} className="hero-terminal__line hero-terminal__line--output">
          {line.content}
        </div>
      );
    }

    return null;
  };

  return (
    <motion.div
      className="hero-terminal"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Title bar */}
      <div className="hero-terminal__titlebar">
        <div className="hero-terminal__dots">
          <span className="hero-terminal__dot hero-terminal__dot--red" />
          <span className="hero-terminal__dot hero-terminal__dot--yellow" />
          <span className="hero-terminal__dot hero-terminal__dot--green" />
        </div>
        <span className="hero-terminal__title">sankalp.config.ts — zsh</span>
        <div className="hero-terminal__dots-spacer" />
      </div>

      {/* Code area */}
      <div className="hero-terminal__body">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => renderLine(line, i))}
        {visibleLines >= CODE_LINES.length && (
          <div className="hero-terminal__line">
            <span
              className="hero-terminal__cursor"
              style={{ opacity: showCursor ? 1 : 0 }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Hero = ({ onNavigate }) => {
  const scrollRef = useRef(null);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const fade = Math.max(0, 1 - scrollY / 200);
      setScrollOpacity(fade);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-redesign" id="hero">
      <div className="hero-redesign__container">
        {/* Left column */}
        <div className="hero-redesign__left">
          {/* Availability badge */}
          <motion.div
            className="hero-redesign__badge"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero-redesign__badge-dot" />
            <span className="hero-redesign__badge-text">Available for new projects</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="hero-redesign__headline"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Building Digital{" "}
            <span className="hero-redesign__headline-accent">Experiences.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="hero-redesign__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            I&apos;m Sankalp, a Full Stack Developer specializing in crafting high-performance
            web applications with modern aesthetics and robust functionality.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="hero-redesign__cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <button
              className="hero-redesign__btn hero-redesign__btn--primary"
              onClick={() => onNavigate("contact")}
            >
              Contact Me
            </button>
            <button
              className="hero-redesign__btn hero-redesign__btn--ghost"
              onClick={() => onNavigate("projects")}
            >
              View My Work
              <svg
                className="hero-redesign__btn-arrow"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Right column — Terminal (hidden on mobile) */}
        {!isMobile && (
          <div className="hero-redesign__right">
            <TerminalWindow />
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-redesign__scroll"
        style={{ opacity: scrollOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span className="hero-redesign__scroll-text">SCROLL</span>
        <span className="hero-redesign__scroll-line" />
      </motion.div>
    </section>
  );
};

export default Hero;
