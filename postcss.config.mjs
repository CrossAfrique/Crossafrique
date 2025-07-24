const config = {
	plugins: ["@tailwindcss/postcss"],
};
module.exports = {
	theme: {
		extend: {
			prose: {
				'p': { marginBottom: '1rem' },
				'h1': { fontSize: '2rem', marginBottom: '1.5rem' },
				// Add more styles as needed
			},
		},
	},
};
export default config;
