
function load() {
    document.addEventListener('visibilitychange', async () => {
        if (screenLock !== null && document.visibilityState === 'visible') {
            screenLock = await navigator.wakeLock.request('screen');
        }
    });
}