'use client';
import Navbar from "@/components/Navbar";
import ThemeTitle from "@/components/ThemeTitle";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { HackbyteLogo } from "@/components/HackbyteLogo";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import {motion} from "framer-motion";

import NewsLetter from "@/components/NewsLetter";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";
import ParticipateAdvantage from "@/components/ParticipateAdvantage";
import CountAnimation from "@/components/CountAnimation";

const SocialMediaIcon = ({ Icon, href }) => (
  <a href={href} target="_blank">
    <Icon className="w-7 h-7 text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
  </a>
);

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

  const advantages = [
    {
      icon: '/img1.svg',
      heading: 'Collaborate and skill up',
      description: 'Connect with people, form a team, learn new skills and develop amazing projects!'
    },
    {
      icon: '/img2.svg',
      heading: 'Win exciting prizes',
      description: 'Top 3 teams plus best projects of each domain will win prizes which will be disclosed soon!'
    },
    {
      icon: '/img3.svg',
      heading: 'Engaging Workshops',
      description: 'Technical workshops and events like no-light event will keep the participants engaged throughout.'
    },
    {
      icon: '/img4.svg',
      heading: 'Mentorship sessions',
      description: 'Get mentorship and guidance from prominent technocrats of the industry.'
    },
    {
      icon: '/img5.svg',
      heading: 'Recruitment offers',
      description: 'Best performers will get recruitment offers from prestigious companies.'
    },
    {
      icon: '/img6.svg',
      heading: 'Expand network',
      description: 'Connect with industry professionals and recruiters and other teams to learn and grow more.'
    }
  ]

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        className="relative flex flex-col min-h-fit
          p-4 pt-20 md:pt-32 md:px-12 xl:px-20 md:py-4"
      >
        <div
          className="flex flex-wrap justify-between items-center
            pt-16 gap-4 xl:pt-12 lg:gap-0"
        >
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <ThemeTitle />
          </div>
          <div className="flex flex-col items-start gap-3 w-full lg:items-end lg:w-1/2">
            <p
              className="text-[#FAF8ED] text-[1.25rem] font-medium text-left
              lg:text-right lg:text-[1.5rem]"
            >
              Join us at IIIT Jabalpur, April
              <br />
              5-7 for an in-person hackathon.
            </p>
            <Link href="/prizes#logitech-tracks" passHref>
              <Button
                size="sm"
                className="bg-[#FAF8ED] text-black text-[1.125rem] font-semibold p-6
                rounded-none hover:bg-[#FAF8ED] hover:text-black hover:scale-105
                transition-transform ease-in-out duration-300"
                style={{
                  boxShadow:
                    "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
                }}
              >
                Explore Logitech Tracks
                <ArrowTopRightIcon className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        <HackbyteLogo />

        <div className="flex items-center justify-between gap-4 my-12">
          <div className="flex items-stretch">
            <div
              className="flex justify-center items-center py-2 md:py-2.5 px-4 md:px-6"
              style={{ border: "1.275px solid #FAF8ED" }}
            >
              <div className="flex justify-center items-center gap-4">
                <img
                  src="/tpcLogo.svg"
                  alt="TPC Logo"
                  className="w-[4rem] h-[2.125rem]"
                />
                <p className="text-[#FAF8ED] text-[0.75rem] font-[600]">
                  Organised by
                  <br className="hidden md:block" /> The Programming Club of
                  IIITDMJ
                </p>
              </div>
            </div>
            <div
              className="flex justify-center items-center py-2 md:py-2.5 px-4 md:px-6"
              style={{ border: "1.275px solid #FAF8ED" }}
            >
              <div className="flex justify-center items-center">
                <img
                  src="/iiitdmjLogo.svg"
                  alt="IIITDMJ Logo"
                  className="w-[6rem] h-[3rem]"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-4">
            <p
              className="text-[#FAF8ED] text-[1rem] xl:text-[1.25rem]
                font-semibold text-right"
            >
              We Think to Innovate
            </p>
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

      <div className="w-full flex flex-col bg-[#101010]">
        <motion.div
          className="flex flex-row mt-6 md:mt-8 items-center justify-center"
        >
          <div className="flex flex-col w-[30%] items-center">
            <CountAnimation targetValue={10}/>
            <div className="md:text-3xl text-center text-slate-200">Sponsors</div>
          </div>
          <div className="flex flex-col w-[30%] items-center">
            <CountAnimation targetValue={2000}/>
            <div className="md:text-3xl text-center text-slate-200">Participants</div>
          </div>
          <div className="flex flex-col w-[30%] items-center">
            <CountAnimation targetValue={300000}/>
            <div className="md:text-3xl text-center text-slate-200">Prize Pool</div>
          </div>
        </motion.div>

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
                  Why participate in Genesis 4.0?
                </p>
              </div>
              <p
                className="text-center text-[#D1CAC7] text-lg lg:text-xl
                  font-normal font-['Inter'] leading-[30px]"
              >
                Genesis 4.0 promises a wonderful experience to the
                participants.
              </p>
            </div>
            <div
              className="flex justify-center flex-wrap mt-12 items-center bg-gradient-to-r from-[#9d00ff1f] to-[#5600ff4d] rounded-2xl pt-4 md:pt-0">
              {
                advantages.map((advantage, index) => (
                  <ParticipateAdvantage key={index} icon={advantage.icon} heading={advantage.heading}
                                        description={advantage.description}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div
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
      </div>

      <div className="relative bg-[#000000] w-full h-full flex flex-col justify-end pt-48 md:pt-60 lg:pt-80">
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
      </div>
      <Footer />
    </div>
  );
}
