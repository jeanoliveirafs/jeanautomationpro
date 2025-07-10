const CACHE_NAME = 'jeanautomationpro-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/index-BfcX8zPY.css',
  '/assets/index-Z85yHyAD.js',
  '/form-handler.js',
  '/manifest.json',
  '/jeanautomationpro.png',
  '/jeanoliveira.jpg',
  '/favicon.svg'
];

// Install Event
self.addEventListener('install', function(event) {
  console.log('ServiceWorker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('ServiceWorker: Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.log('ServiceWorker: Erro ao fazer cache:', error);
      })
  );
  self.skipWaiting();
});

// Fetch Event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate Event
self.addEventListener('activate', function(event) {
  console.log('ServiceWorker: Ativando...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('ServiceWorker: Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
