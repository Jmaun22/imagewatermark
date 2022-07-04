import captureWebsite from 'capture-website';




await captureWebsite.file('https://www.wikipedia.org', 'screenshotI.png', {
	emulateDevice: 'iPhone X'
});