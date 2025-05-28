// import React, { useState } from "react";

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);
//     const payload = new URLSearchParams(formData);
//     console.log("Payload:", payload.toString()); // Log payload for debugging

//     try {
//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbwtkPnXXCAB2okuf_Vo2DKK4HuxRZ6wq22TlLA-l2nQrKNPkRtIf-zTguPM10objm6k_w/exec",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//           body: payload,
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}, Message: ${await response.text()}`);
//       }

//       setSubmitted(true);
//       e.target.reset(); // Reset form fields after successful submission
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert(`Submission failed: ${error.message}`);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4" style={{
//       background: "linear-gradient(to bottom right, #0f172a, #1e293b)",
//     }}>
//       {!submitted ? (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/5 backdrop-blur-lg text-white p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-4"
//         >
//           <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch</h2>

//           <input
//             name="name"
//             placeholder="Your Name"
//             required
//             className="w-full p-3 rounded-md bg-white/10 border border-white/20"
//           />
//           <input
//             name="email"
//             type="email"
//             placeholder="Your Email"
//             required
//             className="w-full p-3 rounded-md bg-white/10 border border-white/20"
//           />
//           <input
//             name="phone"
//             type="tel"
//             placeholder="Your Phone Number"
//             required
//             className="w-full p-3 rounded-md bg-white/10 border border-white/20"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             required
//             className="w-full p-3 rounded-md bg-white/10 border border-white/20"
//           ></textarea>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold flex items-center justify-center"
//           >
//             {loading ? (
//               <>
//                 <svg
//                   className="animate-spin h-5 w-5 mr-2"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   />
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8v8z"
//                   />
//                 </svg>
//                 Sending...
//               </>
//             ) : (
//               "Send Message"
//             )}
//           </button>
//         </form>
//       ) : (
//         <div className="text-white text-center p-10 bg-white/5 rounded-xl">
//           <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
//           <p>Your response has been recorded.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;


import React from 'react'

const Contact = () => {
  return (
    <div className="flex justify-center py-10 h-auto px-4">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd6_MQSvUhFUpJ6wf4dLdzMQRkXebvEVW09x7a5B7A6QYFKKw/viewform?embedded=true"
        width="100%"
        style={{ minHeight: "600px", maxWidth: "600px", height: "auto" }}
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