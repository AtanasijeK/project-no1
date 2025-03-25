"use client";
import Image from "next/image";
import Link from "next/link";
import TestimonialCard from "./TestimonialCard";
import { impressions } from "../data/impressions";

export default function Impressions() {
  return (
    <section
      suppressHydrationWarning
      className="mt-20 px-4 md:px-10 text-center"
    >
      <h2
        id="client-testimonials"
        aria-label="Client Testimonials"
        className="text-3xl md:text-4xl font-bold mb-6 text-blue-800"
      >
        What Our Clients Say
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-3 md:gap-5">
        <Image
          src="/images/google.png"
          alt="Google logo"
          width={48}
          height={48}
          loading="eager"
          priority
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold ml-2">
            4.9 <span className="text-amber-400">★★★★★</span>
          </span>
          <a
            href="https://www.google.com/"
            className="text-[14px] underline ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our 173 reviews
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-x-6 md:gap-y-12 md:gap-x-10 lg:gap-y-14 lg:gap-x-12">
        {impressions?.length > 0 &&
          impressions.map((client, index) => (
            <TestimonialCard key={index} client={client} />
          ))}
      </div>
    </section>
  );
}
