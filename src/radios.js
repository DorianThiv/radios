
function load() {
    document.addEventListener('visibilitychange', async () => {
        if (document.visibilityState === 'visible') {
            screenLock = await navigator?.wakeLock?.request('screen');
        }
    });
}