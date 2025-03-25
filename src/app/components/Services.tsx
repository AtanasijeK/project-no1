"use client";
import dynamic from "next/dynamic";
import { services } from "../data/services";
import { services1 } from "../data/services1";

const ExtraServices = dynamic(() => import("./ExtraServices"), {
  ssr: false,
  loading: () => (
    <div className="text-center text-gray-400 py-10">
      Loading more services...
    </div>
  ),
});

export default function Services() {
  return (
    <section
      suppressHydrationWarning
      className="p-10 text-center"
      id="services"
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-800 leading-snug">
        How We Can Help You
      </h2>

      {/* Services Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        aria-labelledby="main-services"
      >
        {services.map(({ title, text }, index) => (
          <article
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 text-left"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-[16px]">{text}</p>
          </article>
        ))}
      </div>

      {/* Video Section */}

      <div className="my-8 flex justify-center">
        <iframe
          className="w-full md:mx-[104px] h-64 rounded-lg shadow-md"
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
          title="Therapy Benefits Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Additional Services Grid */}
      <ExtraServices services1={services1} />
    </section>
  );
}
