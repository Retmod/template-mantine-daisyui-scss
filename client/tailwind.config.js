/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')], //https://daisyui.com
	daisyui: {
		themes: ['dracula'],
		base: false,
	},
};
