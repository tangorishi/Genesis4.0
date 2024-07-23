"use client";

import Image from "next/image";

import React, { useRef, useEffect } from "react";

import img1 from "@/public/galleryPage/1.jpeg";
import img2 from "@/public/galleryPage/2.jpg";
import img3 from "@/public/galleryPage/3.jpeg";
import img4 from "@/public/galleryPage/4.jpeg";

import img6 from "@/public/galleryPage/img6.webp";

const GridImage = () => {
  return (
    // <div className="max-w-8xl mx-auto py-16">
    //   <div className="flex flex-col gap-5 md:flex-row">
    //     <div className="flex flex-col gap-5">
    //       <div>
    //
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full my-8 flex flex-col gap-y-10">
      <div className="flex flex-row justify-center gap-x-8">
        <Image
          src={img6}
          alt="1"
          className="xl:w-[420px] xl:h-[380px] lg:w-[320px] h-[250px] rounded-3xl object-cover"
          placeholder="blur"
          priority
        />
        <Image
          src={img6}
          alt="1"
          className="xl:w-[420px] xl:h-[380px] lg:w-[320px] w-[280px] h-[250px] rounded-3xl object-cover"
          placeholder="blur"
          priority
        />
        <Image
          src={img6}
          alt="1"
          className="xl:w-[420px] xl:h-[380px] lg:w-[320px] w-[280px] h-[250px] rounded-3xl object-cover flex-1 max-w-[880px]"
          placeholder="blur"
          priority
        />
      </div>

      <div className="flex flex-row justify-center gap-x-8">
        <div className="flex flex-col gap-y-10">
          <Image
            src={img6}
            alt="1"
            className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[280px] h-[200px] rounded-3xl object-cover"
            placeholder="blur"
            priority
          />
          <Image
            src={img6}
            alt="1"
            className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[280px] h-[200px] rounded-3xl object-cover"
            placeholder="blur"
            priority
          />
        </div>
        <Image
          src={img6}
          alt="1"
          className="xl:w-[880px] xl:h-[640px] lg:w-[320px] w-[280px] h-[200px] rounded-3xl object-cover"
          placeholder="blur"
          priority
        />
        <div className="flex flex-col gap-y-10">
          <Image
            src={img6}
            alt="1"
            className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[280px] h-[200px] rounded-3xl object-cover"
            placeholder="blur"
            priority
          />
          <Image
            src={img6}
            alt="1"
            className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[280px] h-[200px] rounded-3xl object-cover"
            placeholder="blur"
            priority
          />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-x-8 ">
        <Image
          src={img6}
          alt="1"
          className="xl:w-[420px] xl:h-[380px] lg:w-[320px] w-[280px] h-[250px] rounded-3xl object-cover flex-1 max-w-[880px]"
          placeholder="blur"
          priority
        />
        <Image
          src={img6}
          alt="1"
          className="xl:w-[420px] xl:h-[380px] lg:w-[320px] w-[280px] h-[250px] rounded-3xl object-cover"
          placeholder="blur"
          priority
        />
        <Image
          src={img6}
          alt="1"
          className="xl:w-[420px] xl:h-[380px] lg:w-[320px] w-[280px] h-[250px] rounded-3xl object-cover"
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
};

const Carousel = () => {
  useEffect(() => {
    const pictures = document.querySelectorAll(".slider .picture");
    const next = document.getElementById("next");
    const prev = document.getElementById("previous");

    let active = 0; // Start at the first image

    function loadShow() {
      let stt = 0;
      pictures.forEach((pic, index) => {
        if (index === active) {
          pic.style.transform = `none`;
          pic.style.zIndex = 1;
          pic.style.filter = "none";
          pic.style.opacity = 1;
        } else {
          const diff = Math.abs(index - active);
          pic.style.transform = `translateX(${
            150 * (index > active ? diff : -diff)
          }px) scale(${1 - 0.2 * diff})`;
          pic.style.zIndex = -diff;
          pic.style.filter = "blur(10px)";
          pic.style.opacity = diff > 2 ? 0 : 0.6;
        }
      });
    }

    loadShow();

    next.onclick = function () {
      active = (active + 1) % pictures.length; // Loop back to the first image
      loadShow();
    };

    prev.onclick = function () {
      active = (active - 1 + pictures.length) % pictures.length; // Loop back to the last image
      loadShow();
    };

    // Cleanup function
    return () => {
      next.onclick = null;
      prev.onclick = null;
    };
  }, []);

  return (
    <div className="flex items-center justify-center gap-[200px]">
      <button
        className="text-sky-500 bg-transparent border-none text-[250px] font-bold"
        id="previous"
      >
        &lt;
      </button>

      <div className="slider relative w-[800px] h-[560px] overflow-hidden">
        <Image
          src={img1}
          alt="1"
          className="picture absolute w-[800px] rounded-3xl"
          width={800}
          height={560}
        />
        <Image
          src={img2}
          alt="2"
          className="picture absolute w-[800px] rounded-3xl"
          width={800}
          height={560}
        />
        <Image
          src={img3}
          alt="3"
          className="picture absolute w-[800px] rounded-3xl"
          width={800}
          height={560}
        />
        <Image
          src={img4}
          alt="4"
          className="picture absolute w-[800px] rounded-3xl"
          width={800}
          height={560}
        />
      </div>

      <button
        className="text-sky-500 bg-transparent border-none text-[250px] font-bold"
        id="next"
      >
        &gt;
      </button>
    </div>
  );
};
export { GridImage, Carousel };
