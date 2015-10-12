export function addAppCacheListener() {
    if (window.applicationCache) {
        window.applicationCache.addEventListener('updateready', function confirmInstall() {
            if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
                if (window.confirm('Доступны обновления для опросников. Установить?')) { // eslint-disable-line no-alert
                    window.applicationCache.swapCache();
                    window.location.reload();
                }
            }
        }, false);
    }
}
