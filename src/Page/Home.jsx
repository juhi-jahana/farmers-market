import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../Components/Gallery';
import Sponsors from '../Components/Sponsors';

const Home = () => {
  return (
    <>
      <div className="relative min-h-[100vh] bg-[url('/heroimage.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div className="absolute z-10 top-[30%] left-[10%] md:left-[15%] lg:left-[17%] w-[70%] max-w-2xl space-y-10">
          <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-normal">
            Farmers Market
          </h1>

          <p className="text-white text-base md:text-lg lg:text-xl ">
            Mauris porta nulla vitae aliquam luctus. Vestibulum non tempus libero. Sed ultricies diam ligula, vitae vestibulum lectus aliquam ut.
            Quisque ut justo a arcu luctus hendrerit nec at nisi. Nullam pulvinar rutrum faucibus.
          </p>

         
<div className="flex gap-4">
  <button
    onClick={() => (window.location.href = '/')}
    className="bg-[#02D002] text-white font-bold px-8 py-3 cursor-pointer inline-block"
  >
    Get Involved
  </button>

  <button
    onClick={() => (window.location.href = '/')}
    className="bg-white text-black px-8 py-3 cursor-pointer inline-block"
  >
    Donate
  </button>
</div>

        </div>
      </div>


      {/* market info.... */}
<section className="px-6 md:px-12 lg:px-32 py-16 md:py-24 lg:py-32 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

    {/* Left Column */}
    <div className="w-full md:w-3/4">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 text-center md:text-left">
        Market Info
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed tracking-wide">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>

    {/* Right Column */}
    <div className="text-gray-600 w-full md:w-1/4 pt-8 md:pt-[5%]">
      <h3 className="font-semibold text-xl mb-2">Kripton Farmers Market</h3>
      <p className="mb-1">Every Saturday</p>
      <p className="mb-1">8am – 2pm</p>
      <p className="mb-4">Alameda, CA</p>

      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-green-500 font-medium hover:underline"
      >
        More Info
      </Link>
    </div>
  </div>
</section>

<div><Gallery/></div>

<div><Sponsors/></div>
{/* <div><Footer/></div> */}




    </>
  );
};

export default Home;
