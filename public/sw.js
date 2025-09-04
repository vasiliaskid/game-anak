// Service Worker for PWA functionality

const CACHE_NAME = 'petualangan-pendidikan-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/styles/main.css',
  '/src/main.js',
  '/src/game/GameManager.js',
  '/src/game/PhaserGame.js',
  '/src/data/questions.js',
  '/src/data/characters.js',
  '/src/utils/AudioManager.js',
  '/src/utils/StorageManager.js',
  'https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});