import React from 'react'
import Projectemp from './Projectemp'

const moreProjects = [
  {
    img: "/assets/Project1.png",
    liveLink: "https://project1.live",
    title: "Typestory - A Typing Game",
    details: "Typestory is a typing game that helps users improve their typing skills in a fun and engaging way.",
    tech: ["React", "Tailwind", "Node.js"]
  },
  {
    img: "/assets/Project2.png",
    liveLink: "https://project2.live",
    title: "WizardX - A Wizarding World Experience",
    details: "WizardX is an immersive experience that brings the magic of the wizarding world to life.",
    tech: ["Next.js", "MongoDB", "Express"]
  },
  {
    img: "/assets/Project3.png",
    liveLink: "https://project3.live",
    title: "Authentic - A Modern Authentication System",
    details: "Authentic is a modern authentication system that uses cutting-edge technologies to provide a seamless user experience.",
    tech: ["Vue", "Firebase", "Sass"]
  },
  {
    img: "/assets/Project4.png",
    liveLink: "https://project4.live",
    title: "Nextflix - A Netflix Clone",
    details: "Nextflix clone is a streaming platform that allows users to watch their favorite shows and movies.",
    tech: ["Angular", "TypeScript", "Bootstrap"]
  }
]

const MoreProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-20 py-10 justify-items-center">
      {moreProjects.map((proj, idx) => (
        <Projectemp
          key={idx}
          img={proj.img}
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