import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/svelte-ux/**/*.{svelte,ts,js}',
		'./node_modules/layerchart/**/*.{svelte,ts,js}' // <--- Add this
	],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				dgreen: {
					100: 'hsl(var(--dgreen-100) / <alpha-value>)',
					200: 'hsl(var(--dgreen-200) / <alpha-value>)',
					300: 'hsl(var(--dgreen-300) / <alpha-value>)',
					400: 'hsl(var(--dgreen-400) / <alpha-value>)',
					500: 'hsl(var(--dgreen-500) / <alpha-value>)',
					600: 'hsl(var(--dgreen-600) / <alpha-value>)',
					700: 'hsl(var(--dgreen-700) / <alpha-value>)',
					800: 'hsl(var(--dgreen-800) / <alpha-value>)',
					900: 'hsl(var(--dgreen-900) / <alpha-value>)'
				},
				dblue: {
					100: 'hsl(var(--dblue-100) / <alpha-value>)',
					200: 'hsl(var(--dblue-200) / <alpha-value>)',
					300: 'hsl(var(--dblue-300) / <alpha-value>)',
					400: 'hsl(var(--dblue-400) / <alpha-value>)',
					500: 'hsl(var(--dblue-500) / <alpha-value>)',
					600: 'hsl(var(--dblue-600) / <alpha-value>)',
					700: 'hsl(var(--dblue-700) / <alpha-value>)',
					800: 'hsl(var(--dblue-800) / <alpha-value>)',
					900: 'hsl(var(--dblue-900) / <alpha-value>)'
				},
				dteal: {
					100: 'hsl(var(--dteal-100) / <alpha-value>)',
					200: 'hsl(var(--dteal-200) / <alpha-value>)',
					300: 'hsl(var(--dteal-300) / <alpha-value>)',
					400: 'hsl(var(--dteal-400) / <alpha-value>)',
					500: 'hsl(var(--dteal-500) / <alpha-value>)',
					600: 'hsl(var(--dteal-600) / <alpha-value>)',
					700: 'hsl(var(--dteal-700) / <alpha-value>)',
					800: 'hsl(var(--dteal-800) / <alpha-value>)',
					900: 'hsl(var(--dteal-900) / <alpha-value>)'
				},
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				xl: 'calc(var(--radius) + 4px)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--bits-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--bits-accordion-content-height)' },
					to: { height: '0' }
				},
				'caret-blink': {
					'0%,70%,100%': { opacity: '1' },
					'20%,50%': { opacity: '0' }
				},

				gradientx: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				gradienty: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'top center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'bottom center'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'caret-blink': 'caret-blink 1.25s ease-out infinite',
				gradientx: 'gradientx 5s ease infinite reverse',
				gradienty: 'gradienty 5s ease infinite reverse'
			}
		}
	},
	plugins: [tailwindcssAnimate]
};

export default config;
