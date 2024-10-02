"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Tilt } from "react-tilt";

export default function TitleSponsorCard({name, url, logo, type, description}) {
  const [isHovered, setIsHovered] = useState(false);
  const defaultOptions = {
    reverse: false,
    max: 4,
    perspective: 1000,
    scale: 1.02,
    speed: 200,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="w-full xl:max-w-[95%] 2xl:max-w-[90%] flex justify-center"
    >
      <Tilt options={defaultOptions}>
        <div
          className="flex flex-col md:flex-row shadow rounded-[8px] border md:h-[15rem]"
          style={{
            background:
              "radial-gradient(116.96% 115.94% at 9.81% 9.24%, #1381cf 0%, rgba(56, 50, 0, 0.17) 100%)",
          }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <Image
            className="w-full md:w-[300px] lg:w-[350px] xl:w-[450px] rounded-t-[8px]
              md:rounded-r-none md:rounded-l-[8px] object-contain"
            src={logo}
            alt={name}
            placeholder="blur"
          />
          <div
            className="flex flex-col justify-center items-start px-4
              xl:px-8 py-8 md:py-4 gap-2 rounded-b-[8px] md:rounded-l-none
              md:rounded-r-[8px]"
          >
            <div className="w-full flex justify-between items-center">
              <p className="font-medium text-[2rem] xl:text-[2.25rem]">
                {name}
              </p>
              <div className="hover:bg-[#1B1B1B00] mt-1 p-1">
                <ArrowRightIcon
                  className={`w-6 h-6 lg:w-8 lg:h-8 p-[2px] transition-transform 
                    duration-300 ease-in-out ${isHovered ? "-rotate-45 text-white" : "text-[#EAECF0]"}`}
                />
              </div>
            </div>
            <p className="font-medium text-[1.25rem] text-white md:text-[1.5rem] ">
              {type}
            </p>
            <p className="text-[#EAECF0] font-normal text-[1rem] md:text[1.125rem]">
              {description}
            </p>
          </div>
        </div>
      </Tilt>
    </a>
  );
}
