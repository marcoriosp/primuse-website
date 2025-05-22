'use client';

import { useEffect, useState } from 'react';

export function useAnalyticsIds() {
    const [ids, setIds] = useState({
        gtm: '',
        ga: '',
        fb: '',
    });

    useEffect(() => {
        const hostname = window.location.hostname;

        let gtm = 'GTM-PWVT7ZB8'; //Google Tag Manager
        let ga = 'G-9B4ZY8VLGS'; //Google Analytics
        let fb = '1715879619134869'; //Facebook Pixel
        if (hostname.includes('au') || hostname.includes('nz')) {
            gtm = 'GTM-PWVT7ZB8';
            ga = 'G-9B4ZY8VLGS';
            fb = '1715879619134869';
        } else if (hostname.includes('sg')) {
            gtm = 'GTM-T6FV2PZT';
            ga = 'G-X3C7160D01';
            fb = '';
        } else if (hostname.includes('id')) {
            gtm = 'GTM-TN2W28WK';
            ga = 'G-0S9LYJL5N2';
            fb = '';
        } else if (hostname.includes('my')) {
            gtm = '';
            ga = '';
            fb = '';
        } else if (hostname.includes('cn')) {
            gtm = '';
            ga = '';
            fb = '';
        }

        setIds({ gtm, ga, fb });
    }, []);

    return ids;
}
