const cacheName = 'v2';
const cacheFiles = [
    '/',
    'main.a48e48ab600a850cdf70.js',
    'main.a48e48ab600a850cdf70.css'
]

self.addEventListener('install', e => {
    console.log('SW installed');

    e.waitUntil(
        caches
            .open('v1')
            .then(cache => {
                console.log('SW cachin');

                cache.addAll(cacheFiles);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    console.log('SW activeted', caches);
}); 

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
            .then(res => {
                const resClone = res.clone();

                caches
                    .open(cacheName)
                    .then(cache => {
                        cache.put(e.request, resClone)
                    })

                return res;
            }).catch(() => caches.match(e.request).then(res => res))
    );
});