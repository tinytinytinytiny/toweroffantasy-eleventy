const Image = require('@11ty/eleventy-img');

module.exports = async (src, alt, className, attributes = '') => {
	if (alt === undefined) {
		// You bet we throw an error on missing alt (alt="" works okay)
		throw new Error(`Missing \`alt\` on myImage from: ${src}`);
	}

	let metadata = await Image(src, {
		widths: [null],
		formats: ['webp', 'png'],
		urlPath: '/assets/images/',
		outputDir: './_site/assets/images/'
	});

	let data = metadata.png[metadata.png.length - 1];

	return `<picture ${(className && className.length) ? `class="${className}"` : ''} ${attributes}>
		${Object.values(metadata).map(imageFormat => {
			return `<source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.url)}">`;
		}).join("\n")}
		<img src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" decoding="async">
	</picture>`;
};
