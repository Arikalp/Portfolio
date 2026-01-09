import React from 'react'
import Projectemp from './Projectemp'

const moreProjects = [
  {
    video:"/assets/GLANCER.mp4",
    liveLink:"https://glancer-omega.vercel.app/",
    title:"Glancer - A Social Media Dashboard",
    details:"Glancer is a content discovery platform that lets people explore trending articles, news, and insights all in one place — without searching for them one by one on Google",
    tech:["HTML", "GSAP", "CSS", "Tailwind CSS", "JavaScript" ,"API"]
  },
  {
    video: "/assets/Smart-Tutor.mp4",
    liveLink: "https://smart-tutor-theta.vercel.app/",
    title: "AI Smart-Tutor - Uses LLM to Teach Students",
    details: " An AI-powered tutor that leverages advanced LLM technology to provide personalized learning experiences, helping students grasp complex concepts with ease and efficiency.",
    tech: ["React.js", "Firebase", "LLM Integraion"]
  },
  {
    video: "/assets/SMARTREPORT.mp4",
    liveLink: "https://smart-tutor-theta.vercel.app/",
    title: "AI Report Analyzer - Uses LLM to generate report for X-Rays etc",
    details: " It uses advanced LLM technology to analyze X-rays and generate accurate, detailed medical reports instantly, helping doctors save time and improve diagnostic efficiency.",
    tech: ["Streamlit", "Python", "LLM Integraion"]
  },
  {
    video: "/assets/FILE_CONVERTER.mp4",
    liveLink: "https://file-converter-psi-gold.vercel.app/",
    title: "File Converter - Convert files to different formats",
    details: "A versatile file conversion tool that allows users to easily convert documents, images, and videos into various formats, ensuring compatibility and convenience across different platforms.",
    tech: ["Next.js", "Typescript", "Sharp Library"]
  },

  {
    video: "/assets/TYPESTO.mp4",
    liveLink: "https://typesto.vercel.app/",
    title: "Typesto-Beta - A Typing Game",
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
  },
  {
    video: "/assets/CHITCHAT.mp4",
    liveLink: "https://chitchat-sepia.vercel.app/",
    title: "ChitChat - A Chat Application",
    details: "ChitChat is a chat application that allows users to communicate in real-time with a sleek and modern interface.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Socket.IO"]
  }
]

const MoreProjects = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-20 py-8 sm:py-10 md:py-12 justify-items-center">
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