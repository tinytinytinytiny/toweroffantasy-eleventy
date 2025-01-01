const VERSION = '0.0.1';
const coreCacheName = VERSION + '_core';
const imagesCacheName = VERSION + '_images';
const pagesCacheName = VERSION + '_pages';
const definedCacheNames = [coreCacheName, imagesCacheName, pagesCacheName];

const limits = {
	pages: 20,
	images: 60
};

const filesToCache = [
	'/css/fonts.css',
	'/assets/fonts/Archivo.woff2',
	'/assets/fonts/Archivo-Italic.woff2',
	'/assets/fonts/chakra-petch-v9-latin-700.woff2',
	'/assets/fonts/chakra-petch-v9-latin-700italic.woff2',
	'/assets/icons/nav-arrow-down.svg',
	'/assets/icons/nav-arrow-right.svg'
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(coreCacheName).then((cache) => {
			cache.addAll(filesToCache)
				.then(() => self.skipWaiting())
		})
	);
});

// delete old caches upon activation
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys()
			// delete caches that don't match current version
			.then((cacheNames) => Promise.all(
				cacheNames.map((cacheName) => {
					if (!definedCacheNames.includes(cacheName)) {
						return caches.delete(cacheName);
					}
				})
			))
			// use this service worker immediately
			.then(() => clients.claim())
	);
});
self.addEventListener('fetch', (event) => {
	const request = event.request;

	// Ignore non-GET requests
	if (request.method !== 'GET') return;

	// IMAGES: fetching updated version, then store in cache
	if (
		!request.url.match(/(nav-arrow-down\.svg)$/)
		&& !request.url.match(/(nav-arrow-right\.svg)$/)
		&& request.url.match(/\.(jpe?g|png|gif|svg|webp|avif)$/)
		|| request.url.match(/\.(jpe?g|png|gif|svg|webp|avif)\/m\//)
	) {
		event.respondWith(
			// look for a cached version of the image
			caches.match(request)
				.then((responseFromCache) => {
					if (responseFromCache) {
						event.waitUntil(storeInCache(request, imagesCacheName));
						return responseFromCache;
					}

					// put image in cache if not in cache already
					return fetch(request).then((responseFromFetch) => {
						/* put a copy in the cache. this is necessary
						because images are streams of data. once data
						is streamed, it can't be used again */
						const copy = responseFromFetch.clone();

						caches.open(imagesCacheName)
							.then((imagesCache) => imagesCache.put(request, copy));

						return responseFromFetch;
					});
				}) // end then
		); // end respondWith
		return;
	}

	// PAGES: network first, cache fallback
	if (
		request.headers.get('Accept').includes('text/html')
		&& !request.url.match(/\/(offline)$/)
	) {
		event.respondWith(
			fetch(request).then((responseFromFetch) => {
				const copy = responseFromFetch.clone();
				caches.open(pagesCacheName)
					.then((pagesCache) => pagesCache.put(request, copy));
				return responseFromFetch;
			}).catch(() => {
				return caches.match(request)
					.then((responseFromCache) => responseFromCache || caches.match('offline.html'));
			})
		); // end respondWith
		return;
	}

	// EVERYTHING ELSE: look for cached copy, else fetch from network
	event.respondWith(
		/* look for a matching file that has been cached.
		match() searches all caches when used on the caches
		object, so no need to specify cache name */
		caches.match(request)
			/* match() does not reject if a match is not found.
			it always resolves and returns null if there is no match */
			.then((responseFromCache) => responseFromCache || fetch(request))
	);
});

self.addEventListener('message', (event) => {
	if (event.data !== 'cleanup') return;
	trimCache(pagesCacheName, limits.pages);
	trimCache(imagesCacheName, limits.images);
});

function storeInCache(request, cacheName) {
	// cleanup
	trimCache(pagesCacheName, limits.pages);
	trimCache(imagesCacheName, limits.images);

	// fetch the file
	fetch(request).then((responseFromFetch) => {
		// open the cache
		caches.open(cacheName)
			// put the file in the cache
			.then(cache => cache.put(request, responseFromFetch))
	});
}

function trimCache(cacheName, max) {
	caches.open(cacheName).then((cache) => {
		cache.keys().then((items) => {
			if (items.length > max) {
				cache.delete(items[0]).then(() => trimCache(cacheName, max));
			}
		});
	});
}