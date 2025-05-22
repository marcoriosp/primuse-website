'use client';

import Script from 'next/script';
import { useAnalyticsIds } from './AnalyticsIds';

export function AnalyticsHead() {
    const { gtm, ga, fb } = useAnalyticsIds();

    if (!gtm) return null;

    return (
        <>
        {/* GTM script */}
        <Script id="gtm" strategy="afterInteractive">
            {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtm}');
            `}
        </Script>

        {/* Facebook Pixel ID: 1715879619134869 */}
        <Script id="fb-pixel" strategy="afterInteractive">
        {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fb}');
            fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                height="1" 
                width="1" 
                style={{display: 'none'}} 
                src={`https://www.facebook.com/tr?id=${fb}&ev=PageView&noscript=1`}
                alt=""
            />
        </noscript>

        {/* GA */}
        {ga && (
            <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${ga}', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>
            </>
        )}
        </>
    );
}

export function AnalyticsBody() {
    const { gtm } = useAnalyticsIds();

    if (!gtm) return null;

    return (
        <noscript
            dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtm}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
        />
    );
}
