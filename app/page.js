"use client"

import { useState } from 'react'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import About from "./components/About"
import MoreProjects from './components/MoreProjects'

export default function Page() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <>
      <div className="image-container">
      </div>
      <div className="container-every relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="relative z-10">
          <Navbar 
          onNavigate={handleNavigation} />
          {currentSection === 'home' && (
            <>
              <Hero />
              <Skills />
              <Projects onNavigate={handleNavigation} />
            </>
          )}
          {currentSection === 'about' && <About />}
          {currentSection === 'projects' && <MoreProjects />}
          <Footer />
        </div>
      </div>
    </>
  )
}
