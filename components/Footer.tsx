"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [selectedRegion, setSelectedRegion] = useState("sg");

  useEffect(() => {
    // Get current hostname
    const hostname = window.location.hostname;
    
    // Set default region based on hostname
    if (hostname.includes("localhost")) {
      setSelectedRegion("sg");
    } else if (hostname.includes("com.au")) {
      setSelectedRegion("com.au");
    } else if (hostname.includes("cn")) {
      setSelectedRegion("cn");
    } else if (hostname.includes("id")) {
      setSelectedRegion("id");
    } else if (hostname.includes("my")) {
      setSelectedRegion("my");
    } else if (hostname.includes("com.nz")) {
      setSelectedRegion("com.nz");
    } else if (hostname.includes("sg")) {
      setSelectedRegion("sg");
    }
  }, []);

  return (
    <footer className="bg-[rgb(var(--primary))] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          <div>
            <h3 className="text-xl font-bold mb-4">Connected</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/primuse" aria-label="Instagram" className="text-white">
                <Image src="/images/icons/instagram.svg" alt="Instagram" width={24} height={24} className="invert" />
              </a>
              <a href="https://tiktok.com/primuse" aria-label="TikTok" className="text-white">
                <Image src="/images/icons/tiktok.svg" alt="TikTok" width={24} height={24} className="invert" />
              </a>
              <a href="https://x.com/primuse" aria-label="X (Twitter)" className="text-white">
                <Image src="/images/icons/twitter.svg" alt="X (Twitter)" width={24} height={24} className="invert" />
              </a>
              <a href="https://linkedin.com/company/primuse" aria-label="LinkedIn" className="text-white">
                <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="invert" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-2">
              <a href="mailto:info@primuse.net" className="text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                info@primuse.net
              </a>
              <a href="tel:+6598196643" className="text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                +65 9819 6643
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-white">Home</Link>
              <Link href="/all-shows" className="text-white">All Shows</Link>
              <Link href="/artist" className="text-white">Artist</Link>
              <Link href="/blog" className="text-white">Blog</Link>
              <Link href="/about" className="text-white">About</Link>
              <Link href="/contact-us" className="text-white">Contact Us</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="/terms" className="text-white">Terms and Conditions</Link>
              <Link href="/privacy" className="text-white">Privacy Policy</Link>
              <Link href="/cookies" className="text-white">Cookies Policy</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Region</h3>
            <div className="flex flex-col gap-2">
              <select 
                className="text-white bg-transparent border-b border-white p-2"
                value={selectedRegion}
                onChange={(e) => {
                  const domain = e.target.value;
                  window.location.href = `https://www.primuse.${domain}`;
                }}
              >
                <option value="com.au">Australia</option>
                <option value="cn">China</option>
                <option value="id">Indonesia</option>
                <option value="my">Malaysia</option>
                <option value="com.nz">New Zealand</option>
                <option value="sg">Singapore</option>
              </select>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}