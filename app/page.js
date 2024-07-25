"use client";
import Navbar from "@/components/Navbar";

import StatisticCard from "@/components/StatisticCard";

import Footer from "@/components/Footer";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const statisticsData = [
    {
      number: 1500,
      label: "Registrations",
      description: "1500+ registrations from across the country.",
    },
    {
      number: 500,
      label: "Offline Participants",
      description: "500+ participants joined the offline hackathon!",
    },
    {
      number: 100,
      label: "Volunteers",
      description: "To help you, get the best out of HackByte.",
    },
    {
      number: 120,
      label: "Projects",
      description: "Innovative submissions from various domains.",
    },
  ];

  const aboutData = [
    {
      imgSrc: "/aboutPage/img1.svg",
      title: "Collaborate and skill up",
      description:
        "Connect with people, form a team, learn new skills and develop amazing projects!",
    },
    {
      imgSrc: "/aboutPage/img2.svg",
      title: "Exciting Prices",
      description:
        "Top 3 teams plus best projects of each domain will win prizes which will be disclosed soon!",
    },
    {
      imgSrc: "/aboutPage/img3.svg",
      title: "Engaging Workshops",
      description:
        "Technical workshops and events like no-light event will keep the participants engaged throughout.",
    },
    {
      imgSrc: "/aboutPage/img4.svg",
      title: "Mentorship sessions",
      description:
        "Get mentorship and guidance from prominent technocrats of the industry.",
    },
    {
      imgSrc: "/aboutPage/img5.svg",
      title: "Recruitment offers",
      description:
        "Best performers will get recruitment offers from prestigious companies.",
    },
    {
      imgSrc: "/aboutPage/img6.svg",
      title: "Expand network",
      description:
        "Connect with industry professionals and recruiters and other teams to learn and grow more.",
    },
  ];
  const gridImage =
    "https://img.freepik.com/free-photo/aesthetic-minimal-white-grid-pattern-wallpaper_53876-96916.jpg?w=2000&t=st=1720271713~exp=1720272313~hmac=4bf0c737de802436d6775db246fd322cc7c497c72c9ea2edee3a1a8cb6b994ba";

  useEffect(() => {



    //the below is the code for rotating the mascot with the scroll
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".mascot",
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    // });

    // tl.fromTo(
    //   ".mascot",
    //   { rotation: 0, y: 100 },
    //   { rotation: 360, y: 0 }
    // );

    gsap.to(".mascot", {
      y: -20,
      duration: 0.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
    }, []);



  useEffect(() => {
    gsap.to(".bounce-svg", {
      y: -20,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "easeInOut",
    });
  }, []);

  return (
    <div className="overflow-x-hidden bg-custom-gradient">
      <Navbar />
      <div className=" relative ">
        <img
          src={gridImage}
          alt="grid"
          className="absolute w-full h-full object-cover  text-white mix-blend-overlay opacity-5  blur-sm"
        />
        <div className=" pt-10"></div>
        <div
          className="relative flex flex-col min-h-fit
            md:px-12 xl:px-20  "
        >
          <div className="flex items-center gap-4 flex-col justify-between min-h-[60rem] md:max-h-[70rem] relative">
            <div className="lg:text-[19.7rem] md:text-[12rem] text-white sm:text-[10rem] text-[6rem] sm:block cursor:pointer flex flex-nowrap font-bold tracking-normal px-2 md:px-0">
              GENESIS{" "}
              <span className="text-[50px] ml-8  absolute left-[1380px] top-[290px]  cursor:pointer tracking-normal">
                4.0
              </span>
            </div>

            {/* if the bouncing ball svg is needed the code is below */}
            <div className="bounce-svg absolute top-96 right-1 hidden sm:block md:right-2   lg:right-48 z-20 h-80 w-80 rounded-full bg-transparent backdrop-blur-3xl "></div>

            {/* the code for mascot */}
            <div className="lg:mt-[-25rem]  md:mt-[-15rem] h-[50rem] w-auto sm:h-[70rem] sm:mt-[-13rem]  md:w-full md:h-[70rem] lg:h-[100rem]  max-w-screen-xl mx-auto px-2 sm:px-0">
              <Image
                src="https://s3-alpha-sig.figma.com/img/e22a/e5af/28f38cae7afd544d9e8c5cf6ac6b911b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6Zd~CUMbaNCmAVd3N-2FngI2lYO~oiqmm6JWfc9im2BnpWyC14IgkInillqXYHZlFGGYj-qDMonkL12n~g2MmA5qp0DInbW6M2jEqXTzWKieTlq5b1GRhscoSed4vLD2CctAij-~FHA~Xs8fLC8ZOaQuCynF9s9~f~0aOzemx5oFF4bZmwDKEs9tQC27N8ZVczCnGgyt0swX~Z2ahWKY2AuIOTclQihEHBsyMOVNifgKtXNpubTBL3bc619opYTl4uXCAdIEWn0baYQf3ASpc0MqpBy2DddCafCnDQRPvCz3pB1bAQRRmQ40NA3PT6WOuPN0PvRRYZgmiP7T7NJDw__"
                alt="Mascot Image"
                height={1500}
                width={1500}
                className="w-full h-full object-cover mascot"
              />
            </div>

            {/* <div className="absolute bottom-36 hidden sm:block sm:left-48 md:left-52 z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="178"
                height="178"
                viewBox="0 0 178 178"
                fill="none"
                className="bounce-svg"
              >
                <g filter="url(#filter0_bii_56_11)">
                  <circle
                    cx="89.2531"
                    cy="89.3707"
                    r="88.5"
                    transform="rotate(-28.9066 89.2531 89.3707)"
                    fill="#77D9FA"
                    fill-opacity="0.08"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_bii_56_11"
                    x="-22.8632"
                    y="-22.7456"
                    width="224.233"
                    height="224.233"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="11.8"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_56_11"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_56_11"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="6"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect2_innerShadow_56_11"
                    />
                    <feOffset dx="6" dy="7" />
                    <feGaussianBlur stdDeviation="12.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_56_11"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="6"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect3_innerShadow_56_11"
                    />
                    <feOffset dx="-6" dy="-6" />
                    <feGaussianBlur stdDeviation="21" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.66 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_innerShadow_56_11"
                      result="effect3_innerShadow_56_11"
                    />
                  </filter>
                </defs>
              </svg>
            </div> */}
            <div className="bounce-svg absolute bottom-36 hidden sm:block sm:left-48  md:left-5 lg:left-72 z-20 h-72 w-72 rounded-full bg-transparent backdrop-blur-3xl   "></div>

            <div className=" lg:flex flex-col items-end gap-4">
              <div className="flex gap-6"></div>
            </div>
          </div>
        </div>
      </div>
      {/* rest of the code after loader */}
      <div className="w-full flex flex-col ">
        <div className="flex flex-col p-4 md:px-12 xl:px-20 py-16 md:py-24">
          <div
            className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 
            lg:grid-cols-3 xl:grid-cols-4 pt-8 md:pt-16"
          >
            {statisticsData.map((statistic, index) => (
              <StatisticCard key={index} {...statistic} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center p-4 md:px-12 xl:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start gap-16">
            <div className="w-full flex flex-col items-center gap-5">
              <div className="flex flex-col items-start gap-3">
                <p
                  className="self-stretch text-center text-[#7A7A7A] text-sm md:text-sm 
                    lg:text-base font-semibold leading-normal"
                >
                  Opportunities for Participants
                </p>
                <p
                  className="text-center text-[#F5F0D8] text-3xl lg:text-4xl 
                    font-medium leading-[44px]"
                >
                  Why participate in Hackbyte?
                </p>
              </div>
              <p
                className="text-center text-[#D1CAC7] text-lg lg:text-xl 
                  font-normal font-['Inter'] leading-[30px]"
              >
                HackByte 2.0 promises a wonderful experience to the
                participants.
              </p>
            </div>

            <div
              className="inline-flex flex-col py-[3rem] px-[2.275rem] rounded-[8px] border-2 border-[rgba(255,255,255,0.6)]"
              style={{
                background:
                  "radial-gradient(116.96% 115.94% at 9.81% 9.24%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-8">
                {aboutData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-5 ${
                      index >= 3 ? "xl:mt-9" : ""
                    }`}
                  >
                    <img
                      className="w-10 h-10 lg:w-12 lg:h-12"
                      src={item.imgSrc}
                      alt={`Image ${index + 1}`}
                    />
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-center text-[#D1CAC7] font-medium text-lg lg:text-xl">
                        {item.title}
                      </p>
                      <p className="text-center text-[#D1CAC7] font-medium leading-normal text-base md:text-sm lg:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="bg-[#EBB323] w-full h-full flex flex-col md:flex-row justify-between 
          items-center px-4 md:px-8 xl:px-36 pt-10 pb-28 lg:pb-48 xl:pb-40"
      >
        <div className="flex flex-col justify-center items-center max-w-lg">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p
                className=" text-black text-4xl lg:text-5xl font-medium 
                  leading-[2.75rem] tracking-tighter"
              >
                Join our mailing list!
              </p>
              <p
                className="max-w-[30rem] text-black text-base md:text-sm lg:text-lg 
                font-normal font-['Inter'] leading-6 sm:leading-7 tracking-tight"
              >
                To stay up-to-date with HackByte 2.0, consider subscribing to
                our mailing list. Helps us share important updates right away
                with hackers and enthusiasts alike !
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:pl-4">
              <div className="flex gap-3 sm:gap-4 items-center">
                <img
                  className="w-7 h-7 md:w-5 md:h-5"
                  src="/aboutPage/checkIcon.svg"
                />
                <p
                  className=" text-black text-base md:text-sm lg:text-lg font-normal 
                  font-['Inter'] leading-6 sm:leading-7 tracking-tight"
                >
                  Get updates about your application status
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <img
                  className="w-7 h-7 md:w-5 md:h-5"
                  src="/aboutPage/checkIcon.svg"
                />
                <p
                  className=" text-black text-base md:text-sm lg:text-lg font-normal 
                  font-['Inter'] leading-6 sm:leading-7 tracking-tight"
                >
                  Get notified for exciting events!
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <img
                  className="w-7 h-7 md:w-5 md:h-5"
                  src="/aboutPage/checkIcon.svg"
                />
                <p
                  className=" text-black text-base md:text-sm lg:text-lg font-normal 
                  font-['Inter'] leading-6 sm:leading-7 tracking-tight"
                >
                  Be the first ones to register for HackByte 2.0
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-xl flex justify-center items-center mb-16 lg:mb-0">
          <div className="max-w-md md:max-w-sm lg:max-w-md">
            <img src="/aboutPage/about_img2.png" />
          </div>
        </div>
      </div> */}

      {/* <div className="relative bg-[#000000] w-full h-full flex flex-col justify-end pt-48 md:pt-60 lg:pt-80">
        <NewsLetter />
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
            px-6 md:px-8 xl:px-20 py-20"
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
      </div> */}

      <Footer />
    </div>
  );
}
