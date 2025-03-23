import { div } from "framer-motion/client";

export default function BookingForm() {
  return (
    <div>
      <div className="fixed bottom-0 w-full bg-blue-800 text-white text-center py-2 z-50 md:hidden">
        <a href="#booking" className="font-semibold text-lg text-blue-800">
          📅 Book an Appointment
        </a>
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:0280597743"
          className="bg-blue-800 text-white px-4 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:text-blue-800 border border-blue-800 transition"
        >
          📞 Call Us
        </a>
      </div>
      <section
        className="p-10 bg-white text-blue-800 rounded-xl shadow-md mt-20 max-w-3xl mx-auto"
        id="booking"
      >
        <h3 className="text-2xl font-bold mb-4 text-center">
          Quick Appointment Form
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-md px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-md px-4 py-2"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border rounded-md px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
