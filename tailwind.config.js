/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx}', // 要包含的文件
    './Header/**/*.{js,ts,jsx,tsx}', // 要包含的文件
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      color: {
        'ourly-theme': '#ff4448',
        'base-color': '#F0F0FF',
        'purple-dark': '#3F4066',
        'purple-light': '#5A5B90',
      },
      borderColor: {
        'ourly-theme': '#ff4448',
        'purple-dark': '#3F4066',
      },
      backgroundColor: {
        'ourly-theme': '#ff4448',
        'base-color': '#F0F0FF',
        'purple-dark': '#3F4066',
        'purple-light': '#5A5B90',
      },
      fontSize: {
        sm: '8px',
        md: '14px',
        lg: '16px',
        xl: '40px',
        h1: '48px',
        h2: '40px',
        h3: '32px',
        h4: '24px',
        text: '16px',
        button: '18px',
      },
      lineHeight: {
        h1: '80px',
        h2: '60px',
        h3: '50px',
        h4: '40px',
        text: '40px',
      },
      screen: {
        md: '768px',
        lg: '1024px',
      },
      boxShadow: {
        ourly: '4px 4px 8px #3e3e3e',
      },
    },
  },
  plugins: [],
};
