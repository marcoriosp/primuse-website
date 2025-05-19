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

  useEffect(() => {
    // Get current hostname
    const hostname = window.location.hostname;
    
    let filteredEvents: Event[] = [];
    
    // Set default region based on hostname
    if (hostname.includes("com.au")) {
      filteredEvents = events.filter(event => event.country_iso === "AU");
    } else if (hostname.includes("com.nz")) {
      filteredEvents = events.filter(event => event.country_iso === "NZ");
    } else if (hostname.includes("cn")) {
      filteredEvents = events.filter(event => event.country_iso === "CN");
    } else if (hostname.includes("id")) {
      filteredEvents = events.filter(event => event.country_iso === "ID");
    } else if (hostname.includes("my")) {
      filteredEvents = events.filter(event => event.country_iso === "MY");
    } else if (hostname.includes("sg")) {
      filteredEvents = events.filter(event => event.country_iso === "SG");
    } else {
      filteredEvents = events; // Show all events if no specific domain match
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
        <h2 className="text-3xl font-bold text-center mb-2">THIS YEAR LINEUP</h2>
        <p className="text-center text-gray-300 mb-12">
          This is where you find the parties, concerts, and chaos worth showing up for
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