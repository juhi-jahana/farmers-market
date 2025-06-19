import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-[env(safe-area-inset-bottom)] bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Mainlayout;
