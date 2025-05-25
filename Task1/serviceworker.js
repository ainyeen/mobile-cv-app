const CACHE_NAME = 'cv-app-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'aboutme.html',
  'skills.html',
  'portfolio.html',
  'contact.html',
  'Style/stylesheet.css',
  'app.js',
  'manifest.json',
  'Image/Ain.jpg',
  'Image/SNA.jpg',
  'Image/java.png',
  'Image/java_output.png',
  'Image/sna.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
