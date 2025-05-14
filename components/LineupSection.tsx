import EventCard from "./EventCard";

export default function LineupSection() {
  const events = [
    {
      id: 1,
      title: "NOMADS in Love",
      date: "25",
      month: "APR",
      day: "24",
      venue: "The Room Bar",
      location: "Indonesia",
      image: "/images/nomads-in-love.jpg",
      link: "/tickets/nomads-in-love",
    },
    {
      id: 2,
      title: "NOMADS in Love",
      date: "25",
      month: "APR",
      day: "24",
      venue: "The Room Bar",
      location: "Indonesia",
      image: "/images/nomads-in-love.jpg",
      link: "/tickets/nomads-in-love",
    },
    {
      id: 3,
      title: "NOMADS in Love",
      date: "25",
      month: "APR",
      day: "24",
      venue: "The Room Bar",
      location: "Indonesia",
      image: "/images/nomads-in-love.jpg",
      link: "/tickets/nomads-in-love",
    },
    {
      id: 4,
      title: "NOMADS in Love",
      date: "25",
      month: "APR",
      day: "24",
      venue: "The Room Bar",
      location: "Indonesia",
      image: "/images/nomads-in-love.jpg",
      link: "/tickets/nomads-in-love",
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
              title={event.title}
              date={event.date}
              month={event.month}
              day={event.day}
              venue={event.venue}
              location={event.location}
              image={event.image}
              link={event.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}