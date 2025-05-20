'use client';

import { useEffect, useState } from 'react';

export function useAnalyticsIds() {
    const [ids, setIds] = useState({
        gtm: '',
        ga: '',
    });

    useEffect(() => {
        const hostname = window.location.hostname;

        let gtm = 'GTM-PWVT7ZB8'; //Google Tag Manager
        let ga = 'G-9B4ZY8VLGS'; //Google Analytics

        if (hostname.includes('com.au') || hostname.includes('com.nz')) {
            gtm = 'GTM-PWVT7ZB8';
            ga = 'G-9B4ZY8VLGS';
        } else if (hostname.includes('sg')) {
            gtm = '';
            ga = 'G-X3C7160D01';
        } else if (hostname.includes('id')) {
            gtm = '';
            ga = '';
        } else if (hostname.includes('my')) {
            gtm = '';
            ga = '';
        } else if (hostname.includes('cn')) {
            gtm = '';
            ga = '';
        }

        setIds({ gtm, ga });
    }, []);

    return ids;
}
