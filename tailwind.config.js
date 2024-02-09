/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				100: "400px",
				120: "500px",
			},
			fontFamily: {
				inter: "Inter",
			},
		},
	},
	plugins: [require("daisyui")],
}
