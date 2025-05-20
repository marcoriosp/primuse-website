// app/layout.tsx
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { headers } from 'next/headers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Primuse - Events & Parties',
  description: 'Find the best concerts and events in Bali',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const host = headers().get('host') ?? '';

  let tagManagerId = 'GTM-PWVT7ZB8';
  let googleAnalyticsId = 'G-9B4ZY8VLGS';

  if (host.includes('com.au')) {
    tagManagerId = 'GTM-PWVT7ZB8';
    googleAnalyticsId = 'G-9B4ZY8VLGS';
  } else if (host.includes('com.nz')) {
    tagManagerId = 'GTM-PWVT7ZB8';
    googleAnalyticsId = 'G-9B4ZY8VLGS';
  } else if (host.includes('.cn')) {
    tagManagerId = '1234';
    googleAnalyticsId = '12345';
  } else if (host.includes('.id')) {
    tagManagerId = '123456';
    googleAnalyticsId = '123456';
  } else if (host.includes('.my')) {
    tagManagerId = '1234567';
    googleAnalyticsId = '1234567';
  } else if (host.includes('.sg')) {
    tagManagerId = '12345678';
    googleAnalyticsId = '12345678';
  }

  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager SCRIPT (IN HEAD) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${tagManagerId}');
            `,
          }}
        />

        {/* ✅ Google Analytics (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', {
                page_path: window.location.pathname
              });
            `,
          }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        {/* ✅ Google Tag Manager NOSCRIPT (IMMEDIATELY AFTER <body>) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${tagManagerId}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
