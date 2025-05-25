"use client"

import { useEffect, useRef, useState } from 'react'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import About from "./components/About"
import MoreProjects from './components/MoreProjects'
import Contact from './components/Contact'
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function Page() {
  const scrollRef = useRef(null);
  const [currentSection, setCurrentSection] = useState('home');
  const [scrollInstance, setScrollInstance] = useState(null);

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  useEffect(() => {
    let scroll;
    // Only run on client
    import('locomotive-scroll').then((LocomotiveScroll) => {
      scroll = new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
      });
      setScrollInstance(scroll);
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  // Update scroll when section changes
  useEffect(() => {
    if (scrollInstance) {
      setTimeout(() => {
        scrollInstance.update();
      }, 300); // slight delay to allow DOM update
    }
  }, [currentSection, scrollInstance]);

  return (
    <>
      <div className="image-container"></div>
      <div ref={scrollRef} data-scroll-container className="container-every relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="relative z-10">
          <Navbar onNavigate={handleNavigation} />
          {currentSection === 'home' && (
            <>
              <Hero onNavigate={handleNavigation} />
              <Skills />
              <Projects onNavigate={handleNavigation} />
            </>
          )}
          {currentSection === 'about' && <About />}
          {currentSection === 'projects' && <MoreProjects />}
          {currentSection === 'contact' && <Contact />}
          <Footer />
        </div>
      </div>
    </>
  )
}
