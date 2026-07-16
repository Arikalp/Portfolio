import React from "react";
import Projectemp from "./Projectemp";

const moreProjects = [
  {
    video: "https://ik.imagekit.io/arikalp/SaachiRaah.mp4",
    liveLink: "https://sacchiraah.vercel.app/",
    title: "SacchiRaah - A NGO Website",
    details:
      "SacchiRaah is a non-profit organization website built to raise awareness and support for social causes, featuring a clean design and user-friendly interface.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB"],
  },
  {
    video: "https://ik.imagekit.io/arikalp/GLANCER.mp4",
    liveLink: "https://glancer-omega.vercel.app/",
    title: "Glancer - A Content Discovery Platform",
    details:
      "Glancer is a content discovery platform that lets people explore trending articles, news, and insights all in one place — without searching for them one by one on Google",
    tech: ["HTML", "GSAP", "CSS", "Tailwind CSS", "JavaScript", "API"],
  },
  {
    video: "https://ik.imagekit.io/arikalp/Chesso.mp4",
    liveLink: "https://chesso-lake.vercel.app/",
    title: "Chesso - Chess Game",
    details:
      "Chesso is an interactive chess game built with modern web technologies, featuring real-time gameplay and a clean interface.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Express.js", "FireBase"],
  },
  {
    video: "https://ik.imagekit.io/arikalp/MECALE.mp4",
    liveLink: "https://mecale.vercel.app/",
    title: "Mecale - Makes Maths Calculation Easy",
    details:
      "Mecale Helps to speed up your mathematical calculations with an intuitive interface and powerful features, making complex math problems easier to solve.",
    tech: ["Next.js", "Groq LLM", "Framer-motion", "FireBase"],
  },
  {
    video: "https://ik.imagekit.io/arikalp/SatelliteTracker.mp4",
    liveLink: "https://satellite-tracker-beta.vercel.app/",
    title: "Satellite Tracker - A Satellite Tracking Application",
    details:
      "Satellite Tracker is a real-time satellite tracking application that provides users with accurate information about satellite positions and orbits.",
    tech: ["Next.js", "Satellite API", "React-Leaflet"],
  },
  {
    video: "https://ik.imagekit.io/arikalp/OCHI.mp4",
    liveLink: "https://ochi-murex.vercel.app/",
    title: "OCHI - A Modern Web Experience",
    details:
      "OCHI is a modern web experience designed to showcase clean design and interactive elements using advanced frontend techniques.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Locomotive Scroll"],
  },
  {
    video: "https://ik.imagekit.io/arikalp/POSTIFY.mp4",
    liveLink: "https://postify-cefj.onrender.com",
    title: "Postify - A posting Platform",
    details:
      "Postify is a posting platform that allows users to share and discover content in a clean and modern interface.",
    tech: ["EJS", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  },
  {
    video: "https://ik.imagekit.io/arikalp/SMARTREPORT.mp4",
    liveLink: "https://medical-report-generator-six.vercel.app/",
    title: "AI Report Analyzer - Uses LLM to generate report for X-Rays etc",
    details:
      " It uses advanced LLM technology to analyze X-rays and generate accurate, detailed medical reports instantly, helping doctors save time and improve diagnostic efficiency.",
    tech: ["Next.js", "Tailwind CSS", "OpenAI API", "LLM Integraion"],
  },
  {
    video: "https://ik.imagekit.io/arikalp/FILE_CONVERTER.mp4",
    liveLink: "https://file-converter-psi-gold.vercel.app/",
    title: "File Converter - Convert files to different formats",
    details:
      "A versatile file conversion tool that allows users to easily convert documents, images, and videos into various formats, ensuring compatibility and convenience across different platforms.",
    tech: ["Next.js", "Typescript", "Sharp Library"],
  },

  {
    video: "https://ik.imagekit.io/arikalp/TYPESTO.mp4",
    liveLink: "https://typesto.vercel.app/",
    title: "Typesto-Beta - A Typing Game",
    details:
      "Typesto is a typing game that helps users improve their typing skills in a fun and engaging way.",
    tech: ["HTML", "CSS", "JS"],
  },
  {
    video: "https://ik.imagekit.io/arikalp/WIZARDX.mp4",
    liveLink: "https://wizard-x-gsap.vercel.app/",
    title: "WizardX - A Wizarding World Experience",
    details:
      "WizardX is an immersive experience that brings the magic of the wizarding world to life.",
    tech: ["HTML", "CSS", "JS", "GSAP", "LOCOMOTIVE.js"],
  },
  {
    video: "https://ik.imagekit.io/arikalp/AUTHENTIC.mp4",
    liveLink: "https://project3.live",
    title: "Authentic - A Modern Authentication System",
    details:
      "Authentic is a modern authentication system that uses cutting-edge technologies to provide a seamless user experience.",
    tech: ["REACT", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    video: "https://ik.imagekit.io/arikalp/NETFLIX.mp4",
    liveLink: "https://netflix-clone-six-lilac-47.vercel.app/",
    title: "Netflix - A Netflix Clone",
    details:
      "Netflix clone is a streaming platform that allows users to watch their favorite shows and movies.",
    tech: ["HTML", "CSS", "JS"],
  },
  {
    video: "https://ik.imagekit.io/arikalp/CHITCHAT.mp4",
    liveLink: "https://chitchat-sepia.vercel.app/",
    title: "ChitChat - A Chat Application",
    details:
      "ChitChat is a chat application that allows users to communicate in real-time with a sleek and modern interface.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Socket.IO"],
  },
];

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
  );
};

export default MoreProjects;
