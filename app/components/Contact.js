import React from 'react'

const Contact = () => {
  return (
    <div className="flex justify-center py-10  h-auto">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd6_MQSvUhFUpJ6wf4dLdzMQRkXebvEVW09x7a5B7A6QYFKKw/viewform?embedded=true"
        width="50%"
        height="auto"
        style={{ minHeight: "600px", height: "auto" }}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Contact Form"
      >
        Loading…
      </iframe>
    </div>
  )
}

export default Contact