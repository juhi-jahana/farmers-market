import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import './Mainlayout.css'; 

export const Mainlayout = () => {
  
  return (
    <React.Fragment>
      <Header />
      
      <main className="pt-24 min-h-[100vh] bg-white">
        <Outlet />
      </main>
      
      <Footer />
    </React.Fragment>
  );
};
