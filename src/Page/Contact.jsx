import React, { useState } from "react";
import { Link } from "react-router-dom";



const Contact = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const markets = [
    {
      title: "Kripton Star Farmers Market",
      time: "Saturdays (8am – 2pm), Alameda, CA",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      linkText: "more info",
      
    },
    {
      title: "Jack London Farmers Market",
      time: "Tuesdays (10am – 2pm), Oakland, CA",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      linkText: "more info",

    },
    {
      title: "Ferry Plaza Farmers Market",
      time: "Thursdays (10am – 2pm), SF, CA",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      linkText: "more info",

    },
  ];
  return (
    <>
      <div className="relative w-full h-[50vh] bg-[url('/aboutimage2.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute top-1/2 left-6 sm:left-12 md:left-24 transform -translate-y-1/2 z-20">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl leading-snug">Contact Us</h1>
        </div>
      </div>

      {/* get in touch.... */}
      <div className="bg-white px-6 py-16 min-h-screen">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side: Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-normal">Get In Touch</h2>
          </div>

          {/* Right side: Form (2/3 width) */}
          <form className="md:col-span-2 space-y-4">
            {/* First Row: First and Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded"
              />
            </div>

            {/* Second Row: Email and Interest */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-4 bg-gray-100  border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="I am Interested In"
                className="w-full px-4 py-4 bg-gray-100  border-gray-300 rounded"
              />
            </div>

            {/* Message Textarea */}
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 bg-gray-100  border-gray-300 rounded"
            ></textarea>

            {/* Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-[#02D002] text-white font-semibold px-6 py-3 rounded"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* map... */}
      <div className="max-w-5xl mx-auto my-12 shadow-2xl rounded-xl ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1513954.2012039889!2d102.5319461378047!3d2.073012098516854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d225303e8ed%3A0x477a0331a2a2047a!2sEastpoint%20Mall!5e0!3m2!1sen!2sin!4v1750380483140!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px] border-0"
        ></iframe>
      </div>
      {/* market info..... */}
      <div className="bg-gray-50 py-16 px-4 my-30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-900">{market.title}</h3>
              <p className="text-lg text-gray-700 mt-1">{market.time}</p>
              <p className="text-gray-600 mt-4">{market.desc}</p>
             
              <Link
              to="/contact"
              onClick={scrollToTop}
              className="mt-4 text-[#02D002] font-bold hover:underline"
            >
              {market.linkText}
            </Link>
            </div>
          ))}
        </div>
      </div>
      {/* form... */}
      <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-52 lg:py-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-600 mb-4">Joint Our NEWS letter</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
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

export default Contact