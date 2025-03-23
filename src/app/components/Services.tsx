// import { services } from "../data/services";
// import { services1 } from "../data/services1";

// export default function Services() {
//   return (
//     <section className="p-10 text-center" id="services">
//       <h2 className="text-4xl font-bold mb-4 text-blue-800">
//         How We Can Help You
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
//         {services.map(({ title, text }, index) => (
//           <div key={index} className="bg-white shadow-lg rounded-lg p-5">
//             <h4 className="text-lg font-bold text-blue-800 mb-2">{title}</h4>
//             <p className="text-gray-600 text-justify">{text}</p>
//           </div>
//         ))}
//       </div>
//       <div className="my-6">
//         <iframe
//           className="h-64 md:h-80 rounded-lg shadow-sm"
//           src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//           title="Therapy Benefits Video"
//           frameBorder="0"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//         ></iframe>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
//         {services1.map(({ title, text }, index) => (
//           <div key={index} className="bg-white shadow-lg rounded-lg p-5">
//             <h4 className="text-lg font-bold text-blue-800 mb-2">{title}</h4>
//             <p className="text-gray-600 text-justify">{text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { services } from "../data/services";
import { services1 } from "../data/services1";

export default function Services() {
  return (
    <section className="p-10 text-center" id="services">
      <h2 className="text-4xl font-bold mb-6 text-blue-800">
        How We Can Help You
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {services.map(({ title, text }, index) => (
          <article
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-left"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600">{text}</p>
          </article>
        ))}
      </div>

      {/* Video Section */}
      <div className="my-8 flex justify-center">
        <iframe
          className="w-full md:mx-[104px] h-64 rounded-lg shadow-md"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Therapy Benefits Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Additional Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services1.map(({ title, text }, index) => (
          <article
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-left"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
