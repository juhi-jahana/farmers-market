import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 bg-white">
        <div className="pb-24">
        <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mainlayout;

