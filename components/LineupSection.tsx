"use client";

import EventCard from "./EventCard";
import events from "../src/events.json";
import { useEffect, useState } from "react";

// Define the event type based on the events.json structure
type Event = {
  id: number;
  title: string;
  date: string;
  venue: string;
  country: string;
  country_iso: string;
  link: string;
  image: string;
};

export default function LineupSection() {
  const [regionEvents, setRegionEvents] = useState<Event[]>([]);
  const [region, setRegion] = useState<string>("");

  useEffect(() => {
    // Get current hostname
    const hostname = window.location.hostname;
    
    let filteredEvents: Event[] = [];
    
    // Set default region based on hostname
    if (hostname.includes("com.au")) {
      filteredEvents = events.filter(event => event.country_iso === "AU");
      setRegion("IN AUSTRALIA");
    } else if (hostname.includes("com.nz")) {
      filteredEvents = events.filter(event => event.country_iso === "NZ");
      setRegion("IN NEW ZEALAND");
    } else if (hostname.includes("cn")) {
      filteredEvents = events.filter(event => event.country_iso === "CN");
      setRegion("IN CHINA");
    } else if (hostname.includes("id")) {
      filteredEvents = events.filter(event => event.country_iso === "ID");
      setRegion("IN INDONESIA");
    } else if (hostname.includes("my")) {
      filteredEvents = events.filter(event => event.country_iso === "MY");
      setRegion("IN MALAYSIA");
    } else if (hostname.includes("sg")) {
      filteredEvents = events.filter(event => event.country_iso === "SG");
      setRegion("IN SINGAPORE");
    } else {
      filteredEvents = events; // Show all events if no specific domain match
      setRegion("");
    }
    
    // Sort events by date in ascending order
    const sortedEvents = filteredEvents.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    
    setRegionEvents(sortedEvents);
  }, []);

  return (
    <section className="py-16 bg-[rgb(var(--background))]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">UPCOMING SHOWS {region}</h2>
        <p className="text-center text-gray-300 mb-12">
          Explore the concerts that are making noise across {region.charAt(0).toUpperCase() + region.slice(1).toLowerCase()}.
        </p>
        
        <div className="mt-8">
          {regionEvents.map((event, index) => (
            <EventCard
              key={event.id}
              length={regionEvents.length}
              id={index + 1}
              title={event.title}
              date={event.date}
              venue={event.venue}
              country={event.country}
              link={event.link}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}