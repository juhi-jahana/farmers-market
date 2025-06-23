import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const newPosts = [
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
    },
    {
      id: 4,
      title: "A Simple Text Post",
      author: "James",
      date: "Apr 20, 2016",
      category: "Uncategorized",
      content:
        " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed eleifend urna eu sapien. Quisque posuere nunc eu massa. Praesent bibendum lorem non leo. Morbi volutpat, urna eu fermentum rutrum, ligula lacus interdum mauris, ac pulvinar libero pede a enim. Etiam commodo...",
    },
    {
      id: 5,
      title: "Hello world!",
      author: "James",
      date: "Apr 20, 2020",
      category: "Uncategorized",
      content:
        "Welcome to Demo Websites. This is your first post. Edit or delete it, then start writing!",
    },
    {
      id: 6,
      title: "An Ordered List Post",
      author: "James",
      date: "Apr 20, 2012",
      category: "Uncategorized",
      content:
        " Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisque metus enim, venenatis fermentum, mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum libero id justo. Fusce in est. Sed nec diam. Pellentesque habitant morbi tristique senectus...",
    },
    {
      id: 7,
      title: "A Post With a Left-Aligned Image",
      author: "James",
      date: "Apr 20, 2009",
      category: "Uncategorized",
      content:
        " Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisque metus enim, venenatis fermentum, mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum libero id justo. Fusce in est. Sed nec diam. Pellentesque habitant morbi tristique senectus...",
    },
    {
      id: 8,
      title: "Quotes Time!",
      author: "James",
      date: "Apr 20, 2010",
      category: "Uncategorized",
      content:
        " Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisque metus enim, venenatis fermentum, mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum libero id justo. Fusce in est. Sed nec diam. Pellentesque habitant morbi tristique senectus...",
    },
    {
      id: 9,
      title: "Hello world!",
      author: "James",
      date: "Apr 20, 2020",
      category: "Uncategorized",
      content:
        "Welcome to Demo Websites. This is your first post. Edit or delete it, then start writing!",
    },

  ];
  const oldPosts = [
    {
      id: 10,
      title: "Old Post 1",
      author: "James",
      date: "Sep 17, 2008",
      content:
        "Nulla sagittis convallis arcu. Curabitur consequat. Quisque metus enim.",
    },
    {
      id: 11,
      title: "Old Post 2",
      author: "James",
      date: "Aug 14, 2008",
      content: "Vestibulum in mauris semper tortor interdum ultrices.",
    },
  ];
  const toggleCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const [showOld, setShowOld] = useState(false);

  const postsToShow = showOld ? oldPosts : newPosts;
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Section */}
      <div className="relative w-full h-[50vh] bg-[url('/donate1.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute top-1/2 left-6 sm:left-12 md:left-64 transform -translate-y-1/2 z-20">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl leading-snug">Our Blog</h1>
        </div>
      </div>

      {/* entries... */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-2  lg:px-40 lg:py-32 bg-[#F7F7F7]">
          {postsToShow.map((post) => {
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
                className={`border px-5 py-5 lg:px-4 lg:py-6 border-gray-400 bg-white shadow-md relative  transition-all duration-300 ${cardHeight}`}
              >
                <Link to={`/post/${post.id}`}>
                  <h2 className="text-xl font-normal text-black">{post.title}</h2>
                </Link>
                <p className="text-sm font-medium text-gray-500">
                  by {post.author} | {post.date}
                </p>
                <p className="mt-2 text-[17px] text-gray-600">{post.content}</p>

                {isLong && (
                  <button
                    onClick={() => toggleCard(post.id)}
                    className="absolute bottom-2 right-4 text-blue-600 text-sm"
                  >
                  </button>
                )}
              </div>
            );
          })}
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowOld(!showOld)}
              className="bg-text text-[#02D002] px-6 py-2 rounded"
            >
              {showOld ? "← New Entries" : "Old Entries →"}
            </button>
          </div>
        </div>
      </div>
      {/* form... */}
      <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-52 lg:py-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-normal text-gray-600 mb-4">
              Join Our NEWSletter</h2>
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

export default Blog