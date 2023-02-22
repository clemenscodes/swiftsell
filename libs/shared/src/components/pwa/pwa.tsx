import type { Workbox } from 'workbox-window';
import { useEffect } from 'react';

declare global {
    interface Window {
        workbox: Workbox;
    }
}

export function Pwa() {
    useEffect(() => {
        if ('serviceWorker' in navigator && window.workbox !== undefined) {
            const wb = window.workbox;
            console.log('Registering service worker');
            wb.register();
            console.log('Registered');
        }
    }, []);
    return null;
}
export default Pwa;
