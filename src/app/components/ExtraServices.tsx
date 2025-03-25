interface serviceCard {
  services1: { title: string; text: string }[];
}

export default function ExtraServices({ services1 }: serviceCard) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      aria-labelledby="additional-services"
    >
      {services1.map(({ title, text }, index) => (
        <article
          key={index}
          className="bg-white shadow-md rounded-2xl p-6 text-left"
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-[16px]">{text}</p>
        </article>
      ))}
    </div>
  );
}
