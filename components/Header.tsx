import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[rgb(var(--primary))] py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/primuse-logo.png" 
            alt="Primuse Logo"
            width={120}
            height={30}
            className="h-8 w-auto"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white font-medium">
            Home
          </Link>
          <Link href="/all-shows" className="text-white font-medium">
            All Shows
          </Link>
          <Link href="/artist" className="text-white font-medium">
            Artist
          </Link>
          <Link href="/blog" className="text-white font-medium">
            Blog
          </Link>
          <Link href="/about-us" className="text-white font-medium">
            About Us
          </Link>
          <Link href="/contact-us" className="text-white font-medium">
            Contact Us
          </Link>
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