// src/Page/Mainlayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header'; // update the path if needed
import Footer from '../Components/Footer';

const Mainlayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Mainlayout;
