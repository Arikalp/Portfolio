import { Contact } from 'lucide-react';
import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';

export default function ContactForm() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

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
    setIsLoading(true);
    
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {

      if (!name || !email || !message) {
        showNotification("Please fill in all fields.", "error");
        return;
      }

      const response = await fetch("/api/Contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        showNotification("Message sent successfully!", "success");
        form.current.reset();
      } else {
        showNotification("Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showNotification("Failed to send message. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 flex flex-col justify-center items-center">
      {/* Toast Notification */}
      <div
        className={`fixed right-4 px-6 py-3 rounded-lg shadow-lg text-white font-medium transition-all duration-300 z-50 ${
          notification.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
        style={{ top: '35%' }}
      >
        {notification.message}
      </div>

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
           
            className="px-3 sm:px-4 py-2 sm:py-3 rounded bg-[rgba(255,255,255,0.1)] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#79ecab] transition text-sm sm:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
          
            className="px-3 sm:px-4 py-2 sm:py-3 rounded bg-[rgba(255,255,255,0.1)] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#79ecab] transition text-sm sm:text-base"
          />
          <textarea
            name="message"
            placeholder="Your Message"
           
            rows={4}
            className="px-3 sm:px-4 py-2 sm:py-3 rounded bg-[rgba(255,255,255,0.1)] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#79ecab] transition resize-none text-sm sm:text-base"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="gradient-btn w-full py-2 sm:py-3 mt-2 text-sm sm:text-base md:text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
