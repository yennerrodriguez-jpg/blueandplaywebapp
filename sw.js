// Minimal Service Worker to satisfy PWA install criteria
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
});

// A 'fetch' event listener is required for the PWA to be installable
self.addEventListener('fetch', (event) => {
    // We don't need to cache anything since we are redirecting
    // But the listener must exist.
});
