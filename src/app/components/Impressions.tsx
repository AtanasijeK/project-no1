"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { impressions } from "../data/impressions";

export default function Impressions() {
  return (
    <motion.section
      className="mt-20 p-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-blue-800">
        What Our Clients Say
      </h2>
      <div className="flex justify-center items-center mb-6">
        <Image
          src="/images/google.png"
          alt="Google logo"
          width={50}
          height={50}
          className="my-4"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-10">
        {impressions?.length > 0 &&
          impressions.map((client, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-5">
              <div className="grid grid-cols-2">
                <Image
                  src={client.image}
                  alt={client.name}
                  width={60}
                  height={80}
                  className="rounded-full mb-3"
                />
                <div>
                  <h4 className="text-lg font-bold">{client.name}</h4>
                  <h4 className="text-amber-400">{client.stars}</h4>
                </div>
              </div>
              <p className="text-gray-700 mt-2 text-justify">
                {client.feedback}
              </p>
            </div>
          ))}
      </div>
    </motion.section>
  );
}
