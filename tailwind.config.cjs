/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			transparent: 'transparent',
			lightGrey: '#EBEBED',
			accent: '#3D5BF0',
			darkBlue: '#3651D4',
			blue: '#1fb6ff',
			black: '#000',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#FF4703',
			green: '#13ce66',
			yellow: '#ffc82c',
			white: '#fff',
			'gray-dark': '#273444',
			gray: '#8492a6',
			'gray-light': '#d3dce6',
			'dark-gray': '#1F2731',
			'middle-gray': '#596570',
			red: '#FFA07A',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			kanit: ['Kanit', 'serif'],
			kanitExtraBold: ['Kanit-ExtraBold', 'serif'],
			marker: ['Marker', 'serif'],
		},
		extend: {
			backgroundImage: {
				chairs: "url('./src/assets/images/about.jpg')",
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	plugins: [],
};
