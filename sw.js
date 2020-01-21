const cacheName = 'v1';
const cacheFiles = [
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

                cache.addAll(cacheFiles);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activete', e => {
    console.log('SW activeted');
}); 

self.addEventListener('fetch', e => {
    console.log(123, caches);
    e.respondWith(fetch(e.request).catch(() => {
        console.log(1, caches);
        caches.match(e.request);
    }));
});