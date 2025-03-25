export default function About() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto mt-20">
        <div className="bg-white shadow-sm rounded-lg p-5">
          <span className="text-amber-400 text-[22px]">★★★★★</span>
          <p className="text-gray-700 text-[22px]">
            Over 10,000 satisfied clients have improved their posture with our
            chiropractic care. We use advanced Biostructural Correction
            techniques for long-term pain relief.
          </p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-5">
          <span className="text-amber-400 text-[22px]">★★★★★</span>
          <p className="text-gray-700 text-[22px]">
            Our team has over 30 years of experience in holistic health care.
            Located minutes from your home or office for convenient access to
            quality care.
          </p>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 text-white py-20 p-10 mt-20"
        id="about"
      >
        <div className="">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col justify-between h-full text-center md:pl-6 py-20">
          <div className="mb-auto">
            <h3 className="text-4xl font-bold mb-4 text-blue-800">
              Discover the Benefits <br /> of Our Therapy
            </h3>
            <p className="text-gray-900 text-sm">
              Watch this short video to learn how our expert chiropractic <br />{" "}
              care can improve your health, reduce pain, and enhance mobility.
            </p>
            <p className="text-gray-900 mt-2 text-sm">
              Our experienced team is here to help you every step of the way!
            </p>
          </div>
          <div className="">
            <p className="text-blue-800 mt-4 text-2xl">Book an Appointment</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-gray-300 mr-2">
              I AM AN EXISTING CLIENT
            </button>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-gray-300">
              I AM A NEW CLIENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
