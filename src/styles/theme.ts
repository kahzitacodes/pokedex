export const theme = {
	breakpoints: {
		xs: '32rem', // 512px
		sm: '40rem', // 640px
		md: '48rem', // 768px
		lg: '64rem', // 1024px
		xl: '80rem', // 1280px
		'2xl': '96rem', // 1536px
	},
	grid: {
		container: {
			xs: '100%',
			sm: '60.8rem',
			md: '73.6rem',
			lg: '99.2rem',
			xl: '124.8rem',
			'2xl': '150.4rem',
		},
		gutter: {
			xs: '1.6rem',
			sm: '1.6rem',
			md: '2.4rem',
			lg: '2.4rem',
			xl: '3.2rem',
			'2xl': '3.2rem',
		},
	},
	borderRadius: {
		xs: '0.4rem',
		sm: '0.8rem',
		md: '1.2rem',
		lg: '1.6rem',
		full: '9999px',
	},
	font: {
		family:
			"Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		weight: {
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
		},
		sizes: {
			xs: '1.2rem',
			sm: '1.4rem',
			md: '1.6rem',
			lg: '1.8rem',
			xl: '2.0rem',
			'2xl': '2.4rem',
			'3xl': '2.8rem',
			'4xl': '3.2rem',
		},
		lineHeight: {
			xs: '1.8rem',
			sm: '2.0rem',
			md: '2.4rem',
			lg: '2.8rem',
			xl: '3.0rem',
			'2xl': '3.2rem',
			'3xl': '3.6rem',
			'4xl': '4.0rem',
		},
	},
	colors: {
		pureWhite: '#FFFFFF',
		pureBlack: '#000000',
		charcoal100: '#060606',
		charcoal90: '#323239',
		charcoal70: '#666678',
		charcoal50: '#9797A9',
		charcoal30: '#C7C7D2',
		charcoal20: '#D9D9DF',
		charcoal10: '#ECECEF',
		charcoal5: '#F4f4f6',

		transparent: 'transparent',

		// Pokemon type colors
		grass: '#9BCC50',
		poison: '#B97FC9',
		fire: '#FD7D24',
		water: '#4592C4',
		flying: '#3DC7EF',
		bug: '#669F2A',
		normal: '#9797A9',
		electric: '#FAC515',
		ground: '#A15c07',
		fairy: '#FD6F8E',
		fighting: '#BC1B06',
		psychic: '#EE46BC',
		rock: '#542C0D',
		steel: '#323239',
		ice: '#67E3F9',
		ghost: '#6927DA',
		dragon: '#3538CD',
		dark: '#060606',
	},
	spacings: {
		0: 0,
		0.5: '0.2rem',
		1: '0.4rem',
		1.5: '0.6rem',
		2: '0.8rem',
		3: '1.2rem',
		4: '1.6rem',
		5: '2.0rem',
		6: '2.4rem',
		8: '3.2rem',
		10: '4.0rem',
		12: '4.8rem',
		16: '6.4rem',
		20: '8.0rem',
		24: '9.6rem',
		32: '12.8rem',
		40: '16.0rem',
		64: '25.6rem',
		80: '32.0rem',
	},
	layers: {
		base: 10,
		menu: 20,
		overlay: 30,
		modal: 40,
		alwaysOnTop: 50,
	},
	effects: {
		shadow: {
			lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
		},
		ring: '240.0 10% 63%',
	},
	transition: {
		default: '0.3s ease-in-out',
		fast: '0.1s ease-in-out',
	},
} as const
