/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1240px',
		},
		colors: {
			transparent: 'transparent',
			lightGrey: '#F6F5FF',
			accent: '#1A2238',
			darkBlue: '#3651D4',
			blue: '#3D5BF0',
			darkMarinBlue: '#333740',
			black: '#000',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#FF4703',
			green: '#13ce66',
			yellow: '#ffc82c',
			white: '#fff',
			'gray-dark': '#273444',
			gray: {
				DEFAULT: '#8492a6',
				100: '#DDDDDD',
				200: '#B9B9B9',
				300: '#989898',
				400: '#777777',
				500: '#595959',
				600: '#202020',
				700: '#212121',
			},
			'gray-light': '#d3dce6',
			'dark-gray': '#1F2731',
			'middle-gray': '#596570',
			red: '#F70000',
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
				hamburger: "url('./src/assets/images/hamburger-bg.jpg')",
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
