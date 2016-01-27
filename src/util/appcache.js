export function addAppCacheListener() {
    if (typeof window !== 'undefined' && window.applicationCache) {
        window.applicationCache.addEventListener('updateready', () => {
            if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
                if (window.confirm('Доступны обновления для опросников. Установить?')) {
                    window.applicationCache.swapCache();
                    window.location.reload();
                }
            }
        }, false);
    }
}
