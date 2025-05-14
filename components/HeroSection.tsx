"use client";

/*import Link from "next/link";*/
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/images/banners/saweetie-all.jpg",
      alt: "Saweetie Australian Tour",
      title: "Saweetie:",
      subtitle: "Australian Tour",
      day: null,
      date: null,
      venue: null,
      ticketLink: null,
      sponsors: null
    },
    {
      image: "/images/banners/saweetie-brisbane.jpg",
      alt: "Saweetie Australian Tour",
      title: "Saweetie:",
      subtitle: "Brisbane Tour",
      day: "FRIDAY",
      date: "15 . 07",
      venue: "POTATO HEAD",
      ticketLink: "/tickets/festival",
      sponsors: [
        {
          name: "Sponsor A",
          image: "/images/sponsors/sponsor1.png"
        },
        {
          name: "Sponsor B",
          image: "/images/sponsors/sponsor2.png"
        }
      ]
    },
    {
      image: "/images/banners/saweetie-melbourne.jpg",
      alt: "Saweetie Australian Tour",
      title: "Saweetie:",
      subtitle: "Australian Tour",
      day: "SUNDAY",
      date: "30 . 07",
      venue: "KU DE TA",
      ticketLink: "/tickets/beachparty",
      sponsors: [
        {
          name: "Sponsor 1",
          image: "/images/sponsors/sponsor1.png"
        }
      ]
    },
    {
      image: "/images/banners/saweetie-perth.jpg",
      alt: "Saweetie Australian Tour",
      title: "Saweetie:",
      subtitle: "Australian Tour",
      day: "SUNDAY",
      date: "30 . 07",
      venue: "KU DE TA",
      ticketLink: "/tickets/beachparty",
      sponsors: [
        {
          name: "Sponsor 1",
          image: "/images/sponsors/sponsor1.png"
        }
      ]
    },
    {
      image: "/images/banners/saweetie-sydney.jpg",
      alt: "Saweetie Australian Tour",
      title: "Saweetie:",
      subtitle: "Australian Tour",
      day: "SUNDAY",
      date: "30 . 07",
      venue: "KU DE TA",
      ticketLink: "/tickets/beachparty",
      sponsors: [
        {
          name: "Sponsor 1",
          image: "/images/sponsors/sponsor1.png"
        }
      ]
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  /*const currentSlideData = slides[currentSlide];*/

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-end">
      {/* Hero background images */}
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 z-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image 
            src={slide.image} 
            alt={slide.alt} 
            fill 
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      ))}
      
      {/*}
      <div className="relative z-10 ml-20 mb-10">
        <div className="flex flex-col items-start max-w-3xl bg-black bg-opacity-30 p-10 rounded-lg">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {currentSlideData.title}
            <br />
            {currentSlideData.subtitle}
          </h1>
          
          { currentSlideData.day || currentSlideData.venue && (
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              { currentSlideData.day && (
                <div className="text-xl">
                  <span className="font-bold">{currentSlideData.day}</span>
                  <br />
                  {currentSlideData.date}
                </div>
              )}
              { currentSlideData.venue && (
                <div className="text-xl">
                  {currentSlideData.venue}
                </div>
              )}
            </div>
          )}
          
          {currentSlideData.ticketLink && (
            <Link href={currentSlideData.ticketLink} className="btn-ticket">
              BUY TICKETS
            </Link>
          )}

        </div>
      </div>
      */}
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 z-20 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 z-20 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}