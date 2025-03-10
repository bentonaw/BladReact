/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const flattenColorPalette =
	require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				bladtheme: '#800020',
				bladthemedetail: '#A64C62',
				bladLightBackground: 'rgb(247, 249, 249)',
				headerlight: '#DEE0E0',
				bladLightFields: '#f3f4f6',
				bladLightFields2: '#fafafa',
				bladLightTextColor: '#020617',
				bladLightHover: '#d1d5db',
				bladDarkBackground: '#111827',
				bladDarkFields: '#374151',
				bladDarkFields2: '#6b7280',
				bladDarkTextColor: '#f9fafb',
				bladDarkHover: '#374151',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
				'background-burgundy': 'var(--custom-color-background-burgundy)',
			},
			fontFamily: {
				comico: ['Comico', 'sans-serif'],
				general: ['General Sans', 'sans-serif'],
				body: ['Synonym', 'sans-serif', defaultTheme.fontFamily.sans],
				heading: ['Erode', 'sans-serif'],
			},
			backgroundImage: {
				'hero-pattern': 'url(/src/images/mainpageimages/BladBG2.png)',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars,
	});
}
