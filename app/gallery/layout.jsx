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
      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
          px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
              text-white font-normal md:leading-[8rem] lg:leading-[10rem] 
              tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <FooterAnimation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
