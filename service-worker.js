const cacheName = 'my-cache-06192022a';

const filesToCache = [
	'/',
	// '/css/global.css',
	'/js/main.js',
	'/assets/images/fixed_btn_cbt_small.png',
	'/assets/images/art/weila.png',
	'/changelog/'
	// '/simulacra/',
	// '/matrices/',
	// '/relics/',
	// '/food/',
	// '/mounts/',
	// '/guides/'
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
		caches.match(e.request)
		.then(response => (response) ? response : fetch(e.request))
	);
});
