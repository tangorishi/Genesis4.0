import { Metadata } from "next";
import React, { ReactNode, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/ui/Cursor";


export const metadata: Metadata = {
    title: "Genesis",
    description: "",
    icons: {
      // icon:"/icons/logo.svg"
    }
  };
  

const RootLayout=({children}:{children:ReactNode})=>{
    return(
        <main >
            <CustomCursor/>
            <div>
            {children}
            </div>
        </main>
    )
}

export default RootLayout;