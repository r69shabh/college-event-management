"use client";

import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import '../../styles/globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;