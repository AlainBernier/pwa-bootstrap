self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v1').then(function (cache) {
      return cache.addAll([
        '/pwa-bootstrap/index.html',
        '/pwa-bootstrap/index.js',
        '/pwa-bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css',
        '/pwa-bootstrap/bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js',
        '/pwa-bootstrap/favicon.ico',
        '/pwa-bootstrap/assets/Boutique.jpeg',
        '/pwa-bootstrap/assets/GuideEmploye.jpeg',
        '/pwa-bootstrap/assets/Onboarding.jpeg',
        '/pwa-bootstrap/icons-1.7.2/font/bootstrap-icons.css',
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  console.log('Fetching ...' + event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response !== undefined) {
        return response;
      } else {
        console.log('Fetching from fetch ...' + event.request.url);
        return fetch(event.request);
      }
    })
  );
});
