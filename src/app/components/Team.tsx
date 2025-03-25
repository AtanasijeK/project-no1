"use client";
import Image from "next/image";
import { team } from "../data/team";

export default function Team() {
  return (
    <section className="p-10 text-center" id="team">
      <h2 className="text-4xl font-bold text-blue-800 my-10">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map(({ name, title, image, details }, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-2xl p-5 text-center transition-transform duration-300 hover:scale-105"
          >
            <div>
              <Image
                src={image}
                alt={name}
                width={160}
                height={160}
                sizes="(max-width: 768px) 100vw, 160px"
                loading="lazy"
                className="rounded-full mx-auto mb-3"
              />
              <h4 className="text-lg font-semibold text-blue-800">{name}</h4>
              <p className="text-gray-600">{title}</p>
              <p className="text-[16px] text-gray-500 text-justify mt-5 leading-relaxed">
                {details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
