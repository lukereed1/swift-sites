/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "500px",
				xl: "1440px",
				"2xl": "1920px",
			},
		},
	},
	plugins: [],
};
