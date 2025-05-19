import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
          <Link href="https://www.primusegroup.com/contact-us/" className="text-white font-medium text-lg" target="_blank">Contact Us</Link>
        </nav>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
}