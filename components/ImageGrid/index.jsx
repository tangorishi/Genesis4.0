"use client";

import Image from "next/image";

import React, { useRef, useEffect } from "react";

import img1 from "@/public/galleryPage/img1.webp";
import img2 from "@/public/galleryPage/img2.webp";
import img3 from "@/public/galleryPage/img3.webp";
import img4 from "@/public/galleryPage/img4.webp";
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

    <div className="w-full my-8 flex flex-col gap-y-10 ">
      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center gap-y-8 gap-x-8">
        <Image
          src={img6}
          alt="1"
          className="xl:w-[340px] xl:h-[310px] lg:w-[280px] max-w-[700px] h-[250px] rounded-3xl object-cover"
          placeholder="blur"
        />
        <Image
          src={img6}
          alt="1"
          className="xl:w-[340px] xl:h-[310px] lg:w-[280px] max-w-[700px] h-[250px] rounded-3xl object-cover"
          placeholder="blur"
        />
        <Image
          src={img6}
          alt="1"
          className="xl:h-[310px] lg:w-[320px] h-[250px] rounded-3xl object-cover lg:flex-1 lg:max-w-[880px] max-w-[700px]"
          placeholder="blur"
        />
      </div>

      <div className="flex flex-row gap-x-8 lg:gap-x-8 max-w-[700px] lg:max-w-fit mx-auto justify-between">
        <div className="flex flex-col lg:gap-y-10 gap-y-8">
          <Image
            src={img6}
            alt="1"
            className="flex:1 xl:flex-none xl:w-[420px] xl:h-[300px] lg:h-[550px] w-full h-[500px] rounded-3xl object-cover lg:w-max-[700px]"
            placeholder="blur"
          />
          <Image
            src={img6}
            alt="1"
            className="hidden xl:block xl:w-[420px] xl:h-[300px] lg:h-[250px] lg:w-[280px] w-[280px] h-[200px] rounded-3xl object-cover"
            placeholder="blur"
          />
        </div>
        <Image
          src={img6}
          alt="1"
          className="sm:hidden xl:block xl:flex-1 xl:h-[650px] xl:w-[716px] lg:h-[550px] lg:w-[400px] w-[280px] h-[200px] rounded-3xl object-cover"
          placeholder="blur"
        />
        <div className="flex flex-col lg:gap-y-10 gap-y-8">
          <Image
            src={img6}
            alt="1"
            className="lg:flex-1 xl:flex-none xl:block lg:h-[550px] xl:w-[420px] xl:h-[300px] w-[300px] h-[230px] rounded-3xl object-cover"
            placeholder="blur"
          />
          <Image
            src={img6}
            alt="1"
            className=" lg:hidden xl:block xl:w-[420px] xl:h-[300px] lg:h-[250px] lg:w-[280px] w-[300px] h-[230px] rounded-3xl object-cover"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center gap-y-8 gap-x-8">
        <Image
          src={img6}
          alt="1"
          className="xl:h-[310px] lg:w-[320px] h-[250px] rounded-3xl object-cover lg:flex-1 lg:max-w-[880px] max-w-[700px]"
          placeholder="blur"
        />
        <Image
          src={img6}
          alt="1"
          className="xl:w-[340px] xl:h-[310px] lg:w-[280px] h-[250px] rounded-3xl object-cover max-w-[700px]"
          placeholder="blur"
        />
        <Image
          src={img6}
          alt="1"
          className="xl:w-[340px] xl:h-[310px] lg:w-[280px] h-[250px] rounded-3xl object-cover max-w-[700px]"
          placeholder="blur"
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
        className="text-customArrow bg-transparent border-none text-[250px] font-bold"
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
        className="text-customArrow bg-transparent border-none text-[250px] font-bold"
        id="next"
      >
        &gt;
      </button>
    </div>
  );
};

export { GridImage, Carousel };
