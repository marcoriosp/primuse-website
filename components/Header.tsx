"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[rgb(var(--primary))] py-5">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.svg" alt="PRIMUSE" width={120} height={30} className="h-10 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white font-medium">Home</Link>
          <Link href="/all-shows" className="text-white font-medium text-lg">All Shows</Link>
          <Link href="https://app.primuse.net/" className="text-white font-medium text-lg" target="_blank">Artist</Link>
          <Link href="https://www.primusegroup.com/about-us/" className="text-white font-medium text-lg" target="_blank">About Us</Link>
          <Link href="/contact" className="text-white font-medium text-lg">Contact Us</Link>
        </nav>
        
        <button 
          className="md:hidden text-white z-50" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[rgb(var(--primary))] z-40 flex items-center justify-center">
            <nav className="flex flex-col items-center space-y-8">
              <Link href="/" className="text-white font-medium text-xl" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/all-shows" className="text-white font-medium text-xl" onClick={() => setMobileMenuOpen(false)}>All Shows</Link>
              <Link href="https://app.primuse.net/" className="text-white font-medium text-xl" target="_blank" onClick={() => setMobileMenuOpen(false)}>Artist</Link>
              <Link href="https://www.primusegroup.com/about-us/" className="text-white font-medium text-xl" target="_blank" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link href="/contact" className="text-white font-medium text-xl" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}