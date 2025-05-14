import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  month: string;
  day: string;
  venue: string;
  location: string;
  image: string;
  link: string;
}

export default function EventCard({
  title,
  date,
  month,
  day,
  venue,
  location,
  image,
  link,
}: EventCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="bg-zinc-900 p-4 text-center flex flex-col justify-center items-center w-20">
        <div className="font-bold text-xl">{day}</div>
        <div className="text-sm uppercase">{month}</div>
        <div className="text-xs">{date}</div>
      </div>
      
      <div className="relative overflow-hidden rounded-md flex-grow">
        <Image
          src={image}
          alt={title}
          width={300}
          height={140}
          className="w-full h-40 object-cover"
        />
      </div>
      
      <div className="flex flex-col p-2 flex-grow">
        <div className="flex gap-2 mb-2">
          <span className="bg-[rgb(var(--primary))] text-white text-xs px-2 py-1 rounded">
            {venue}
          </span>
          <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded">
            {location}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <div className="text-sm text-gray-300 mb-4">
          With Dimitri Vegas & Like Mike
        </div>
        
        <Link href={link} className="btn-ticket w-full md:w-auto self-end md:self-start">
          BUY TICKETS
        </Link>
      </div>
    </div>
  );
}