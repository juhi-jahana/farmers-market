import React from 'react';

const sponsorImages = [
  '/sponsor1.png',
  '/sponsor2.png',
  '/sponsor3.png',
  '/sponsor4.png',
  '/sponsor5.png',
  '/sponsor6.png',
  '/sponsor7.png',
  '/sponsor8.png',
];

const Sponsors = () => {
  return (
    <section className=" bg-white text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">
        A Special Thanks to Our Sponsors
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {sponsorImages.map((src, index) => (
          <div key={index} className="bg-white  p-10 ">
            <img
              src={src}
              alt={`Sponsor ${index + 1}`}
              className="w-full h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
