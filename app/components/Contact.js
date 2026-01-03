import { Contact } from 'lucide-react';
import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';

export default function ContactForm() {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     'service_uong3hl',     // e.g., 'service_gmail'
  //     'template_ee4pcs8',    // e.g., 'template_abc123'
  //     form.current,
  //     '7boSM-HnKfz96im9e'      // e.g., 'DtzpAbc123456'
  //   )
  //   .then(
  //     (result) => {
  //       console.log(result.text);
  //       alert("Message sent successfully!");
  //       e.target.reset();
  //     },
  //     (error) => {
  //       console.log(error.text);
  //       alert("Failed to send message.");
  //     }
  //   );
  // };

  // api/Contact/route.js is set up to handle email sending via nodemailer.
  const sendEmail = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      const response = await fetch("/api/Contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.current.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };


  return (
    <div className="min-h-screen py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 flex flex-col justify-center items-center">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">
          Get In Touch
        </h1>
        <p className="text-gray-400 text-sm sm:text-base text-center mb-6 sm:mb-8">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 bg-[rgba(20,20,40,0.85)] rounded-xl shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-3 sm:px-4 py-2 sm:py-3 rounded bg-[rgba(255,255,255,0.1)] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3a0ca3] transition text-sm sm:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-3 sm:px-4 py-2 sm:py-3 rounded bg-[rgba(255,255,255,0.1)] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3a0ca3] transition text-sm sm:text-base"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="px-3 sm:px-4 py-2 sm:py-3 rounded bg-[rgba(255,255,255,0.1)] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3a0ca3] transition resize-none text-sm sm:text-base"
          />
          <button
            type="submit"
            className="gradient-btn w-full py-2 sm:py-3 mt-2 text-sm sm:text-base md:text-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
