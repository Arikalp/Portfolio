/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        logo: ['var(--font-orbitron)', 'sans-serif'],
      },
      colors: {
        'web3-dark': '#05070d',
        'web3-card': 'rgba(255, 255, 255, 0.05)',
        'web3-border': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'web3-gradient': 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15) 0%, rgba(168, 85, 247, 0.1) 40%, rgba(5, 7, 13, 1) 100%)',
        'gradient-radial-glow': 'radial-gradient(circle at var(--tw-gradient-from), var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.3)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.3)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.2)',
        'glass-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(34, 211, 238, 1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
      },
      backdropBlur: {
        'ultra': '20px',
      },
    },
  },
  plugins: [],
};
