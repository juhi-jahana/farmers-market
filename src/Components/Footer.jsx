import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="relative bg-[url('/footer_image.jpg')] bg-cover bg-center bg-no-repeat min-h-[600px] md:min-h-[700px]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 flex flex-col justify-center items-start px-6 md:px-24 h-full py-16">
          <h1 className="text-white text-4xl md:text-6xl font-normal pb-6 leading-snug">
            Become a Merchant <br /> or Donate Today!
          </h1>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/"
              className="bg-[#02D002] text-white font-bold px-6 py-3"
            >
              Get Involved
            </Link>
            <Link
              to="/"
              className="bg-white text-black font-semibold px-6 py-3"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1A1A] text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Powered by Digital Lime Green</p>
          <div className="flex space-x-6 text-xl">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaXTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaRss /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
