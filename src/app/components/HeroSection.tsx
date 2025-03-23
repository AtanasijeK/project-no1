"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row items-start justify-between px-10 pt-28 pb-10 gap-10"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 space-y-4"
      >
        <h1 className="text-[54px] font-bold">
          Achieve Optimal{" "}
          <span className="text-blue-800">
            Health, Happiness and Your Full Human Potential
          </span>
        </h1>
        {[
          "Over 30 years of chiropractic experience",
          "Just minutes from where you live or work",
          "Long-term solution to pain and discomfort",
        ].map((text, index) => (
          <p key={index} className="flex items-start text-gray-700">
            <CheckCircle className="mr-2 text-blue-800" /> {text}
          </p>
        ))}
        <button className="bg-blue-800 hover:scale-105 transition transform duration-200 text-white px-5 py-3 rounded-lg shadow-md hover:bg-white hover:text-blue-800 border border-blue-800 mt-4 cursor-pointer">
          Call Us to Take the First Step
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
          src="/images/massage.jpg"
          alt="Hero Image"
          width={1000}
          height={200}
          className="rounded-lg shadow-lg h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
