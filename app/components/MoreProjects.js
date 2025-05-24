import React from 'react'
import Projectemp from './Projectemp'

const moreProjects = [
  {
    img: "/assets/Project1.png",
    liveLink: "https://project1.live",
    title: "Project One",
    details: "Description for Project One. This project demonstrates feature X and Y.",
    tech: ["React", "Tailwind", "Node.js"]
  },
  {
    img: "/assets/Project2.png",
    liveLink: "https://project2.live",
    title: "Project Two",
    details: "Description for Project Two. This project is focused on Z and W.",
    tech: ["Next.js", "MongoDB", "Express"]
  },
  {
    img: "/assets/Project3.png",
    liveLink: "https://project3.live",
    title: "Project Three",
    details: "Description for Project Three. It uses modern UI/UX patterns.",
    tech: ["Vue", "Firebase", "Sass"]
  },
  {
    img: "/assets/Project4.png",
    liveLink: "https://project4.live",
    title: "Project Four",
    details: "Description for Project Four. Built for performance and scalability.",
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