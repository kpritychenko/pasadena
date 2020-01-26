const cacheName = 'v1';

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

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
            .then(res => {
                caches
                    .open(cacheName)
                    .then(cache => {
                        cache.put(e.request, res.clone())
                    })
            }).catch(() => caches.match(e.request))
    );
});