
export default () => {
    if (navigator && navigator.serviceWorker) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('sw.js')
                .then(reg => {
                    console.log('SW Registered');
                })
                .catch(e => {
                    console.log(`SW Register error: ${e}`);
                });
        })
    } else {
        console.log('There is no SW support');
    }
}