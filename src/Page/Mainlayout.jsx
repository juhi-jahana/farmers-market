
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Mainlayout = () => {
  return (
    <div className=" min-h-[100dvh] flex flex-col ">
      <Header />
      <main className="flex-grow ">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Mainlayout;
