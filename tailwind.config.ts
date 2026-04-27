import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        accent: '#1d4ed8',
        mist: '#f3f4f6'
      },
      boxShadow: {
        premium: '0 12px 40px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
