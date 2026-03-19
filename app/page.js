"use client"

import { useEffect, useRef, useState } from 'react'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import About from "./components/About"
import MoreProjects from './components/MoreProjects'
import Contact from './components/Contact'
import { AuroraBackground } from '@/components/ui/aurora-background'
import Antigravity from '@/components/Antigravity'
import WebcamPixelGridWrapper from './components/WebcamPixelGridWrapper'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import "locomotive-scroll/dist/locomotive-scroll.css";

function PageContent() {
  const { currentTheme } = useTheme();
  const scrollRef = useRef(null);
  const [currentSection, setCurrentSection] = useState('home');
  const [scrollInstance, setScrollInstance] = useState(null);
  const [isMobileDevice, setIsMobileDevice] = useState(null);

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMobileDevice = () => {
      const isTouchMobile = window.matchMedia('(max-width: 767px)').matches;
      const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobileDevice(isTouchMobile || mobileUA);
    };

    checkMobileDevice();
    window.addEventListener('resize', checkMobileDevice);

    return () => window.removeEventListener('resize', checkMobileDevice);
  }, []);

  useEffect(() => {
    let scroll;

    if (isMobileDevice === null) {
      return;
    }

    if (isMobileDevice) {
      setScrollInstance(null);
      return;
    }
    
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
  }, [isMobileDevice]);

  // Update scroll when section changes
  useEffect(() => {
    if (!scrollInstance || typeof scrollInstance.update !== 'function') {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    setTimeout(() => {
      try {
        scrollInstance.update();
        if (typeof scrollInstance.scrollTo === 'function') {
          scrollInstance.scrollTo(0, {
            duration: 500,
            easing: [0.25, 0.0, 0.35, 1.0],
            disableLerp: false,
          });
        } else if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch (error) {
        console.error('Error updating Locomotive Scroll:', error);
      }
    }, 300); // slight delay to allow DOM update
  }, [currentSection, scrollInstance]);

  const shouldRenderHeavyBackgrounds = isMobileDevice === false;
  const shouldRenderAntigravity = isMobileDevice === false;

  return (
    <>
      {/* Theme 1: Antigravity Background */}
      {shouldRenderAntigravity && currentTheme === 1 && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Antigravity
              count={300}
              magnetRadius={6}
              ringRadius={7}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={1.5}
              lerpSpeed={0.05}
              color="#619abd"
              autoAnimate
              particleVariance={1}
              rotationSpeed={0}
              depthFactor={1}
              pulseSpeed={3}
              particleShape="capsule"
              fieldStrength={10}
            />
          </div>
        </div>
      )}

      {/* Theme 3: Aurora Background */}
      {shouldRenderHeavyBackgrounds && currentTheme === 3 && (
        <AuroraBackground 
          className="fixed inset-0 z-0 bg-transparent" 
          showRadialGradient={false}
        >
          <div></div>
        </AuroraBackground>
      )}
      
      {/* Theme 4: Webcam Pixel Grid */}
      {shouldRenderHeavyBackgrounds && currentTheme === 4 && (
        <WebcamPixelGridWrapper className="fixed inset-0 z-0" />
      )}
      
      <div ref={scrollRef} data-scroll-container className="container-every relative min-h-screen z-10 pointer-events-none">
        <div className="relative z-10 pointer-events-auto">
          <Navbar onNavigate={handleNavigation} currentSection={currentSection} />
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
