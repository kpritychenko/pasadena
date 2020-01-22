const cacheName = 'pasadena_cache1';
const cacheAssets = [
    'index.html',
    'main.a48e48ab600a850cdf70.js',
    'main.a48e48ab600a850cdf70.css'
];

self.addEventListener('install', e => {
    console.log('SW installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('SW cachin', cache);

                return cache.addAll(cacheAssets);
            })
            .then(() => {
                console.log(1111111, caches);
                self.skipWaiting()
            })
    );
});

self.addEventListener('activate', e => {
    console.log('SW activeted', caches);
}); 

// self.addEventListener('fetch', e => {
//     console.log(123, caches);
//     e.respondWith(fetch(e.request).catch(() => {
//         console.log(1, caches);
//         return caches.match(e.request);
//     }));
// });