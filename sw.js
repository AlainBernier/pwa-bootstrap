this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        "index.html",
        "index.js",
        "bootstrap-5.1.3-dist/css/bootstrap.min.css",
        "bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js",
        "favicon.ico",
        "assets/Boutique.jpeg",
        "assets/GuideEmploye.jpeg",
        "assets/Onboarding.jpeg",
        "assets/icon-192x192.png",
        "assets/icon-256x256.png",
        "assets/icon-384x384.png",
        "assets/icon-512x512.png",
        "assets/APPCONNECT_32x32.png",
        "assets/apple-touch-icon.png",
        "assets/logoApps.svg",
        "page-hors-ligne.html",
        "icons-1.7.2/font/bootstrap-icons.css",
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  console.log("Fetching ..." + event.request.url);
  event.respondWith(cacheOrNetwork(event.request).catch(() => 
  fallbackVersPageHorsLigne()));
});


function cacheOrNetwork(request) {
return fromCache(request).catch(() => fetch(request));
};

function fromCache(request) {
return caches.open('v1').then(function (cache) {
  return cache.match(request).then(function (matching) {
    return matching || Promise.reject('no-match');
  });
});
}

function fallbackVersPageHorsLigne() {
  return caches.match("page-hors-ligne.html");
 }



