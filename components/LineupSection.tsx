import EventCard from "./EventCard";

export default function LineupSection() {
  const events = [
    {
      id: 1,
      title: "NOMADS in Love",
      day: "25",
      month: "APR",
      year: "2024",
      venue: "The Room Bar",
      location: "Indonesia",
      link: "/tickets/nomads-in-love",
      image: "/images/shows/saweetie-brisbane.jpg",
    },
    {
      id: 2,
      title: "NOMADS in Love",
      day: "25",
      month: "APR",
      year: "2024",
      venue: "The Room Bar",
      location: "Indonesia",
      link: "/tickets/nomads-in-love",
      image: "/images/shows/saweetie-melbourne.jpg",
    },
    {
      id: 3,
      title: "NOMADS in Love",
      day: "25",
      month: "APR",
      year: "2024",
      venue: "The Room Bar",
      location: "Indonesia",
      link: "/tickets/nomads-in-love",
      image: "/images/shows/saweetie-sydney.jpg",
    },
    {
      id: 4,
      title: "NOMADS in Love",
      day: "25",
      month: "APR",
      year: "2024",
      venue: "The Room Bar",
      location: "Indonesia",
      link: "/tickets/nomads-in-love",
      image: "/images/shows/saweetie-perth.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[rgb(var(--background))]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">THIS YEAR LINEUP</h2>
        <p className="text-center text-gray-300 mb-12">
          This is where you find the parties, concerts, and chaos worth showing up for
        </p>
        
        <div className="mt-8">
          {events.map((event) => (
            <EventCard
              key={event.id}
              length={events.length}
              id={event.id}
              title={event.title}
              day={event.day}
              month={event.month}
              year={event.year}
              venue={event.venue}
              location={event.location}
              link={event.link}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}