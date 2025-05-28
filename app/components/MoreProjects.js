import React from 'react'
import Projectemp from './Projectemp'

const moreProjects = [
  {
    video: "/assets/TYPESTO.mp4",
    liveLink: "https://typesto.vercel.app/",
    title: "Typesto - A Typing Game",
    details: "Typesto is a typing game that helps users improve their typing skills in a fun and engaging way.",
    tech: ["HTML", "CSS", "JS"]
  },
  {
    video: "/assets/WIZARDX.mp4",
    liveLink: "https://wizard-x-gsap.vercel.app/",
    title: "WizardX - A Wizarding World Experience",
    details: "WizardX is an immersive experience that brings the magic of the wizarding world to life.",
    tech: ["HTML", "CSS", "JS", "GSAP","LOCOMOTIVE.js"]
  },
  {
    video: "/assets/AUTHENTIC.mp4",
    liveLink: "https://project3.live",
    title: "Authentic - A Modern Authentication System",
    details: "Authentic is a modern authentication system that uses cutting-edge technologies to provide a seamless user experience.",
    tech: ["REACT", "Node.js", "Express", "MongoDB", "JWT"]
  },
  {
    video: "/assets/NETFLIX.mp4",
    liveLink: "https://netflix-clone-six-lilac-47.vercel.app/",
    title: "Netflix - A Netflix Clone",
    details: "Netflix clone is a streaming platform that allows users to watch their favorite shows and movies.",
    tech: ["HTML", "CSS", "JS"]
  }
]

const MoreProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-20 py-10 justify-items-center">
      {moreProjects.map((proj, idx) => (
        <Projectemp
          key={idx}
          video={proj.video}
          liveLink={proj.liveLink}
          title={proj.title}
          details={proj.details}
          tech={proj.tech}
        />
      ))}
    </div>
  )
}

export default MoreProjects