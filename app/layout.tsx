import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnalyticsHead, AnalyticsBody } from '@/components/Analytics';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Primuse - Events & Parties',
  description: 'Find the best concerts and events in Bali',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <AnalyticsHead />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <AnalyticsBody />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
