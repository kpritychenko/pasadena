const cacheName = 'v1';

self.addEventListener('install', e => {
    console.log('SW installed');
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