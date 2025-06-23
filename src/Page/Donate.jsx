import React, { useState } from "react";
import Gallery from "../Components/Gallery";
import Sponsors from "../Components/Sponsors";

const Donate = () => {
   const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation Submitted:", form);
    // Add your submit logic here (e.g., API call)
  };
  return (
    <>
    
       <div className="relative h-[50vh]  w-full px-6 py-12 bg-[url('/landing1.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div className="absolute z-10 top-[13%] left-[10%] md:left-[15%] lg:left-[17%] w-[70%]  max-w-2xl space-y-10">
       <h1 className="text-white text-6xl sm:text-3xl md:text-4xl lg:text-6xl font-normal ">

          Help Us Grow
          </h1>
 <div className="flex flex-col md:flex-row gap-4 ">
            <button
              onClick={() => (window.location.href = '/')}
              className="bg-[#02D002] text-white font-bold lg:px-8 mr-5 lg:mr-0 lg:py-3  py-3  cursor-pointer inline-block"
            >
              Make A Donation
            </button>

            <button
              onClick={() => (window.location.href = '/')}
              className="bg-white text-black lg:px-8 mr-5 lg:mr-0 lg:py-3 font-medium  py-3 cursor-pointer inline-block"
            >
              Become a Volunteer
            </button>
          </div>

        </div>
      </div>
    <div className='max-w-2xl mx-auto my-20  lg:my-10 space-y-10 p-7  '>
      <h1 className='text-4xl font-normal max-w-xl leading-relaxed'>Support Your Local Farmers & Sustainable Agriculture</h1>
      <p className='text-[17px] text-gray-500 leading-relaxed'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
   <p  className='text-[17px] text-gray-500 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel augue blandit ante pharetra varius at tempus ligula. Mauris consectetur sollicitudin est, vitae varius libero. Aliquam vitae mattis justo, ut ultrices felis. Donec iaculis sem id justo viverra, quis auctor mi iaculis. Etiam venenatis gravida orci id elementum. Aliquam pharetra eros massa, id maximus ipsum laoreet vel. Maecenas at elementum nisl, eget aliquet justo. Vivamus ut pretium elit.</p>
    </div>
     <div className="relative w-full min-h-[600px] md:h-[500px]">
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="w-full max-w-[300px] md:max-w-[760px] ">
           <div className="flex items-start gap-4 max-w-3xl mx-auto my-10 p-10 lg:p-0">
          {/* Orange Vertical Line */}
          <div className="w-6 bg-[#02D002] h-85 mt-3 lg:h-60 lg:mt-1  "></div>

          {/* Blockquote Text */}
          <blockquote className="italic text-gray-800 text-2xl lg:text-5xl font-normal leading-14 bg-white">
            Nulla aliquet nisl a augue blandit suscipit. Aenean sed convallis nibh. Sed ut dui vitae lacus elementum cursus.
          </blockquote>
        </div>
          </div>
        </div>

        {/* Background Divs */}
        <div className="flex flex-row w-full h-full">
          {/* Left: White Div */}
          <div className="w-full md:w-1/2 bg-white h-[550px] md:h-full"></div>

          {/* Right: Image with White Overlay */}
          <div className="w-full md:w-1/2 relative h-[550px] md:h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('aboutimage1.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-white opacity-70"></div>
          </div>
        </div>
      </div>
      {/* form... */}
       <div className="min-h-screen flex items-center justify-center leading-7 px-4 py-10 bg-white text-gray-800">
      <div className="max-w-2xl  w-full text-left">
        <h2 className="text-3xl md:text-4xl font-normal mb-4 text-gray-800">
          Make a Donation to Support Your Local Farmers & Sustainable Agriculture
        </h2>
        <p className="text-gray-600 mb-10">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula eu urna sed euismod. Aenean tortor magna, facilisis ut sapien id, eleifend faucibus augue. Nulla aliquet nisl a augue blandit suscipit. Aenean sed convallis nibh. Sed ut dui vitae lacus elementum cursus. Phasellus non urna vel nunc iaculis porttitor.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="company"
              placeholder="Company Name (Optional)"
              value={form.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded"
            />
            <select
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded text-gray-600"
            >
              <option value="">Select Donation Amount</option>
              <option value="10">$10</option>
              <option value="25">$25</option>
              <option value="50">$50</option>
              <option value="100">$100</option>
            </select>
          </div>

          <div className="text-right mt-6">
            <button
              type="submit"
              className="bg-[#02D002]  text-white font-semibold px-6 py-3 rounded "
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* Volunteer.... */}
     <div className="bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-normal leading-tight text-gray-800">
            Merchant & <br /> Volunteer Info
          </h2>
        </div>

        {/* Column 2: First paragraph */}
        <div className="text-gray-500 leading-relaxed text-[15px] sm:text-[18px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dol. Voluptatibus corrupti voluptatum, dicta, fuga, quo illum corporis doloribus quod error cupiditate molestiae labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia nisi nostrum asperiores quod beatae, maiores, neque, tempore hic voluptates suscipit. Fugit quia voluptatem similique! Ut debitis voluptatum quibusdam rerum!
          </p>
        </div>

        {/* Column 3: Second paragraph */}
        <div className="text-gray-500 leading-relaxed text-[15px] sm:text-[18px]">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            electus reiciendis accusantium sapiente. Molestias reprehenderit inventore dolorem magni natus excepturi quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus optio, unde velit deserunt tenetur sint expedita, dolorum saepe voluptates, hic deleniti est voluptatibus quod eos nemo necessitatibus blanditiis? Sint.
          </p>
        </div>
      </div>
    </div>
    <Gallery/>
    <Sponsors/>
    </>
  )
}

export default Donate