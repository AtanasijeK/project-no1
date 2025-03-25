"use client";
import Image from "next/image";

interface clientCard {
  client: { name: string; stars: string; image: string; feedback: string };
}

export default function TestimonialCard({ client }: clientCard) {
  return (
    <figure className="bg-white shadow-lg rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-3">
        <Image
          src={client.image}
          alt={`Profile picture of ${client.name}`}
          width={64}
          height={64}
          className="rounded-full object-cover"
          loading="lazy"
        />
        <div className="text-left">
          <h4 className="text-lg font-bold text-gray-800">{client.name}</h4>
          <div className="text-amber-400 text-sm">{client.stars}</div>
        </div>
      </div>
      <figcaption className="text-gray-700 text-sm text-justify leading-relaxed">
        {client.feedback}
      </figcaption>
    </figure>
  );
}
