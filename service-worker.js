const cacheName = 'my-cache';

const filesToCache = [
	'/',
	'/css/global.css',
	'/js/main.min.js',
	'/assets/icons/nav-arrow-down.svg',
	'/assets/icons/nav-arrow-right.svg',
	'/changelog/',
	'/simulacra/',
	'/matrices/',
	'/relics/',
	'/food/',
	'/mounts/',
	'/guides/'
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
