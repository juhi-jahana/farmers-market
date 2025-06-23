import React from "react";
import Gallery from '../Components/Gallery';
import Sponsors from '../Components/Sponsors';

const Market = () => {
  return (
    < >

      <div>
        <div className="relative w-full h-[50dvh] bg-[url('/veg2.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Text Content */}
          <div className="absolute z-10 top-[30%] left-[10%] md:left-[15%] lg:left-[17%] w-[70%] max-w-2xl space-y-10">
            <h1 className="text-white text-4xl md:text-4xl lg:text-6xl font-normal">
              Farmers Market
            </h1>

            <p className="text-white text-xl md:text-lg lg:text-xl ">
              Mauris porta nulla vitae aliquam luctus. Vestibulum non tempus libero. Sed ultricies diam ligula, vitae vestibulum lectus aliquam ut.
              Quisque ut justo a arcu luctus hendrerit nec at nisi. Nullam pulvinar rutrum faucibus.
            </p>
          </div>
        </div>
        {/* our market.... */}
        <div className="bg-[#F7F7F7] flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-32 px-8 py-14 md:px-16 md:py-20 lg:px-48 lg:py-28">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-600 md:w-1/4">
            Market info
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
        {/* three coloumns... */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-32 px-8 py-14 md:px-16 md:py-20 lg:px-48 lg:py-28 bg-white">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left">
            {/* Column 1 */}
            <div>
              <h2 className="text-green-500 text-lg font-bold">Where</h2>
              <h3 className="font-semibold text-lg mt-2">3221 Divi St. Alameda, CA</h3>
              <p className="text-gray-500 mt-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h2 className="text-green-500 text-lg font-bold">When</h2>
              <h3 className="font-semibold text-lg mt-2">Tuesdays & Saturdays @ 6am – 4pm</h3>
              <p className="text-gray-500 mt-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <h2 className="text-green-500 text-lg font-bold">Who</h2>
              <h3 className="font-semibold text-lg mt-2">Over 150 Local Sellers</h3>
              <p className="text-gray-500 mt-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
        {/* orange div */}
        <div className="bg-[#e74c3c] px-8 my-14 md:px-32 md:py-16 lg:mx-40 lg:my-32 relative ">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">

            {/* Text Content */}
            <div className="text-white space-y-6 z-0">
              <h2 className="text-3xl md:text-4xl font-semibold">100% Organic</h2>
              <p className="text-lg leading-relaxed">
                Curabitur tortor lorem, lacinia in nunc eget, tristique volutpat urna.
                Pellentesque suscipit dolor metus, eu cursus sapien molestie non.
                Sed viverra mauris molestie purus hendrerit. Curabitur tortor lorem,
                lacinia in nunc eget, tristique volutpat urna.
              </p>
            </div>

            {/* Image Box */}
            <div className="relative z-10">
              <img
                src="/market1.jpg"
                alt="Organic Veggies"
                className="w-full max-w-[500px] mx-auto mb-[-20px] md:-mt-32 md:mb-[-80px] "
              />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 max-w-3xl mx-auto my-10 p-10 lg:p-0">
          {/* Orange Vertical Line */}
          <div className="w-6 bg-[#e74c3c] h-65 mt-3 lg:h-60 lg:mt-1  "></div>

          {/* Blockquote Text */}
          <blockquote className="italic text-gray-800 text-2xl lg:text-5xl font-normal leading-14">
            Nulla aliquet nisl a augue blandit suscipit. Aenean sed convallis nibh. Sed ut dui vitae lacus elementum cursus.
          </blockquote>
        </div>
        {/* map... */}
        <div className="max-w-5xl mx-auto my-12 shadow-2xl rounded-xl overflow-hidden">
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

        {/* supporting... */}

        <div className="max-w-3xl mx-auto px-5 py-15 lg:px-16 lg:py-20 text-left">
          <h2 className="text-4xl font-normal text-gray-800 mb-6">
            Supporting Local Farmers & Sustainable Agriculture since 1945
          </h2>

          <p className="text-lg text-gray-500 leading-relaxed mb-6 text-left">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
          </p>

          <p className="text-lg text-gray-500 leading-relaxed text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel augue blandit ante pharetra varius at tempus ligula. Mauris consectetur sollicitudin est, vitae varius libero. Aliquam vitae mattis justo, ut ultrices felis. Donec iaculis sem id justo viverra, quis auctor mi iaculis. Etiam venenatis gravida orci id elementum. Aliquam pharetra eros massa, id maximus ipsum laoreet vel.
            Maecenas at elementum nisl, eget aliquet justo. Vivamus ut pretium elit.
          </p>
        </div>
        <div className="lg:mt-20">
          <Gallery />
        </div>

        <div className="lg:mt-20">
          <Sponsors />
        </div>

        {/* form... */}
        <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-52 lg:py-40 lg:mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-600 mb-4">Join The NEWS Letter</h2>
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




      </div>
    </>
  );
};

export default Market;
