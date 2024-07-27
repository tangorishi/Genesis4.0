"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import classes from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Partners", href: "/partners" },
  { label: "Prizes", href: "/prizes" },
  { label: "Schedule", href: "/schedule" },
  { label: "Humans", href: "/humans" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const NavItem = ({ label, href }) => {
  const pathname = usePathname();
  return (
    <div
      className={`group relative text-white font-[500] px-6 py-2 rounded-full transition-all ease-in-out focus-visible:outline-2 hover:bg-black`}
    >
      <AnimatePresence initial={false} mode="wait">
        {pathname === href && (
          <motion.span
            layoutId="bubble"
            className="absolute inset-0 z-10 bg-[#FFFFFF1A] mix-blend-difference"
            style={{ borderRadius: 9999 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            key={label}
          />
        )}
      </AnimatePresence>
      <Link href={href}>
        <p className="text-lg md:text-base lg:text-lg text-center group-hover:text-white">{label}</p>
      </Link>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="absolute z-[2] w-full flex items-center justify-between px-4 pt-8">
        <Image src="/Navbar/genesis.png" alt="Genesis Logo" width={80} height={20} className="h-auto w-auto mb-5 md:mb-0 ml-8" />
        <nav className="hidden xl:flex items-center h-10 justify-center px-3 py-8 rounded-full border-2 border-solid border-white bg-opacity-60 backdrop-blur-xl space-x-2">
          {navigationItems.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </nav>
        <Image src="/Navbar/muj.png" alt="MUJ Logo" width={100} height={50} className="h-auto w-auto mb-5 md:mb-0 ml-8" />
        <div className="flex items-center justify-end xl:hidden">
          <button
            id="menu-btn"
            aria-label="Toggle Menu"
            type="button"
            className={`z-40 hamburger focus:outline-none ${isMenuOpen ? classes.open : ""} ${classes.hamburger}`}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span className={classes.hamburgerTop}></span>
            <span className={classes.hamburgerMiddle}></span>
            <span className={classes.hamburgerBottom}></span>
          </button>
        </div>
      </div>
      <div
        id="menu"
        className={`absolute z-[1] top-0 bottom-0 left-0 ${isMenuOpen ? "block" : "hidden"} w-full min-h-screen py-1 pt-40 px-8 backdrop-blur-lg`}
      >
        <div className="flex flex-col self-end space-y-8 text-lg text-[#9d9d9d] font-medium uppercase p-8 border-1 border-[#222] rounded-[2rem] bg-[#090909] bg-opacity-80">
          {navigationItems.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="hover:text-[#F5F5F5] hover:bg-black hover:rounded-full px-6 py-2 transition-all ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}