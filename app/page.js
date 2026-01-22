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
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import "locomotive-scroll/dist/locomotive-scroll.css";

function PageContent() {
  const { currentTheme } = useTheme();
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
      // Detect device performance
      const isLowEndDevice = () => {
        const memory = navigator.deviceMemory || 4;
        const cores = navigator.hardwareConcurrency || 4;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        return memory <= 4 || cores <= 4 || isMobile;
      };

      import('locomotive-scroll').then((LocomotiveScroll) => {
        try {
          const isLowEnd = isLowEndDevice();
          scroll = new LocomotiveScroll.default({
            el: scrollRef.current,
            smooth: true,
            multiplier: isLowEnd ? 0.8 : 1,
            class: 'is-reveal',
            smoothMobile: !isLowEnd,
            smartphone: {
              smooth: !isLowEnd,
              breakpoint: 767
            },
            tablet: {
              smooth: true,
              breakpoint: 1024
            },
            reloadOnContextChange: true,
            touchMultiplier: isLowEnd ? 1.5 : 2,
            firefoxMultiplier: isLowEnd ? 50 : 100
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
      {/* Theme 1: Gradient Animation Background */}
      {currentTheme === 1 && (
        <BackgroundGradientAnimation containerClassName="fixed inset-0 z-0 blur-md" />
      )}
      
      {/* Theme 2: Dotted Glow Background */}
      {currentTheme === 2 && (
        <DottedGlowBackground className="fixed inset-0 z-0" />
      )}
      
      {/* Theme 3: Aurora Background */}
      {currentTheme === 3 && (
        <AuroraBackground 
          className="fixed inset-0 z-0 bg-transparent" 
          showRadialGradient={false}
        >
          <div></div>
        </AuroraBackground>
      )}
      
      {/* Theme 4: Background Beams */}
      {currentTheme === 4 && (
        <BackgroundBeams className="fixed inset-0 z-0" />
      )}
      
      <div ref={scrollRef} data-scroll-container className="container-every relative min-h-screen z-10 pointer-events-none">
        {currentTheme === 1 && (
          <div className="absolute inset-0 z-0">
            <ParticlesBackground />
          </div>
        )}
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

export default function Page() {
  return (
    <ThemeProvider>
      <PageContent />
    </ThemeProvider>
  )
}
