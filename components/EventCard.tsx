import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  id: number;
  length: number;
  title: string;
  venue: string;
  country: string;
  link: string;
  image: string;
  date: string;
}

export default function EventCard({
  id,
  length,
  title,
  venue,
  country,
  link,
  image,
  date
}: EventCardProps) {
  // Extract date components from ISO date string
  const eventDate = new Date(date);
  const weekday = eventDate.toLocaleDateString('en-US', { weekday: 'long' });
  const day = eventDate.getDate();
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' });
  const year = eventDate.getFullYear();

  return (
    <div className={`flex flex-col md:flex-row gap-4 w-full justify-between  mb-12 pb-12 ${id < length ? 'border-b border-zinc-500' : ''}`}>
      
      <div className="bg-zinc-900 p-4 text-center flex flex-col justify-center items-center w-30">
        <div className="text-xs">{weekday}</div>
        <div className="font-bold text-xl">{day} {month}</div>
        <div className="text-xs">{year}</div>
      </div>
      
      <div className="relative overflow-hidden rounded-md flex-grow min-h-[214px] min-w-[380px]">
        <Image 
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', minWidth: '380px' , minHeight: '214px' }}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow p-2 justify-center">
        <div className="flex gap-2 mb-2">
          <span className="bg-[rgb(var(--primary))] text-white text-xs px-2 py-1 rounded">{venue}</span>
          <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded">{country}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="text-sm text-gray-300 mb-4">{venue}</div>
      </div>
      
      <div className="flex justify-end items-center">
        <Link href={link} className="btn-ticket w-full md:w-auto" target="_blank">BUY TICKETS</Link>
      </div>

    </div>
  );
}