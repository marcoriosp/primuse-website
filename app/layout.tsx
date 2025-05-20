import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnalyticsHead, AnalyticsBody } from '@/components/Analytics';
import type { Metadata } from 'next';
import { Montserrat } from "next/font/google";


const hostname = window.location.hostname;
let country = ''; 
if (hostname.includes('com.au')) {
  country = 'Australia';
} else if (hostname.includes('com.nz')) {
  country = 'New Zealand';
} else if (hostname.includes('sg')) {
  country = 'Singapore';
} else if (hostname.includes('id')) {
  country = 'Indonesia';
} else if (hostname.includes('my')) {
  country = 'Malaysia';
} else if (hostname.includes('cn')) {
  country = 'China';
}

export const metadata: Metadata = {
  title: `Primuse ${country}`,
  description: `Find the best concerts and events in ${country}`,
};


const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <AnalyticsHead />
      </head>
      <body className={`${montserrat.variable} font-sans min-h-screen flex flex-col`}>
        <AnalyticsBody />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
