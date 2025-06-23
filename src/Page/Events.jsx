import React from "react";
import Sponsors from "../Components/Sponsors";

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
  },
  {
    id: 3,
    image: "/event3.jpg",
    date: "12 SEP 2017",
    title: "Local Farmers Meetup",
    description: "Maecenas lectus purus, pulvinar sed rutrum id, laoreet cursus nibh. Duis eu purus at convallis vehicula..",
  },
  {
    id: 4,
    image: "/event4.jpg",
    date: "18 SEP 2017",
    title: "Potato Cook-Off",
    description: "Maecenas lectus purus, pulvinar sed rutrum id, laoreet cursus nibh. Duis eu purus at convallis vehicula..",
  },
  {
    id: 5,
    image: "/event5.jpg",
    date: "24 SEP 2017",
    title: "Farm Fresh Expo",
    description: "Maecenas lectus purus, pulvinar sed rutrum id, laoreet cursus nibh. Duis eu purus at convallis vehicula..",
  },
  {
    id: 6,
    image: "/event6.jpg",
    date: "30 SEP 2017",
    title: "Harvest Celebration",
    description: "Maecenas lectus purus, pulvinar sed rutrum id, laoreet cursus nibh. Duis eu purus at convallis vehicula..",
  },
];

const EventList = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Banner Section */}
      <div className="relative w-full h-[50vh] bg-[url('/aboutimage2.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute top-1/2 left-6 sm:left-12 md:left-24 transform -translate-y-1/2 z-20">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl leading-snug">Upcoming Events</h1>
        </div>
      </div>

      {/* Event Cards Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
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
      
      {/* form... */}
      <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-52 lg:py-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-600 mb-4">
Get Event Notifications</h2>
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
      {/* sponsors..... */}
      <div className="my-20">
      <Sponsors/>
      </div>
    </>
  );
};

export default EventList;
