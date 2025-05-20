import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnalyticsHead, AnalyticsBody } from '@/components/Analytics';
import type { Metadata } from 'next';
import { Montserrat } from "next/font/google";
import { headers } from 'next/headers';

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

// Server Component - gets hostname server-side
async function getCountryFromHostname() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  
  let country = ''; 
  if (host.includes('com.au')) {
    country = 'Australia';
  } else if (host.includes('com.nz')) {
    country = 'New Zealand';
  } else if (host.includes('sg')) {
    country = 'Singapore';
  } else if (host.includes('id')) {
    country = 'Indonesia';
  } else if (host.includes('my')) {
    country = 'Malaysia';
  } else if (host.includes('cn')) {
    country = 'China';
  }
  
  return country;
}

export async function generateMetadata(): Promise<Metadata> {
  const country = await getCountryFromHostname();
  return {
    title: `Primuse ${country}`,
    description: `Find the best concerts and events in ${country}`,
  };
}

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
