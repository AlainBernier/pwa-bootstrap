this.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
        '/index.html',
        '/index.js',
        '/bootstrap-5.1.3-dist/css/bootstrap.min.css',
        '/bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js',
        '/favicon.ico',
        '/assets/Boutique.jpeg',
        '/assets/GuideEmploye.jpeg',
        '/assets/Onboarding.jpeg',
        '/assets/icon-192x192.png',
        'assets/icon-256x256.png',
        'assets/icon-384x384.png',
        'assets/icon-512x512.png',
        '/icons-1.7.2/font/bootstrap-icons.css'
        
      ]);
    })
  );
});

this.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        return resp || fetch(event.request).then( async (response) => {
          return caches.open('v1').then((cache) => {
            cache.put(event.request, response.clone());
            return response;
        });
        });
    })
    );
});
this.addEventListener('activate', (event) => {
  console.log(' Activation avec succès des service worker');
});

// self.addEventListener('fetch', function (event)  {
//   console.log('Fetching ...' + event.request.url);
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response !== undefined) {
//         return response;
//       } else {
//         console.log('Fetching from fetch ...' + event.request.url);
//         return fetch(event.request);
//       }
//     })
//   );
// });
