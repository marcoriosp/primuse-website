import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cuebrick-hero.jpg"
          alt="Cuebrick at Bali NYE 2024"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-start max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Bali NYE 2024:
            <br />
            Captain Curtis
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            <div className="text-xl">
              <span className="font-bold">SATURDAY</span>
              <br />
              22 . 06
            </div>
            <div className="text-xl">
              ODIN BALI
            </div>
          </div>
          
          <Link href="/tickets/cuebrick" className="btn-ticket">
            BUY TICKETS
          </Link>
          
          <div className="flex gap-4 mt-8">
            <Image
              src="/images/sponsor-1.png"
              alt="Sponsor"
              width={60}
              height={30}
              className="h-6 w-auto"
            />
            <Image
              src="/images/sponsor-2.png"
              alt="Sponsor"
              width={60}
              height={30}
              className="h-6 w-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}