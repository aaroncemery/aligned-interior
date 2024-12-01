import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			cinzel: ['var(--font-cinzel)'],
  			belleAurore: ['var(--font-belle-aurore)'],
  			sans: ['var(--font-inter)']
  		},
  		colors: {
  			brand: {
  				'winter-morning': 'hsl(var(--winter-morning))',
  				'aligned-black': 'hsl(var(--aligned-black))',
  				'burnt-red': 'hsl(var(--burnt-red))',
  				'interior-green': 'hsl(var(--interior-green))',
  				'clear-green': 'hsl(var(--clear-green))',
  				'clear-red': 'hsl(var(--clear-red))',
  				'wispful-black': 'hsl(var(--wispful-black))',
  				'wispful-red': 'hsl(var(--wispful-red))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'button-gradient': 'linear-gradient(90deg, rgba(225, 235, 220, 0.2), rgba(102, 34, 29, 0.2)), linear-gradient(rgba(245, 249, 249, 0.8), rgba(245, 249, 249, 0.8))',
  			'button-gradient-hover': 'linear-gradient(90deg, rgba(225, 235, 220, 0.2), rgba(102, 34, 29, 0.2)), linear-gradient(rgba(245, 249, 249, 0.9), rgba(245, 249, 249, 0.9))'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
