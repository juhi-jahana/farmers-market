import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import Gallery from '../Components/Gallery'
import Sponsors from '../Components/Sponsors';
import CounterSection from "../Components/Counter";



import TestimonialSlider from '../Components/Slide'
import { motion } from 'framer-motion';

const Landing = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const events = [
        {
            id: 1,
            image: "/event1.jpg",
            date: "01 SEP 2017",
            title: "Annual Pumpkin Patch",
            description: "Maecenas lectus purus, pulvinar sed rutrum id, laoreet cursus nibh. Duis eu purus at convallis vehicula..",
        },
        {
            id: 2,
            image: "/event2.jpg",
            date: "06 SEP 2017",
            title: "Organic Cooking Class",
            description: "Maecenas lectus purus, pulvinar sed rutrum id, laoreet cursus nibh. Duis eu purus at convallis vehicula..",
        },]

    const Posts = [
        {
            id: 1,
            title: "Hello world!",
            author: "James",
            date: "Apr 20, 2020",
            category: "Uncategorized",
            content:
                "Welcome to Demo Websites. This is your first post. Edit or delete it, then start writing!",
        },
        {
            id: 2,
            title: "Another Post with Everything In It",
            author: "James",
            date: "Apr 20, 2019",
            category: "Uncategorized",
            content:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur quam augue, vehicula quis, tincidunt vel, varius vitae, nulla. Sed convallis orci. Duis libero orci, pretium a, convallis quis, pellentesque a, dolor. Curabitur vitae nisi non dolor vestibulum...",
        },
        {
            id: 3,
            title: "An Ordered List Post",
            author: "James",
            date: "Apr 20, 2016",
            category: "Uncategorized",
            content:
                " Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisque metus enim, venenatis fermentum, mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum libero id justo. Fusce in est. Sed nec diam. Pellentesque habitant morbi tristique senectus...",
        },]
    const [expandedCards, setExpandedCards] = useState({});

    const toggleCard = (id) => {
        setExpandedCards((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    return (
        <>
            <div className="relative min-h-screen  px-6 py-12 bg-[url('/heroimage.jpg')] bg-cover bg-center bg-no-repeat">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Text Content */}
                <div className="absolute z-10 top-[30%] left-[10%] md:left-[15%] lg:left-[17%] w-[70%] max-w-2xl space-y-10">
                    <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-normal">
                        Bringing Local Farmers Right to your Table
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
            {/* our market... */}
            <div className="bg-[#F7F7F7] flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-32 px-8 py-14 md:px-16 md:py-20 lg:px-40 lg:py-28">
                <h1 className="text-3xl md:text-4xl font-medium text-gray-700 md:w-1/4">
                    Our Markets
                </h1>

                <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed md:w-3/4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    <br /><br />
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>
            {/* gallery....... */}
            <Gallery />
  <div className="bg-white">

      {/* === Section 1 === */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-6 md:py-32 lg:py-20 gap-10 z-0 relative">
        {/* Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src="/landing2.jpg"
            alt="Section 1"
            className="w-full h-full object-cover  shadow-md"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-semibold mb-4">Over 400 Local Merchants</h2>
          <p className="text-gray-600 mb-4 text-[16px] leading-relaxed">
            Nunc dictum pulvinar porta. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Curabitur tortor lorem, lacinia in nunc eget tristique volutpat urna.
          </p>
          <a href="#" className="text-green-600 font-bold hover:underline">
            Become a Merchant
          </a>
        </motion.div>
      </div>

      {/* === Section 2 with Overlap === */}
      <div className="flex flex-col md:flex-row-reverse items-center max-w-6xl mx-auto px-6   relative z-10 md:-mt-40 md:pl-20 ">

  {/* Image */}
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="w-full md:w-2/3"
  >
    <img
      src="/landing3.jpg"
      alt="Section 2"
      className="w-full h-[400px] md:h-[500px] object-cover"
    />
  </motion.div>

  {/* Wider Text Block */}
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="w-full md:w-[60%] bg-[#374059] text-white p-8 md:p-12  relative -mt-12 md:-mt-24"
  >
    <h2 className="text-4xl font-semibold mb-6">100% Organic</h2>
    <p className="mb-6 text-[17px] sm:text-[20px] leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum tincidunt
      orci, sed feugiat sapien placerat nec. Pellentesque habitant morbi tristique senectus et netus.
    </p>
    <a href="#" className="text-green-500 font-bold hover:underline text-lg">
      Learn More
    </a>
  </motion.div>
</div>
    </div>

            {/* counter... */}
            <CounterSection />
            {/* slide.... */}
            <TestimonialSlider />

            {/* speacial evemts...`` */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 ">
                <h1 className='text-4xl font-normal text-left'>Special Events</h1>
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 my-15">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="flex flex-col md:flex-row gap-6 p-6  bg-white"
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full md:w-60 h-80 object-cover "
                            />
                            <div className="flex-1 flex flex-col gap-4">
                                <p className="text-gray-500 font-medium mb-1">{event.date}</p>
                                <h3 className="text-xl md:text-2xl font-medium mb-3">{event.title}</h3>
                                <p className="text-gray-500 text-[18px] ">{event.description}</p>
                                <button
                                    onClick={scrollToTop}
                                    className="text-green-600 font-semibold hover:underline w-max"
                                >
                                    Registration Info
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* video.... */}
            <div className="w-full max-w-6xl mx-auto relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:brightness-90 aspect-video">
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/FkQuawiGWUw"
    title="YouTube video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


            <div className="bg-[#F7F7F7] flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-32 px-8 py-14 md:px-16 md:py-20 lg:px-40 lg:py-28">
                <h1 className="text-3xl md:text-4xl font-normal text-gray-700 md:w-2/4">
                    Latest from the Blog
                </h1>

                <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed md:w-3/4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    <br /><br />
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>

            {/* our latest blog... */}
            <div className="bg-[#F7F7F7] px-4 lg:px-40 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {Posts.map((post) => {
                        const isExpanded = expandedCards[post.id];
                        const isLong = post.content.length > 150;

                        const cardHeight = isExpanded
                            ? "h-auto"
                            : isLong
                                ? "h-[280px]"
                                : "h-[180px]";

                        return (
                            <div
                                key={post.id}
                                className={`relative bg-white border border-gray-400 shadow-md px-5 py-6 transition-all duration-300 overflow-hidden ${cardHeight}`}
                            >
                                <Link to={`/post/${post.id}`}>
                                    <h2 className="text-xl font-bold text-black hover:underline">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-sm font-medium text-gray-500 mt-1">
                                    by {post.author} | {post.date}
                                </p>
                                <p className="mt-3 text-[17px] text-gray-700">{post.content}</p>


                            </div>
                        );
                    })}
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
            <Sponsors />
        </>
    )
}

export default Landing