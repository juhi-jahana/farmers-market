import React from 'react';
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = () => {
  return (
    <div className="p-5 m-0 w-full ">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-1 md:grid-cols-2 gap-5  w-full    "
      >
        {/* Veg1 - Left Full Height */}
        <a
          href="/veg1.jpg"
          className="w-full h-full md:row-span-2 relative group overflow-hidden"
        >
          <img
            src="/veg1.jpg"
            alt="Veg 1"
            className="w-full h-full object-cover transition duration-300 group-hover:brightness-75"
          />
        </a>

        {/* Veg2 - Top Right */}
        <a
          href="/veg2.jpg"
          className="w-full h-full relative group overflow-hidden"
        >
          <img
            src="/veg2.jpg"
            alt="Veg 2"
            className="w-full h-full object-cover transition duration-300 group-hover:brightness-75"
          />
        </a>

        {/* Veg3 & Veg4 - Bottom Right (Side by Side) */}
        <div className="flex w-full h-full gap-5">
          <a
            href="/veg3.jpg"
            className="w-1/2 h-full relative group "
          >
            <img
              src="/veg3.jpg"
              alt="Veg 3"
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-75"
            />
          </a>
          <a
            href="/veg4.jpg"
            className="w-1/2 h-full relative group "
          >
            <img
              src="/veg4.jpg"
              alt="Veg 4"
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-75"
            />
          </a>
        </div>
      </LightGallery>
    </div>
  );
};

export default Gallery;
