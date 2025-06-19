import React, { useState } from "react";
import { Link } from 'react-router-dom';

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      title: "Organic Produce",
      description:
        "Rror sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      linkText: "Become a Seller",
      img: "/aboutimage5.jpg", // adjust path
    },
    {
      title: "Healthy Cooking",
      description:
        "Rror sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      linkText: "Take a Class",
      img: "/aboutimage6.jpg",
    },
    {
      title: "Home Farming",
      description:
        "Rror sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      linkText: "Visit a Farm",
      img: "/aboutimage7.jpg",
    },
  ];
  return (
    <>
      <div className="relative min-h-[500px] md:min-h-[300px] bg-[url('/aboutimage1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-[40%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 px-4 md:px-8">
          <h1 className="text-white text-3xl md:text-5xl  mb-6 leading-snug">About Us</h1>
        </div>
      </div>

      {/* How We Got Started...... */}

      <div className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 md:px-10 lg:px-24 lg:py-32 max-w-7xl mx-auto">
        {/* Image */}
        <img
          src="aboutimage2.jpg"
          alt="about2"
          className="w-full md:w-1/2 h-auto object-cover "
        />
        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
          <p className="text-black text-3xl font-semibold">How We Got Started</p>
          <p className="text-gray-600 leading-relaxed">
            Nunc dictum pulvinar porta. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Curabitur tortor lorem, lacinia in nunc eget, tristique volutpat urna.
            Pellentesque suscipit dolor metus, eu cursus sapien molestie non.
            Sed viverra mauris molestie purus hendrerit, vel laoreet ipsum viverra.
            Nullam sagittis ex nisi, iaculis dignissim odio tincidunt sed.
          </p>
        </div>
      </div>

      {/* our mission... */}
      <div className="bg-[#F7F7F7] flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-32 px-8 py-14 md:px-16 md:py-20 lg:px-40 lg:py-28">
        <h1 className="text-3xl md:text-4xl font-medium text-gray-800 md:w-1/4">
          Our Mission
        </h1>

        <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed md:w-3/4">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br /><br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </div>


      {/* Centered YouTube Video */}

      <div className="relative w-full h-[600px]">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-[300px] md:w-[760px] aspect-video">
            <iframe
              className="w-full h-full  shadow-lg"
              src="https://www.youtube.com/embed/FkQuawiGWUw"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Two Side-by-Side Divs */}
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Left: White Empty Div */}
          <div className="w-full md:w-1/2 bg-white"></div>

          {/* Right: Image with White Overlay */}
          <div className="w-full md:w-1/2 relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('aboutimage3.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-white opacity-70"></div>
          </div>
        </div>
      </div>

      {/* our programs... */}
      <div className=" flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-32 px-8 py-14 md:px-16 md:py-20 lg:px-40 lg:py-28">
        <h1 className="text-3xl md:text-4xl font-normal text-gray-800 md:w-1/4">
          Our Programs
        </h1>

        <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed md:w-3/4">

          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
      {/* three image... */}
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-10">

        {features.map((feature, index) => (
          <div key={index} className="flex flex-col">
            <img src={feature.img} alt={feature.title} className="w-full h-96  object-cover " />
            <h2 className="mt-6 text-xl font-semibold text-gray-800">{feature.title}</h2>
            <p className="mt-2 text-gray-600 text-lg">{feature.description}</p>
            <Link
              to="/about"
              onClick={scrollToTop}
              className="mt-4 text-green-600 font-bold hover:underline"
            >
              {feature.linkText}
            </Link>
          </div>
        ))}
      </div>

 {/* form... */}
    <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-52 lg:py-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-600 mb-4">Stay in Touch</h2>
          <p className="text-gray-600 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border-none bg-white  rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border-none bg-white  focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-[#02D002] text-white font-semibold py-3 rounded hover:bg-[#00b800] transition"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  






    </>
  )
}

export default About