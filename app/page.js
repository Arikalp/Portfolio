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
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
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
    
    // Only run on client and check if window exists
    if (typeof window !== 'undefined') {
      import('locomotive-scroll').then((LocomotiveScroll) => {
        try {
          scroll = new LocomotiveScroll.default({
            el: scrollRef.current,
            smooth: true,
          });
          setScrollInstance(scroll);
        } catch (error) {
          console.error('Error initializing Locomotive Scroll:', error);
        }
      }).catch((error) => {
        console.error('Error loading Locomotive Scroll:', error);
      });
    }
    
    return () => {
      if (scroll && typeof scroll.destroy === 'function') {
        try {
          scroll.destroy();
        } catch (error) {
          console.error('Error destroying Locomotive Scroll:', error);
        }
      }
    };
  }, []);

  // Update scroll when section changes
  useEffect(() => {
    if (scrollInstance && typeof scrollInstance.update === 'function') {
      setTimeout(() => {
        try {
          scrollInstance.update();
        } catch (error) {
          console.error('Error updating Locomotive Scroll:', error);
        }
      }, 300); // slight delay to allow DOM update
    }
  }, [currentSection, scrollInstance]);

  return (
    <>
      <BackgroundGradientAnimation 
        containerClassName="fixed inset-0 z-0"
        gradientBackgroundStart="rgb(5, 5, 10)"
        gradientBackgroundEnd="rgb(0, 0, 5)"
        firstColor="10, 15, 30"
        secondColor="15, 10, 35"
        thirdColor="8, 12, 25"
        fourthColor="12, 8, 20"
        fifthColor="14, 10, 28"
        pointerColor="18, 12, 40"
        size="60%"
        blendingValue="soft-light"
      />
      <div ref={scrollRef} data-scroll-container className="container-every relative min-h-screen z-10 pointer-events-none">
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="relative z-10 pointer-events-auto">
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
