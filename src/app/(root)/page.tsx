"use client";
import React, { useEffect, useRef } from "react";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import Navbar from "../components/Navbar";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

const SocialMediaIcon = ({ Icon, href }: any) => (
  <a href={href} target="_blank">
    <Icon className="w-7 h-7 text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
  </a>
);

const Home = () => {
  return (
    <div className="overflow-x-hidden ">
      {/* loading page */}
      <div className="bg-gradient-to-b from-[#6cc3e1] via-[#346aad]  to-black overflow-hidden relative">
        <img
          src="https://img.freepik.com/free-photo/aesthetic-minimal-white-grid-pattern-wallpaper_53876-96916.jpg?w=2000&t=st=1720271713~exp=1720272313~hmac=4bf0c737de802436d6775db246fd322cc7c497c72c9ea2edee3a1a8cb6b994ba"
          alt=""
          className="absolute w-full h-full object-cover mix-blend-overlay opacity-5  blur-sm"
        />
        <div className="w-full h-full bg-transparent z-40 absolute">
        </div>
        <div className=" pt-10">
          <Navbar />
        </div>
        <div
          className="relative flex flex-col min-h-fit
            md:px-12 xl:px-20  "
        >
          <div className="flex items-center gap-4 flex-col justify-between min-h-[60rem]">
            <div className="lg:text-[21rem] md:text-[16rem] sm:text-[10rem] text-[5rem] sm:block cursor:pointer flex flex-nowrap  relative font-bold tracking-tighter">
              GENESIS <span className="text-[50px] ml-8  absolute left-[1340px] top-[310px] hidden lg:block cursor:pointer tracking-normal">4.0</span>
            </div>
            <div className=" lg:flex flex-col items-end gap-4 z-50">
              <div className="flex gap-6">
                <SocialMediaIcon
                  href="https://www.instagram.com/hackbyte.tpc/"
                  Icon={InstagramLogoIcon}
                />
                <SocialMediaIcon
                  href="https://twitter.com/HackbyteTPC"
                  Icon={TwitterLogoIcon}
                />
                <SocialMediaIcon
                  href="https://www.linkedin.com/company/bitbyte-tpc/"
                  Icon={LinkedInLogoIcon}
                />
                <SocialMediaIcon
                  href="https://discord.gg/NTueHjdPn8"
                  Icon={DiscordLogoIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REST */}
        
    </div>
  );
};

export default Home;
