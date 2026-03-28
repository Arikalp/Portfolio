import React, { useRef, useState } from 'react';
import { Mail, MessageSquare, Send, User } from 'lucide-react';

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

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      if (!name || !email || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
      }

      const response = await fetch('/api/Contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        showNotification('Message sent successfully!', 'success');
        form.current.reset();
      } else {
        showNotification('Failed to send message. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showNotification('Failed to send message. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden px-4 py-16 sm:px-8 sm:py-20 md:px-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-8 right-10 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-2xl items-center justify-center">
        <div
          className={`fixed right-4 top-6 z-50 rounded-xl border border-white/15 px-6 py-3 font-medium text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-lg transition-all duration-300 ${
            notification.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } ${notification.type === 'success' ? 'bg-emerald-500/85' : 'bg-rose-500/85'}`}
        >
          {notification.message}
        </div>

        <div className="glass-card w-full max-w-xl p-8 sm:p-10 md:p-12">
          <h1 className="bg-gradient-to-r from-cyan-300 via-purple-300 to-blue-400 bg-clip-text text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent">
            Get In Touch
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-sm sm:text-base text-gray-300">
            Got an idea? Let&apos;s build something amazing together.
          </p>

          <form ref={form} onSubmit={sendEmail} className="mt-8 flex flex-col gap-5 sm:gap-6">
            <label className="relative block transition-transform duration-300 focus-within:scale-[1.02]">
              <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition duration-300" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] py-3 pl-11 pr-4 text-sm sm:text-base text-white placeholder:text-gray-400 outline-none transition duration-300 focus:border-cyan-300/70 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_0_22px_rgba(34,211,238,0.22)]"
                required
              />
            </label>

            <label className="relative block transition-transform duration-300 focus-within:scale-[1.02]">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition duration-300" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] py-3 pl-11 pr-4 text-sm sm:text-base text-white placeholder:text-gray-400 outline-none transition duration-300 focus:border-cyan-300/70 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_0_22px_rgba(34,211,238,0.22)]"
                required
              />
            </label>

            <label className="relative block transition-transform duration-300 focus-within:scale-[1.02]">
              <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-gray-400 transition duration-300" />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full resize-none rounded-xl border border-white/15 bg-white/[0.04] py-3 pl-11 pr-4 text-sm sm:text-base text-white placeholder:text-gray-400 outline-none transition duration-300 focus:border-cyan-300/70 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_0_22px_rgba(34,211,238,0.22)]"
                required
              />
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="gradient-btn group mt-4 inline-flex w-full items-center justify-center gap-2 py-3 sm:py-4 text-sm sm:text-base font-semibold disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
