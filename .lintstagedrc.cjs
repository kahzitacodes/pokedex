module.exports = {
	'**/*.{js,jsx,ts,tsx,json,css,scss,md}': (filenames) => [
		`biome check --write ${filenames.join(' ')}`,
	],
}
