import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add your email sending logic or API call
  };

  return (
    <div className="min-h-[70vh] py-25 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl bg-[rgba(20,20,40,0.85)] backdrop-blur-lg rounded-xl shadow-2xl p-10"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Me</h2>
        {submitted ? (
          <div className="text-center text-green-400 text-lg font-semibold">
            Thank you for reaching out! I will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 rounded bg-[rgba(255,255,255,0.1)] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3a0ca3] transition"
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 rounded bg-[rgba(255,255,255,0.1)] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3a0ca3] transition"
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 rounded bg-[rgba(255,255,255,0.1)] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3a0ca3] transition resize-none"
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="gradient-btn w-full py-3 mt-2 text-lg font-semibold"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;