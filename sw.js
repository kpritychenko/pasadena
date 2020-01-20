const cacheName = 'v1';
const cacheFiles = [
    'index.html',
    'main.a48e48ab600a850cdf70.css',
    'main.a48e48ab600a850cdf70.js',
    '/src'

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