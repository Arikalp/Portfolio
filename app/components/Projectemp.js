import React, { useRef, useState } from 'react'

const Projectemp = ({ video, liveLink, title, details, tech }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current && videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current && videoRef.current.pause();
    videoRef.current && (videoRef.current.currentTime = 0);
  };

  return (
    <div
      className="bg-[rgba(255,255,255,0.03)] border border-gray-300 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-xl h-auto p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className={`w-full h-32 sm:h-40 md:h-48 lg:h-60 object-cover rounded-md mb-3 sm:mb-4 transition-transform duration-300 ${isHovered ? 'scale-110 sm:scale-125 md:scale-150 z-10' : 'scale-100'}`}
        muted
        loop
        preload="auto"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center text-white">{title}</h2>
      <p className="text-gray-300 mb-3 sm:mb-4 text-center text-sm sm:text-base leading-relaxed">{details}</p>
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 justify-center">
        {tech.map((t, i) => (
          <span key={i} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs sm:text-sm border border-blue-500/30">{t}</span>
        ))}
      </div>
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white px-3 sm:px-4 py-2 sm:py-3 rounded hover:bg-blue-600 transition gradient-btn text-sm sm:text-base"
      >
        Live View
      </a>
    </div>
  )
}

export default Projectemp