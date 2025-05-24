import React from 'react'

const Projectemp = ({ img, liveLink, title, details, tech }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] border border-gray-300 rounded-lg shadow-lg w-[35rem] h-[35rem] p-8 flex flex-col items-center">
      <img src={img} alt={title} className="w-full h-60 object-cover rounded-md mb-4" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4 text-center">{details}</p>
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {tech.map((t, i) => (
          <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{t}</span>
        ))}
      </div>
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition gradient-btn"
      >
        Live View
      </a>
    </div>
  )
}

export default Projectemp