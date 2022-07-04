import captureWebsite from 'capture-website';

const options = {
	width: 1920,
	height: 1000
};

const items = [
	['https://sindresorhus.com', 'sindresorhus'],
	['https://github.com', 'github'],
	// …
];

await Promise.all(items.map(([url, filename]) => {
	return captureWebsite.file(url, `${filename}.png`, options);
}));