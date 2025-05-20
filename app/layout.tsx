"use client";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { useEffect, useState } from "react";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Primuse - Events & Parties",
  description: "Find the best parties, concerts, and events in Bali",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [tagManager, setTagManager] = useState<string>("");
  const [googleAnalytics, setGoogleAnalytics] = useState<string>("");

  useEffect(() => {
    // Get current hostname
    const hostname = window.location.hostname;
        
    // Set default region based on hostname
    if (hostname.includes("com.au")) {
      setTagManager("GTM-PWVT7ZB8");
      setGoogleAnalytics("G-9B4ZY8VLGS");
    } else if (hostname.includes("com.nz")) {
      setTagManager("GTM-PWVT7ZB8");
      setGoogleAnalytics("G-9B4ZY8VLGS");
    } else if (hostname.includes("cn")) {
      setTagManager("");
      setGoogleAnalytics("");
    } else if (hostname.includes("id")) {
      setTagManager("");
      setGoogleAnalytics("");
    } else if (hostname.includes("my")) {
      setTagManager(""); 
      setGoogleAnalytics("");
    } else if (hostname.includes("sg")) {
      setTagManager("");
      setGoogleAnalytics("");
    } else {
      setTagManager("GTM-PWVT7ZB8");
      setGoogleAnalytics("G-9B4ZY8VLGS");
    }
    
  }, []);


  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${tagManager}');
          `}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics}`}></Script>

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalytics}');
          `}
        </Script>


        {/* End Google Tag Manager */}
      </head>
      <body className={`${montserrat.variable} font-sans min-h-screen flex flex-col`}>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=${tagManager}" 
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}} />
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}