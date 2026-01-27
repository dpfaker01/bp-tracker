const CACHE_NAME = 'bp-tracker-offline-v2';

// We list EVERYTHING the app needs to work here
const urlsToCache = [
  './index.html',
  './manifest.json',
  // The External Tools (CDNs) - We are saving these to the phone now!
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
];

// 1. Install Phase: Download all the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Activate Phase: Clean up old versions
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 3. Fetch Phase: The Magic. Check phone memory first, then internet.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response from phone memory
        if (response) {
          return response;
        }
        // Not in memory? Go to internet
        return fetch(event.request).catch(() => {
            // If offline and not in cache, show nothing (or fallback)
            // This prevents the "Dino" offline screen for cached assets
        });
      })
  );
});
