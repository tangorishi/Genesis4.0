// layout.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
