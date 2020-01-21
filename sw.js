const cacheName = 'v1';
const cacheFiles = [
    'main.a48e48ab600a850cdf70.js',
    'main.a48e48ab600a850cdf70.css',
    'index.html'
];

self.addEventListener('install', e => {
    console.log('SW installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('SW cachin');

                cache.addAll(cacheFiles);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activete', e => {
    console.log('SW activeted');
});

self.addEventListener('fetch', e => {
    e.responnWith(
        fetch(e.request).catch(() => caches.match(e.request));
    );
})