import React, { Children } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div><Outlet/></div>
        <Footer />
    </div>
  );
};

export default RootLayout;