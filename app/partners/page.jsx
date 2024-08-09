import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TitleSponsorCard from "@/components/TitleSponsorCard";
import SponsorCard from "@/components/ui/cards";

import codingNinjas from "@/public/partnersPage/codingNinjas.png";
import codechef from "@/public/partnersPage/codechef.png";
import ieeeRajasthan from "@/public/partnersPage/ieeeRajasthan.jpg";
import guvi from "@/public/partnersPage/guvi.webp";
import geeksForGeeks from "@/public/partnersPage/geeksforGeeks.png";
import starbucks from "@/public/partnersPage/starbucks.webp";
import decathlon from "@/public/partnersPage/decathlon.webp";
import paradyes from "@/public/partnersPage/paradyes.jpg";
import unstop from "@/public/partnersPage/unstop.jpg";
import tribevibe from "@/public/partnersPage/tribevibe.png";
import axure from "@/public/partnersPage/axure.jpg";
import siuk from "@/public/partnersPage/siuk.png";
import xyz from "@/public/partnersPage/xyz.jpg";

import Footer from "@/components/Footer";

export const metadata = {
  title: "Partners | Genesis",
  description:
    "Explore the invaluable support from our esteemed sponsors at HackByte – the premier hackathon hosted by IEEE MUJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
  keywords: "contact, genesis, reach us, get in touch",
  openGraph: {
    title: "Partners | Genesis",
    description:
      "Explore the invaluable support from our esteemed sponsors at HackByte – the premier hackathon hosted by IEEE MUJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
    url: "https://genesis.muj/partners",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "Genesis - IEEE MUJ Event",
    type: "website",
    locale: "en_US",
  },
};

const sponsorsData = [
  {
    sponsor: "Coding Ninjas",
    sponsorimgsrc: codingNinjas,
    site: "https://www.codingninjas.com",
  },
  {
    sponsor: "Codechef",
    sponsorimgsrc: codechef,
    site: "https://www.codechef.com",
  },
  {
    sponsor: "IEEE Rajasthan",
    sponsorimgsrc: ieeeRajasthan,
    site: "https://www.ieeerajasthan.org",
  },
  {
    sponsor: "Guvi",
    sponsorimgsrc: guvi,
    site: "https://www.guvi.in",
  },
  {
    sponsor: "GeeksForGeeks",
    sponsorimgsrc: geeksForGeeks,
    site: "https://www.geeksforgeeks.org",
  },
  {
    sponsor: "Starbucks",
    sponsorimgsrc: starbucks,
    site: "https://www.starbucks.com",
  },
  {
    sponsor: "Decathlon",
    sponsorimgsrc: decathlon,
    site: "https://www.decathlon.in",
  },
  {
    sponsor: "Paradyes",
    sponsorimgsrc: paradyes,
    site: "https://www.paradyes.com",
  },
  {
    sponsor: "Unstop",
    sponsorimgsrc: unstop,
    site: "https://unstop.com",
  },
  {
    sponsor: "Tribevibe",
    sponsorimgsrc: tribevibe,
    site: "https://www.tribevibe.live",
  },
  {
    sponsor: "Axure",
    sponsorimgsrc: axure,
    site: "https://www.axure.com",
  },
  {
    sponsor: "SI UK",
    sponsorimgsrc: siuk,
    site: "https://www.studyin-uk.com",
  },
  {
    sponsor: ".xyz",
    sponsorimgsrc: xyz,
    site: "https://gen.xyz",
  },
];

const Partners = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        className="bg-custom-gradient flex flex-col items-center min-h-screen
          px-6 md:px-16 lg:px-20 2xl:px-32 py-40"
      >
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-[#F5F0D8] text-[2rem] font-normal md:text-[5rem]">
            Partners
          </p>
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <p
              className="w-full lg:max-w-[80%] text-white font-[Inter]
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
      <Footer />
    </div>
  );
};

export default Partners;
