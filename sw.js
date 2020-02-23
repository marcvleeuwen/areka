var cacheName = 'Zunde';
var filesToCache = [
    '',
    'index.html',
    'assets/png/notifications.png',
    'assets/png/payments.png',
    'assets/png/send.png',
    'assets/png/spend.png',
    'assets/png/vector-phone.png',
    'css/bootstrap/bootstrap.min.css',
    'css/site.css',
    'js/bootstrap/bootstrap.min.js',
    'js/bootstrap/jquery-3.3.1.slim.min.js',
    'js/bootstrap/popper.min.js',
    'js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
