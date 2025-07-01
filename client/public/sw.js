const CACHE_NAME = 'jeanautomationpro-v1';
const urlsToCache = [
  '/',
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
        if (response) {
          console.log('ServiceWorker: Servindo do cache:', event.request.url);
          return response;
        }
        
        console.log('ServiceWorker: Buscando da rede:', event.request.url);
        return fetch(event.request)
          .then(function(response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      }
    )
  );
});

// Activate Event - Clean up old caches
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
  self.clients.claim();
});
