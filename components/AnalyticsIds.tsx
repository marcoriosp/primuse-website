'use client';

import { useEffect, useState } from 'react';

export function useAnalyticsIds() {
    const [ids, setIds] = useState({
        gtm: '',
        ga: '',
    });

    useEffect(() => {
        const hostname = window.location.hostname;

        let gtm = 'GTM-PWVT7ZB8';
        let ga = 'G-9B4ZY8VLGS';

        if (hostname.includes('com.au') || hostname.includes('com.nz')) {
            gtm = 'GTM-PWVT7ZB8';
            ga = 'G-9B4ZY8VLGS';
        } else if (hostname.includes('cn')) {
            gtm = '1234';
            ga = '12345';
        } else if (hostname.includes('id')) {
            gtm = '123456';
            ga = '123456';
        } else if (hostname.includes('my')) {
            gtm = '1234567';
            ga = '1234567';
        } else if (hostname.includes('sg')) {
            gtm = '12345678';
            ga = '12345678';
        }

        setIds({ gtm, ga });
    }, []);

    return ids;
}
