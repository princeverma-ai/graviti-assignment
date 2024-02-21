/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1B31A8",
				"primary-light": "#0079FF",
				secondary: "#F4F8FA",
			},

			fontFamily: {
				primary: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
