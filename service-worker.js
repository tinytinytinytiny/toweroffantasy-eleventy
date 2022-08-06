const cacheName = 'my-cache';

const filesToCache = [
	// '/css/global.css',
	// '/js/main.js',
	'/assets/fonts/Archivo.woff2',
	'/assets/fonts/Archivo-Italic.woff2',
	'/assets/fonts/Archivo-Bold.woff2',
	'/assets/fonts/Archivo-BoldItalic.woff2',
	'/assets/fonts/Archivo-BoldExtended.woff2',
	'/assets/fonts/chakra-petch-v9-latin-700.woff2',
	'/assets/fonts/chakra-petch-v9-latin-700italic.woff2',
	'/assets/icons/nav-arrow-down.svg',
	'/assets/icons/nav-arrow-right.svg'
];

self.addEventListener('activate', e => self.clients.claim());

self.addEventListener('install', (e) => {
	self.skipWaiting();
	e.waitUntil(
		caches.open(cacheName)
		.then(cache => cache.addAll(filesToCache))
	);
});

self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then(response => (response) ? response : fetch(e.request))
	);
});
