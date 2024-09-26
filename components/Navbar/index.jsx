"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import classes from "./index.module.css";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import GenesisLogo from "../../public/genesislogo.png";
import GenesisLogoBlank from "../../public/genesislogo_blank.png";
import Image from "next/image";

const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Partners", href: "/partners" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
];

const NavItem = ({ label, href }) => {
    const pathname = usePathname();

    return (
        <div
            className={`group relative text-white font-[500] px-6 py-2 
      rounded-full transition-all ease-in-out focus-visible:outline-2 ${
                pathname === href ? "bg-[#404041]" : "hover:bg-[#FFFFFF10]"
            }`}
        >
            <AnimatePresence initial={false} mode="wait">
                {pathname === href && (
                    <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-[#404041]  mix-blend-difference"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        key={label}
                    />
                )}
            </AnimatePresence>
            <Link href={href}>
                <p className="text-lg md:text-base lg:text-lg text-center">{label}</p>
            </Link>
            <div className="mx-2"></div>
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
            <nav className="absolute sm:z-[2] w-full flex items-center xl:justify-between px-4 pt-8">
                <div>
                    <Image src={GenesisLogo} alt={"Genesis Logo"} className="w-40" />
                </div>
                <div
                    className="hidden h-10 xl:flex xl:justify-center xl:items-center
            px-3 py-8 rounded-full border-2 border-solid border-gray-800
            bg-opacity-60 backdrop-blur-xl space-x-2"
                >
                    {navigationItems.map(({ label, href }) => (
                        <NavItem key={label} label={label} href={href} />
                    ))}
                </div>
                <div>
                    <Image src={GenesisLogoBlank} alt={"Genesis Logo"} className="w-40"/>
                </div>
                <div className="flex items-center justify-end w-full xl:hidden">
                    <button
                      id="menu-btn"
                        aria-label="Toggle Menu"
                        type="button"
                        className={`z-40 hamburger xl:hidden focus:outline-none ${
                            isMenuOpen ? classes.open : ""
                        } ${classes.hamburger}`}
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    >
                        <span className={classes.hamburgerTop}></span>
                        <span className={classes.hamburgerMiddle}></span>
                        <span className={classes.hamburgerBottom}></span>
                    </button>
                </div>
            </nav>

            <div
                id="menu"
                className={`absolute z-[1] top-0 bottom-0 left-0 ${
                    isMenuOpen ? "block" : "hidden"
                } w-full min-h-screen py-1 pt-40 px-8 backdrop-blur-lg`}
            >
                <div
                    className="flex flex-col self-end space-y-8 text-lg text-[#9d9d9d]
            font-medium uppercase p-8 border-1 border-[#222] rounded-[2rem]
            bg-[#090909] bg-opacity-80"
                >
                    {navigationItems.map(({ label, href }) => (
                        <Link
                            href={href}
                            key={label}
                            className="hover:text-[#F5F5F5]"
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
