"use client";
import Image from "next/image";
import { team } from "../data/team";
import { useState } from "react";

export default function Team() {
  const [openPerson, setOpenPerson] = useState<number | null>(null);
  return (
    <section className="p-10 text-center" id="team">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map(({ name, title, image, details }, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 text-center"
          >
            <div
              className="cursor-pointer"
              onClick={() => setOpenPerson(openPerson === index ? null : index)}
            >
              <Image
                src={image}
                alt={name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-3"
              />
              <h4 className="text-lg font-bold text-blue-800">{name}</h4>
              <p className="text-gray-600">{title}</p>
              <p className="text-[12px] text-gray-500">
                Click for more details...
              </p>
            </div>
            {openPerson === index && (
              <p className="mt-3 text-gray-700 text-justify">{details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
