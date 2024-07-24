import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TitleSponsorCard from "@/components/TitleSponsorCard";
import SponsorCard from "@/components/ui/cards";

import codingNinjas from "@/public/partnersPage/codingNinjas.png";
import codechef from "@/public/partnersPage/codechef.png";
import ieeeRajasthan from "@/public/partnersPage/ieeeRajasthan.jpg";
import guvi from "@/public/partnersPage/guvi.webp";
import vivo from "@/public/partnersPage/vivo.jpg";
import starbucks from "@/public/partnersPage/starbucks.webp";
import decathlon from "@/public/partnersPage/decathlon.webp";
import paradyes from "@/public/partnersPage/paradyes.jpg";
import unstop from "@/public/partnersPage/unstop.jpg";
import tribevibe from "@/public/partnersPage/tribevibe.png";
import axure from "@/public/partnersPage/axure.jpg";
import siuk from "@/public/partnersPage/siuk.png";
import xyz from "@/public/partnersPage/xyz.jpg";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Partners | HackByte",
  description:
    "Explore the invaluable support from our esteemed sponsors at HackByte – the premier hackathon hosted by IIITDMJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
  keywords:
    "Sponsors, Partners, Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech, Collaboration, Innovation, Community Support, Technology Events",
  openGraph: {
    title: "Partners | HackByte",
    description:
      "Explore the invaluable support from our esteemed sponsors at HackByte – the premier hackathon hosted by IIITDMJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
    url: "https://hackbyte.in/partners",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackByte - IIITDMJ Hackathon",
    type: "website",
    locale: "en_US",
  },
};

const sponsorsData = [
  {
    sponsor: "Coding Ninjas",
    category: "Platform Partner",
    sponsorimgsrc: codingNinjas,
    site: "https://www.codingninjas.com",
  },
  {
    sponsor: "Codechef",
    category: "Gold Sponsor",
    sponsorimgsrc: codechef,
    site: "https://www.codechef.com",
  },
  {
    sponsor: "IEEE Rajasthan",
    category: "Gold Sponsor",
    sponsorimgsrc: ieeeRajasthan,
    site: "https://www.ieeerajasthan.org",
  },
  {
    sponsor: "Guvi",
    category: "Merch Partner",
    sponsorimgsrc: guvi,
    site: "https://www.guvi.in",
  },
  {
    sponsor: "Vivo",
    category: "Silver Sponsor",
    sponsorimgsrc: vivo,
    site: "https://www.vivo.com",
  },
  {
    sponsor: "Starbucks",
    category: "Platform Partner",
    sponsorimgsrc: starbucks,
    site: "https://www.starbucks.com",
  },
  {
    sponsor: "Decathlon",
    category: "Bronze Sponsor",
    sponsorimgsrc: decathlon,
    site: "https://www.decathlon.in",
  },
  {
    sponsor: "Paradyes",
    category: "Bronze Sponsor",
    sponsorimgsrc: paradyes,
    site: "https://www.paradyes.com",
  },
  {
    sponsor: "Unstop",
    category: "Track Sponsor",
    sponsorimgsrc: unstop,
    site: "https://unstop.com",
  },
  {
    sponsor: "Tribevibe",
    category: "Track Sponsor",
    sponsorimgsrc: tribevibe,
    site: "https://www.tribevibe.live",
  },
  {
    sponsor: "Axure",
    category: "Track Sponsor",
    sponsorimgsrc: axure,
    site: "https://www.axure.com",
  },
  {
    sponsor: "SI UK",
    category: "Track Sponsor",
    sponsorimgsrc: siuk,
    site: "https://www.studyin-uk.com",
  },
  {
    sponsor: ".xyz",
    category: "Track Sponsor",
    sponsorimgsrc: xyz,
    site: "https://gen.xyz",
  },
];

const Partners = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col items-center min-h-screen 
          px-6 md:px-16 lg:px-20 2xl:px-32 py-40"
      >
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-[#F5F0D8] text-[2rem] font-normal md:text-[5rem]">
            Partners
          </p>
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <p
              className="w-full lg:max-w-[80%] text-[#C3C3C3] font-[Inter] 
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            >
              We are proud to collaborate with visionary organizations that
              share our passion for innovation and technology. These esteemed
              partners play a crucial role in making GENESIS 4.0 a success.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-8 xl:gap-12">
          <TitleSponsorCard />

          <div
            className="w-full xl:max-w-[95%] 2xl:max-w-[90%] grid grid-cols-1 
              md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12"
          >
            {sponsorsData.map((sponsor, index) => {
              return <SponsorCard key={index} index={index} {...sponsor} />;
            })}
          </div>
        </div>
      </div>

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

export default Partners;
